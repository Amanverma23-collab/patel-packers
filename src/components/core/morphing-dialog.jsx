import React, {
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from 'react'
import {
  motion,
  AnimatePresence,
  MotionConfig,
} from 'motion/react'
import { createPortal } from 'react-dom'
import { cn } from '@/lib/utils'
import { XIcon } from 'lucide-react'
import useClickOutside from '@/hooks/useClickOutside'

const MorphingDialogContext = React.createContext(null)

export function useMorphingDialog() {
  const context = useContext(MorphingDialogContext)
  if (!context) {
    throw new Error(
      'useMorphingDialog must be used within a MorphingDialogProvider'
    )
  }
  return context
}

export function MorphingDialogProvider({ children, transition }) {
  const [isOpen, setIsOpen] = useState(false)
  const uniqueId = useId()
  const triggerRef = useRef(null)

  const contextValue = useMemo(
    () => ({
      isOpen,
      setIsOpen,
      uniqueId,
      triggerRef,
    }),
    [isOpen, uniqueId]
  )

  return (
    <MorphingDialogContext.Provider value={contextValue}>
      <MotionConfig transition={transition}>{children}</MotionConfig>
    </MorphingDialogContext.Provider>
  )
}

export function MorphingDialog({ children, transition }) {
  return (
    <MorphingDialogProvider transition={transition}>
      {children}
    </MorphingDialogProvider>
  )
}

export function MorphingDialogTrigger({
  children,
  className,
  style,
  triggerRef: externalRef,
}) {
  const { setIsOpen, isOpen, uniqueId, triggerRef: internalRef } = useMorphingDialog()
  const ref = externalRef || internalRef

  const handleClick = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen, setIsOpen])

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        setIsOpen(!isOpen)
      }
    },
    [isOpen, setIsOpen]
  )

  return (
    <motion.div
      ref={ref}
      layoutId={`dialog-${uniqueId}`}
      className={cn('morphing-dialog-trigger', className)}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      style={{ cursor: 'pointer', ...style }}
      role='button'
      tabIndex={0}
      aria-haspopup='dialog'
      aria-expanded={isOpen}
      aria-controls={`motion-ui-morphing-dialog-content-${uniqueId}`}
      aria-label={`Open dialog ${uniqueId}`}
    >
      {children}
    </motion.div>
  )
}

export function MorphingDialogContent({
  children,
  className,
  style,
}) {
  const { setIsOpen, isOpen, uniqueId, triggerRef } = useMorphingDialog()
  const containerRef = useRef(null)
  const [firstFocusableElement, setFirstFocusableElement] = useState(null)
  const [lastFocusableElement, setLastFocusableElement] = useState(null)

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
      if (event.key === 'Tab') {
        if (!firstFocusableElement || !lastFocusableElement) return

        if (event.shiftKey) {
          if (document.activeElement === firstFocusableElement) {
            event.preventDefault()
            lastFocusableElement.focus()
          }
        } else {
          if (document.activeElement === lastFocusableElement) {
            event.preventDefault()
            firstFocusableElement.focus()
          }
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [setIsOpen, firstFocusableElement, lastFocusableElement])

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden')
      const focusableElements = containerRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      if (focusableElements && focusableElements.length > 0) {
        setFirstFocusableElement(focusableElements[0])
        setLastFocusableElement(focusableElements[focusableElements.length - 1])
        focusableElements[0].focus()
      }
    } else {
      document.body.classList.remove('overflow-hidden')
      triggerRef.current?.focus()
    }
  }, [isOpen, triggerRef])

  useClickOutside(containerRef, () => {
    if (isOpen) {
      setIsOpen(false)
    }
  })

  return (
    <motion.div
      ref={containerRef}
      layoutId={`dialog-${uniqueId}`}
      className={cn('morphing-dialog-content', className)}
      style={{
        pointerEvents: 'auto',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        background: '#FFFFFF',
        ...style,
      }}
      role='dialog'
      aria-modal='true'
      aria-labelledby={`motion-ui-morphing-dialog-title-${uniqueId}`}
      aria-describedby={`motion-ui-morphing-dialog-description-${uniqueId}`}
    >
      {children}
    </motion.div>
  )
}

export function MorphingDialogContainer({ children, className, style }) {
  const { isOpen, uniqueId } = useMorphingDialog()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  if (!mounted) return null

  return createPortal(
    <AnimatePresence initial={false} mode='sync'>
      {isOpen && (
        <>
          <motion.div
            key={`backdrop-${uniqueId}`}
            className={cn('morphing-dialog-backdrop', className)}
            style={{
              position: 'fixed',
              inset: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(15, 23, 19, 0.65)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              zIndex: 9998,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <div
            className='morphing-dialog-portal-wrapper'
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px',
              pointerEvents: 'none',
              boxSizing: 'border-box',
            }}
          >
            {children}
          </div>
        </>
      )}
    </AnimatePresence>,
    document.body
  )
}

export function MorphingDialogTitle({
  children,
  className,
  style,
}) {
  const { uniqueId } = useMorphingDialog()

  return (
    <motion.div
      layoutId={`dialog-title-container-${uniqueId}`}
      className={className}
      style={style}
      layout
    >
      {children}
    </motion.div>
  )
}

export function MorphingDialogSubtitle({
  children,
  className,
  style,
}) {
  const { uniqueId } = useMorphingDialog()

  return (
    <motion.div
      layoutId={`dialog-subtitle-container-${uniqueId}`}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}

export function MorphingDialogDescription({
  children,
  className,
  variants,
  disableLayoutAnimation,
  style,
}) {
  const { uniqueId } = useMorphingDialog()

  return (
    <motion.div
      key={`dialog-description-${uniqueId}`}
      layoutId={
        disableLayoutAnimation
          ? undefined
          : `dialog-description-content-${uniqueId}`
      }
      variants={variants}
      className={className}
      style={style}
      initial='initial'
      animate='animate'
      exit='exit'
      id={`dialog-description-${uniqueId}`}
    >
      {children}
    </motion.div>
  )
}

export function MorphingDialogImage({
  src,
  alt,
  className,
  style,
}) {
  const { uniqueId } = useMorphingDialog()

  return (
    <motion.img
      src={src}
      alt={alt}
      className={cn(className)}
      layoutId={`dialog-img-${uniqueId}`}
      style={style}
    />
  )
}

export function MorphingDialogClose({
  children,
  className,
  variants,
  style,
}) {
  const { setIsOpen, uniqueId } = useMorphingDialog()

  const handleClose = useCallback((e) => {
    e.stopPropagation()
    setIsOpen(false)
  }, [setIsOpen])

  return (
    <motion.button
      onClick={handleClose}
      type='button'
      aria-label='Close dialog'
      key={`dialog-close-${uniqueId}`}
      className={cn('morphing-dialog-close-btn', className)}
      style={{
        position: 'absolute',
        top: '16px',
        right: '16px',
        width: '36px',
        height: '36px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(23, 42, 31, 0.75)',
        color: '#FFFFFF',
        border: '1px solid rgba(255, 255, 255, 0.25)',
        cursor: 'pointer',
        zIndex: 20,
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        transition: 'transform 0.2s ease, background 0.2s ease',
        ...style,
      }}
      initial='initial'
      animate='animate'
      exit='exit'
      variants={variants}
    >
      {children || <XIcon size={18} />}
    </motion.button>
  )
}

export {
  MorphingDialog as default,
}

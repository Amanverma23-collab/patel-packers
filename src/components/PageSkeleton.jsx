import React from 'react'
import './PageSkeleton.css'

export default function PageSkeleton() {
  return (
    <div className="page-skeleton-wrapper" aria-busy="true" aria-label="Loading Patel Packers & Movers...">
      {/* ── Top Announcement Bar Skeleton ── */}
      <div className="sk-topbar">
        <div className="sk-shimmer sk-topbar-pill" />
      </div>

      <div className="sk-container">
        {/* ── Navbar Skeleton ── */}
        <header className="sk-navbar">
          <div className="sk-logo-wrap">
            <div className="sk-shimmer sk-logo-badge" />
            <div className="sk-logo-lines">
              <div className="sk-shimmer sk-logo-title" />
              <div className="sk-shimmer sk-logo-subtitle" />
            </div>
          </div>

          <div className="sk-nav-links">
            <div className="sk-shimmer sk-nav-item" />
            <div className="sk-shimmer sk-nav-item" />
            <div className="sk-shimmer sk-nav-item" />
            <div className="sk-shimmer sk-nav-item" />
            <div className="sk-shimmer sk-nav-item" />
          </div>

          <div className="sk-nav-actions">
            <div className="sk-shimmer sk-nav-phone" />
            <div className="sk-shimmer sk-nav-btn" />
          </div>
        </header>

        {/* ── Hero Card Skeleton ── */}
        <div className="sk-hero-wrap">
          <div className="sk-hero-card">
            {/* Curved pill badge */}
            <div className="sk-shimmer sk-hero-badge" />

            {/* Massive Display H1 */}
            <div className="sk-shimmer sk-hero-h1-1" />
            <div className="sk-shimmer sk-hero-h1-2" />

            {/* Subtitle */}
            <div className="sk-shimmer sk-hero-sub" />

            {/* Dual CTA Buttons */}
            <div className="sk-hero-actions">
              <div className="sk-shimmer sk-hero-btn-primary" />
              <div className="sk-shimmer sk-hero-btn-secondary" />
            </div>

            {/* Carousel dots */}
            <div className="sk-hero-dots">
              <div className="sk-shimmer sk-dot sk-dot--active" />
              <div className="sk-shimmer sk-dot" />
              <div className="sk-shimmer sk-dot" />
              <div className="sk-shimmer sk-dot" />
            </div>
          </div>
        </div>

        {/* ── Trust / Stats Strip Skeleton ── */}
        <div className="sk-trust-strip">
          {[
            { id: 1, w1: '65px', w2: '90px' },
            { id: 2, w1: '45px', w2: '80px' },
            { id: 3, w1: '85px', w2: '75px' },
            { id: 4, w1: '60px', w2: '95px' },
          ].map((item) => (
            <div key={item.id} className="sk-trust-item">
              <div className="sk-shimmer sk-trust-icon" />
              <div className="sk-trust-texts">
                <div className="sk-shimmer sk-trust-h" style={{ width: item.w1 }} />
                <div className="sk-shimmer sk-trust-p" style={{ width: item.w2 }} />
              </div>
            </div>
          ))}
        </div>

        {/* ── Services Section Skeleton ── */}
        <div className="sk-services-section">
          <div className="sk-section-header">
            <div className="sk-shimmer sk-sec-badge" />
            <div className="sk-shimmer sk-sec-title" />
            <div className="sk-shimmer sk-sec-sub" />
          </div>

          <div className="sk-cards-grid">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="sk-service-card">
                <div className="sk-shimmer sk-card-img" />
                <div className="sk-card-content">
                  <div className="sk-shimmer sk-card-title" />
                  <div className="sk-shimmer sk-card-line-1" />
                  <div className="sk-shimmer sk-card-line-2" />
                  <div className="sk-shimmer sk-card-btn" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Quote Section Skeleton ── */}
        <div className="sk-quote-section">
          <div className="sk-quote-inner">
            <div className="sk-quote-left">
              <div className="sk-shimmer sk-sec-badge" />
              <div className="sk-shimmer sk-quote-title" />
              <div className="sk-shimmer sk-quote-sub" />
            </div>

            <div className="sk-quote-form">
              <div className="sk-form-row">
                <div className="sk-shimmer sk-input" />
                <div className="sk-shimmer sk-input" />
              </div>
              <div className="sk-form-row">
                <div className="sk-shimmer sk-input" />
                <div className="sk-shimmer sk-input" />
              </div>
              <div className="sk-form-row">
                <div className="sk-shimmer sk-input" />
                <div className="sk-shimmer sk-btn-submit" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

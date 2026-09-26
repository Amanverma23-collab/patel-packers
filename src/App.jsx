import { useState, useEffect, useRef, Fragment } from 'react'
import './App.css'
import AccordionGallery from './AccordionGallery'
import footerLogo from './assets/footer-logo.png'

/* ─────────────── ICONS ─────────────── */
const ArrowRightIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
)

const PhoneCallIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.27 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 5.55 5.55l1.1-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.5 16l.42.92z"/>
  </svg>
)

const TruckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="3" width="15" height="13" />
    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
)

const CloseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

const MenuIcon = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
    <line x1="3.5" y1="6.5" x2="20.5" y2="6.5" />
    <line x1="3.5" y1="12" x2="20.5" y2="12" />
    <line x1="3.5" y1="17.5" x2="20.5" y2="17.5" />
  </svg>
)

const StarIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="#D97706" stroke="none">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
)

const ShieldCheckIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <path d="m9 12 2 2 4-4"/>
  </svg>
)

const TeamUsersIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
)

const PackageBoxIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
    <line x1="12" y1="22.08" x2="12" y2="12"/>
  </svg>
)

const SupportHeadsetIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
  </svg>
)

/* ─────────────── GOLDEN TRUST BADGE ICONS ─────────────── */
/* ─────────────── REAL CIRCULAR ACCREDITATION BADGES (NO BOX) ─────────────── */
const TrustBadgesStrip = () => (
  <div className="pure-badges-strip" aria-label="Official Accreditations & Certifications">
    {/* Badge 1: IBA Approved */}
    <div className="pure-badge-item" title="IBA Approved - Indian Banks' Association">
      <img
        src="/badge-iba-approved.png"
        alt="IBA Approved - Indian Banks' Association Certified Movers"
        className="pure-badge-img"
        loading="lazy"
      />
    </div>

    {/* Badge 2: Government Verified */}
    <div className="pure-badge-item" title="Government Verified - ISO 9001:2015 & GST Registered">
      <img
        src="/badge-govt-verified.png"
        alt="Government of India Verified - ISO 9001:2015"
        className="pure-badge-img"
        loading="lazy"
      />
    </div>

    {/* Badge 3: Pan India Service */}
    <div className="pure-badge-item" title="Pan India Service - Doorstep Delivery Across All States">
      <img
        src="/badge-pan-india.png"
        alt="Pan India Service - Any City, Any Distance"
        className="pure-badge-img"
        loading="lazy"
      />
    </div>
  </div>
)

/* ─────────────── HERO SLIDES (AUTO-ROTATING EVERY 5 SECONDS) ─────────────── */
const HERO_SLIDES = [
  {
    id: 0,
    tag: 'Govt. Verified & IBA Approved Movers',
    headlineLead: 'Welcome to',
    headlineRest: 'Patel Packers and Movers',
    subtitle: 'Patel Packers and Movers is one of India’s most trusted relocation companies with verified doorstep delivery and damage-free moving experience.',
    btnLabel: 'Get Free Quote',
    serviceName: 'House Shifting',
    stampText: '★ 100% DAMAGE FREE ★ TOP RATED MOVERS ★ ALL INDIA ★',
    stampIcon: 'truck',
    image: '/ppm-hero-delivery.jpg',
    imageMobile: '/ppm-hero-delivery-mobile.jpg',
    objectPosition: 'center center',
    objectPositionMobile: 'center 40%',
    alt: 'Patel Packers and Movers Verified Delivery Team and Moving Truck',
    ratingScore: '4.9',
    ratingText: '15,000+ Safe Moves'
  },
  {
    id: 1,
    tag: 'Trusted Moving Partner in Mangalore',
    headlineLead: 'Best Packers and Movers',
    headlineRest: 'in Mangalore',
    subtitle: 'Doorstep safe household & office relocation across Mangalore and Karnataka with verified expert packing and zero damage guarantee.',
    btnLabel: 'Get Free Quote',
    serviceName: 'Mangalore Relocation',
    stampText: '★ TOP RATED IN MANGALORE ★ 100% SAFE ★ BEST RATES ★',
    stampIcon: 'truck',
    image: '/ppm-flatlay-mangalore.jpg',
    imageMobile: '/ppm-flatlay-mangalore-mobile.jpg',
    objectPosition: 'center center',
    objectPositionMobile: 'center center',
    alt: 'Best Packers and Movers in Mangalore - Patel Packers Relocation Supplies & Fleet',
    ratingScore: '5.0',
    ratingText: 'Top Rated in Mangalore'
  },
  {
    id: 2,
    tag: 'Pan-India Express Logistics',
    headlineLead: 'Seamless Express Relocation',
    headlineRest: 'Across 60+ Cities Nationwide',
    subtitle: 'GPS-tracked dedicated fleet, guaranteed on-time delivery commitment, and complete doorstep setup anywhere across India.',
    btnLabel: 'Book Express Move',
    serviceName: 'Domestic Relocation',
    stampText: '★ ON-TIME DELIVERY ★ GPS TRACKED FLEET ★ 60+ CITIES ★',
    stampIcon: 'map',
    image: '/ppm-car-transport.jpg',
    objectPosition: 'center center',
    alt: 'Patel Packers and Movers Safe Vehicle Carrier & Container Transport Across India',
    ratingScore: '4.9',
    ratingText: '60+ Cities Network'
  }
]

/* ─────────────── OUR BRANCHES (60 CITIES GRID) ─────────────── */
const BRANCH_CITIES = [
  'AJMER', 'BHILWARA', 'BHIWANDI', 'GUWAHATI', 'JAISALMER', 'MADURAI',
  'AMBALA', 'BHIWANI', 'BOKARO', 'GAUTAN', 'JALANDHAR', 'MANGALORE',
  'AGRA', 'BHUBANESHWAR', 'COIMBATORE', 'GORAKHPUR', 'JAIPUR', 'MOHALI',
  'ALIGARH', 'BATHINDA', 'CHANDIGARH', 'GURGAON', 'JAMMU', 'MATHURA',
  'AMRITSAR', 'BADDI', 'CHENNAI', 'HUBLI', 'KRISHNAGIRI', 'MANIPAL',
  'AHMEDNAGAR', 'BHOPAL', 'CHITTORGARH', 'HARIDWAR', 'KANPUR', 'MUMBAI',
  'BALOTRA', 'BHUBANESHWAR', 'DELHI', 'HYDERABAD', 'KARNAL', 'MEERUT',
  'BHINMAL', 'BARMER', 'DEHRADUN', 'INDORE', 'KOLKATA', 'NAGPUR',
  'BHILAI', 'BAREILLY', 'DHARAMSHALA', 'HISAR', 'LUCKNOW', 'NEEMUCH',
  'BIKANER', 'BHIWADI', 'FARIDABAD', 'HOOGHLY', 'LUDHIANA', 'NAGAUR'
]

/* ─────────────── SVG CARD BACKGROUND PATHS ─────────────── */
/* Mathematically parallel interlocking 45° step-down geometry for Desktop & Mobile */
const TopCardBg = () => (
  <>
    {/* Desktop Notch (screens > 860px) */}
    <svg
      className="card-bg-svg card-bg-svg--desktop"
      viewBox="0 0 1200 580"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M 0 28 Q 0 0 28 0 L 260 0 Q 275 0 286 11 L 326 51 Q 336 60 352 60 L 1172 60 Q 1200 60 1200 88 L 1200 552 Q 1200 580 1172 580 L 420 580 Q 405 580 395 570 L 355 530 Q 345 520 330 520 L 28 520 Q 0 520 0 492 Z"
        fill="#FFFFFF"
      />
    </svg>
    {/* Mobile Notch (screens <= 860px) */}
    <svg
      className="card-bg-svg card-bg-svg--mobile"
      viewBox="0 0 390 820"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M 0 16 Q 0 0 16 0 L 165 0 Q 176 0 184 8 L 206 34 Q 214 44 226 44 L 374 44 Q 390 44 390 60 L 390 790 Q 390 820 366 820 L 170 820 Q 158 820 150 812 L 130 792 Q 122 784 110 784 L 16 784 Q 0 784 0 768 Z"
        fill="#FFFFFF"
      />
    </svg>
  </>
)

const BottomCardBg = () => (
  <>
    {/* Desktop Notch (screens > 860px) */}
    <svg
      className="card-bg-svg card-bg-svg--desktop"
      viewBox="0 0 1200 380"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M 0 28 Q 0 0 28 0 L 330 0 Q 345 0 355 10 L 395 50 Q 405 60 420 60 L 1172 60 Q 1200 60 1200 88 L 1200 352 Q 1200 380 1172 380 L 28 380 Q 0 380 0 352 Z"
        fill="#FFFFFF"
      />
    </svg>
    {/* Mobile Notch (screens <= 860px) */}
    <svg
      className="card-bg-svg card-bg-svg--mobile"
      viewBox="0 0 390 780"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M 0 16 Q 0 0 16 0 L 110 0 Q 122 0 130 5 L 150 18 Q 158 23 170 23 L 374 23 Q 390 23 390 39 L 390 764 Q 390 780 374 780 L 16 780 Q 0 780 0 764 Z"
        fill="#FFFFFF"
      />
    </svg>
  </>
)

/* Mathematically matching dipped interlocking seam geometry for About Us & Why Choose Us (Centered at 50%) */
const AboutCardBg = () => (
  <>
    {/* Desktop Notch (screens > 860px) - Centered at x = 600 */}
    <svg
      className="card-bg-svg card-bg-svg--desktop"
      viewBox="0 0 1200 492"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M 0 28 Q 0 0 28 0 L 1172 0 Q 1200 0 1200 28 L 1200 428 Q 1200 456 1172 456 L 750 456 C 715 456 715 492 680 492 L 520 492 C 485 492 485 456 450 456 L 28 456 Q 0 456 0 428 Z"
        fill="#FFFFFF"
      />
    </svg>
    {/* Mobile Notch (screens <= 860px) - Centered at x = 195 */}
    <svg
      className="card-bg-svg card-bg-svg--mobile"
      viewBox="0 0 390 880"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M 0 16 Q 0 0 16 0 L 374 0 Q 390 0 390 16 L 390 844 Q 390 860 374 860 L 245 860 C 230 860 230 880 215 880 L 175 880 C 160 880 160 860 145 860 L 16 860 Q 0 860 0 844 Z"
        fill="#FFFFFF"
      />
    </svg>
  </>
)

const WhyChooseCardBg = () => (
  <>
    {/* Desktop Notch (screens > 860px) - Top bump + Bottom dip centered at x = 600 */}
    <svg
      className="card-bg-svg card-bg-svg--desktop"
      viewBox="0 0 1200 340"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M 0 28 Q 0 0 28 0 L 450 0 C 485 0 485 36 520 36 L 680 36 C 715 36 715 0 750 0 L 1172 0 Q 1200 0 1200 28 L 1200 276 Q 1200 304 1172 304 L 750 304 C 715 304 715 340 680 340 L 520 340 C 485 340 485 304 450 304 L 28 304 Q 0 304 0 276 Z"
        fill="#FFFFFF"
      />
    </svg>
    {/* Mobile Notch (screens <= 860px) - Top bump + Bottom dip centered at x = 195 */}
    <svg
      className="card-bg-svg card-bg-svg--mobile"
      viewBox="0 0 390 896"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M 0 16 Q 0 0 16 0 L 145 0 C 160 0 160 20 175 20 L 215 20 C 230 20 230 0 245 0 L 374 0 Q 390 0 390 16 L 390 860 Q 390 876 374 876 L 245 876 C 230 876 230 896 215 896 L 175 896 C 160 896 160 876 145 876 L 16 876 Q 0 876 0 860 Z"
        fill="#FFFFFF"
      />
    </svg>
  </>
)

const GalleryCardBg = () => (
  <>
    {/* Desktop Notch (screens > 860px) - Top bump centered at x = 600, mirror contour of Why Choose Us */}
    <svg
      className="card-bg-svg card-bg-svg--desktop"
      viewBox="0 0 1200 564"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M 0 28 Q 0 0 28 0 L 450 0 C 485 0 485 36 520 36 L 680 36 C 715 36 715 0 750 0 L 1172 0 Q 1200 0 1200 28 L 1200 536 Q 1200 564 1172 564 L 28 564 Q 0 564 0 536 Z"
        fill="#FFFFFF"
      />
    </svg>
    {/* Mobile Notch (screens <= 860px) - Top bump centered at x = 195 */}
    <svg
      className="card-bg-svg card-bg-svg--mobile"
      viewBox="0 0 390 698"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M 0 16 Q 0 0 16 0 L 145 0 C 160 0 160 20 175 20 L 215 20 C 230 20 230 0 245 0 L 374 0 Q 390 0 390 16 L 390 682 Q 390 698 374 698 L 16 698 Q 0 698 0 682 Z"
        fill="#FFFFFF"
      />
    </svg>
  </>
)

/* Mathematically matching stepped-down interlocking seam geometry for Customer Reviews & Free Quote */
const ReviewsCardBg = () => (
  <>
    {/* Desktop Notch (screens > 860px) - Symmetrical rounded corners with balanced ribbon gap */}
    <svg
      className="card-bg-svg card-bg-svg--desktop"
      viewBox="0 0 1200 360"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M 0 28 Q 0 0 28 0 L 1172 0 Q 1200 0 1200 28 L 1200 326 Q 1200 350 1176 342 L 1110 320 Q 1080 310 1050 310 L 150 310 Q 120 310 90 300 L 24 278 Q 0 270 0 246 L 0 28 Z"
        fill="#FFFFFF"
      />
    </svg>
    {/* Mobile (screens <= 860px) - Exact Desktop-Matching 3-Stage Wave (High-Left -> Flat Middle -> Dip at Right) */}
    <svg
      className="card-bg-svg card-bg-svg--mobile"
      viewBox="0 0 390 316"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M 0 16 Q 0 0 16 0 L 374 0 Q 390 0 390 16 L 390 284 Q 390 300 374 300 L 340 300 C 320 300 310 288 290 288 L 100 288 C 80 288 70 276 50 276 L 16 276 Q 0 276 0 260 L 0 16 Z"
        fill="#FFFFFF"
      />
    </svg>
  </>
)

const QuoteCardBg = () => (
  <>
    {/* Desktop Notch (screens > 860px) - Symmetrical rounded corners with balanced ribbon gap */}
    <svg
      className="card-bg-svg card-bg-svg--desktop"
      viewBox="0 0 1200 360"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M 0 34 Q 0 10 24 18 L 90 40 Q 120 50 150 50 L 1050 50 Q 1080 50 1110 60 L 1176 82 Q 1200 90 1200 114 L 1200 332 Q 1200 360 1172 360 L 28 360 Q 0 360 0 332 L 0 34 Z"
        fill="#FFFFFF"
      />
    </svg>
    {/* Mobile (screens <= 860px) - Exact Desktop-Matching 3-Stage Wave (High-Left -> Flat Middle -> Dip at Right) */}
    <svg
      className="card-bg-svg card-bg-svg--mobile"
      viewBox="0 0 390 355"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M 0 32 Q 0 16 16 16 L 50 16 C 70 16 80 28 100 28 L 290 28 C 310 28 320 40 340 40 L 374 40 Q 390 40 390 56 L 390 339 Q 390 355 374 355 L 16 355 Q 0 355 0 339 L 0 32 Z"
        fill="#FFFFFF"
      />
    </svg>
  </>
)

const MOVING_OPTIONS = [
  {
    value: 'house',
    label: 'House Shifting',
    badge: 'Popular',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    )
  },
  {
    value: 'loading',
    label: 'Loading & Unloading',
    badge: 'Safe Care',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5l-5-3-5 3M17 19l-5 3-5-3"/>
      </svg>
    )
  },
  {
    value: 'office',
    label: 'Office Relocation',
    badge: 'Corporate',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    )
  },
  {
    value: 'vehicle',
    label: 'Vehicle Transport',
    badge: 'Carrier',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13"/>
        <polygon points="16 8 20 8 23 11 23 16 16 16 8"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    )
  },
  {
    value: 'warehouse',
    label: 'Warehouse Storage',
    badge: 'Secure',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="21 8 21 21 3 21 3 8"/>
        <rect x="1" y="3" width="22" height="5"/>
        <line x1="10" y1="12" x2="14" y2="12"/>
      </svg>
    )
  }
]

/* ─────────────── MAIN APP ─────────────── */
export default function App() {
  const [activeNav, setActiveNav] = useState('Home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [quoteOpen, setQuoteOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('House Shifting')
  const [movingType, setMovingType] = useState('')
  const [selectOpen, setSelectOpen] = useState(false)
  const selectRef = useRef(null)
  const selectedMovingOption = MOVING_OPTIONS.find(opt => opt.value === movingType)

  /* Hero Carousel State - Auto-switch every 5000ms */
  const [heroSlide, setHeroSlide] = useState(0)
  const [timerKey, setTimerKey] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % HERO_SLIDES.length)
      setTimerKey((k) => k + 1)
    }, 5000)
    return () => clearInterval(timer)
  }, [timerKey])

  const goToHeroSlide = (idx) => {
    setHeroSlide(idx)
    setTimerKey((k) => k + 1)
  }

  const prevHeroSlide = () => {
    setHeroSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
    setTimerKey((k) => k + 1)
  }

  const nextHeroSlide = () => {
    setHeroSlide((prev) => (prev + 1) % HERO_SLIDES.length)
    setTimerKey((k) => k + 1)
  }

  const activeHero = HERO_SLIDES[heroSlide]

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (selectRef.current && !selectRef.current.contains(e.target)) {
        setSelectOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [])


  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'About', id: 'about' },
    { label: 'Why Choose Us', id: 'why-choose-us' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Reviews', id: 'reviews' },
    { label: 'Branches', id: 'branches' }
  ]

  const handleNavClick = (item) => {
    setActiveNav(item.label)
    if (item.id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const el = document.getElementById(item.id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  const handleOpenQuote = (service = 'House Shifting') => {
    setSelectedService(service)
    setQuoteOpen(true)
  }

  // Prevent scroll when modal open
  useEffect(() => {
    document.body.style.overflow = quoteOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [quoteOpen])

  return (
    <div className="canvas-wrapper">
      <div className="canvas-frame">

        {/* ════════════════ TOP SECTION (TAB + HEADER + UPPER CARD) ════════════════ */}
        <section className="hero-top-section">
          {/* Responsive SVG Notch Background (Plain White Card Surface) */}
          <TopCardBg />

          {/* Header Row Container */}
          <div className="top-header-row">
            {/* Top-Left Raised Logo Tab */}
            <div className="logo-tab">
              <a href="#home" className="brand-link" aria-label="Patel Packers and Movers Home">
                <img
                  src="/logo-ppm-transparent.png"
                  alt="Patel Packers & Movers Logo"
                  className="ppm-logo-img"
                />
                <div className="brand-text">
                  <span className="brand-title">PATEL</span>
                  <span className="brand-sub">PACKERS & MOVERS</span>
                </div>
              </a>
            </div>

            {/* Floating Dark Navigation Header */}
            <header className="dark-nav-header">
              <nav className="nav-items" aria-label="Main Navigation">
                {navLinks.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item)}
                    className={`nav-link-btn ${activeNav === item.label ? 'nav-link-btn--active' : ''}`}
                  >
                    {item.label}
                    {activeNav === item.label && <span className="nav-active-pill" />}
                  </button>
                ))}
              </nav>

              <div className="nav-actions">
                <a
                  href="tel:+918789227023"
                  className="nav-call-btn"
                  aria-label="Call Patel Packers & Movers"
                  title="Call Patel Packers & Movers"
                >
                  <span className="nav-call-icon"><PhoneCallIcon /></span>
                  <span className="nav-call-label">CALL</span>
                </a>

                <button
                  className="mobile-toggle"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-label="Toggle Navigation"
                >
                  {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
                </button>
              </div>
            </header>

            {/* Mobile dropdown menu */}
            {mobileMenuOpen && (
              <div className="mobile-nav-popup">
                {navLinks.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => { handleNavClick(item); setMobileMenuOpen(false) }}
                    className="mobile-nav-link"
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  onClick={() => { handleOpenQuote(); setMobileMenuOpen(false) }}
                  className="btn-pill-dark mobile-quote-btn"
                >
                  Get Free Quote <ArrowRightIcon />
                </button>
              </div>
            )}
          </div>

          {/* Upper Card Main Content Layout: Inset Hero Card inside straight rectangle */}
          <div className="top-card-content top-card-content--centered">
            <div className="hero-inset-card">
              {/* Auto-Rotating Inset Hero Photos */}
              <div className="hero-inset-media" aria-hidden="true">
                {HERO_SLIDES.map((slide, idx) => (
                  <Fragment key={slide.id}>
                    <img
                      src={slide.image}
                      alt={`${slide.headlineLead} ${slide.headlineRest}`}
                      className={`hero-inset-photo hero-inset-photo--desktop${slide.imageMobile ? ' hero-inset-photo--has-mobile' : ''} ${heroSlide === idx ? 'hero-inset-photo--active' : ''}`}
                      style={slide.objectPosition ? { objectPosition: slide.objectPosition } : undefined}
                      loading={idx === 0 ? "eager" : "lazy"}
                    />
                    {slide.imageMobile ? (
                      <img
                        src={slide.imageMobile}
                        alt={`${slide.headlineLead} ${slide.headlineRest}`}
                        className={`hero-inset-photo hero-inset-photo--mobile ${heroSlide === idx ? 'hero-inset-photo--active' : ''}`}
                        style={slide.objectPositionMobile ? { objectPosition: slide.objectPositionMobile } : (slide.objectPosition ? { objectPosition: slide.objectPosition } : undefined)}
                        loading={idx === 0 ? "eager" : "lazy"}
                      />
                    ) : null}
                  </Fragment>
                ))}
                <div className="hero-inset-scrim" />
              </div>

              {/* Centered Hero Content */}
              <div key={heroSlide} className="hero-center-content hero-text-fade">
                {/* Centered Main Headline */}
                <h1 className="display-h1">
                  <span className="hero-h1-lead">{activeHero.headlineLead}</span>
                  <span className="hero-h1-rest">{activeHero.headlineRest}</span>
                </h1>

                {/* Centered Subtitle */}
                <p className="display-sub">
                  {activeHero.subtitle}
                </p>

                {/* Centered Dual Action Buttons */}
                <div className="action-button-group">
                  <button
                    onClick={() => handleOpenQuote(activeHero.serviceName)}
                    className="btn-pill-primary hero-btn-quote"
                    id="btn-hero-start"
                  >
                    <span>{activeHero.btnLabel}</span>
                    <ArrowRightIcon />
                  </button>

                  <a
                    href="tel:+918789227023"
                    className="btn-pill-secondary hero-btn-call"
                    aria-label="Call Patel Packers & Movers"
                    title="Call Patel Packers & Movers"
                  >
                    <PhoneCallIcon />
                    <span>Call Now</span>
                  </a>
                </div>

                {/* Centered 5-Second Carousel Progress Bar & Controls */}
                <div className="hero-indicators-bar" aria-label="Hero slide indicators">
                  <button
                    type="button"
                    className="hero-nav-arrow"
                    onClick={prevHeroSlide}
                    aria-label="Previous Slide"
                    title="Previous Slide"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>

                  {HERO_SLIDES.map((slide, idx) => (
                    <button
                      key={slide.id}
                      type="button"
                      onClick={() => goToHeroSlide(idx)}
                      className={`hero-indicator-pill ${heroSlide === idx ? 'hero-indicator-pill--active' : ''}`}
                      aria-label={`Slide ${idx + 1}: ${slide.headlineLead} ${slide.headlineRest}`}
                      title={`Slide ${idx + 1}`}
                    >
                      <span
                        className="hero-indicator-progress-fill"
                        key={heroSlide === idx ? `fill-${heroSlide}-${timerKey}` : `inactive-${idx}`}
                      />
                    </button>
                  ))}

                  <button
                    type="button"
                    className="hero-nav-arrow"
                    onClick={nextHeroSlide}
                    aria-label="Next Slide"
                    title="Next Slide"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Floating Circular Stamp Badge on Corner */}
              <div className="rotating-badge-container">
                <svg className="rotating-text-ring" viewBox="0 0 140 140">
                  <path
                    id="circleTextPath"
                    d="M 70,70 m -48,0 a 48,48 0 1,1 96,0 a 48,48 0 1,1 -96,0"
                    fill="none"
                  />
                  <text className="stamp-text">
                    <textPath href="#circleTextPath" startOffset="0%" key={activeHero.stampText}>
                      {activeHero.stampText}
                    </textPath>
                  </text>
                </svg>
                <div className="badge-center-icon">
                  {activeHero.stampIcon === 'truck' && <TruckIcon />}
                  {activeHero.stampIcon === 'package' && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                      <line x1="12" y1="22.08" x2="12" y2="12"/>
                    </svg>
                  )}
                  {activeHero.stampIcon === 'map' && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════ BOTTOM SECTION (LOWER CARD + 3 TILES) ════════════════ */}
        <section id="services" className="hero-bottom-section">
          {/* Responsive SVG Matching Notch Background */}
          <BottomCardBg />

          <div className="bottom-card-content">
            {/* Left: Tagline + Subtitle + Explore Button */}
            <div className="bottom-card-left">
              <div className="outline-tag-badge">
                <span>THE BEST CHOICE</span>
              </div>

              <h2 className="display-h2">
                KEEP IT SAFE,<br />
                KEEP IT SIMPLE.
              </h2>

              <p className="bottom-sub">
                Multi-layer bubble wrap + certified handlers. Nothing left to chance.
              </p>

              <div className="bottom-action-row">
                <button
                  onClick={() => handleOpenQuote('Explore Services')}
                  className="btn-outline-pill"
                  id="btn-explore-services"
                >
                  <span>Explore services</span>
                  <ArrowRightIcon />
                </button>

                <button
                  onClick={() => handleOpenQuote('Instant Quote')}
                  className="btn-circle-outline"
                  aria-label="Instant Quote"
                >
                  <ArrowRightIcon />
                </button>
              </div>
            </div>

            {/* Right: 3 Rounded Vertical Service Cards */}
            <div className="bottom-card-right">
              <div className="service-tiles-grid">
                {/* Tile 1: House Shifting */}
                <div
                  className="service-tile-card"
                  onClick={() => handleOpenQuote('House Shifting')}
                  role="button"
                  tabIndex={0}
                >
                  <img
                    src="/tile-packing.jpg"
                    alt="House Shifting Packing"
                    className="tile-img"
                  />
                  <div className="tile-overlay" />
                  <span className="tile-label">HOUSE SHIFTING</span>
                </div>

                {/* Tile 2: Loading & Unloading */}
                <div
                  className="service-tile-card"
                  onClick={() => handleOpenQuote('Loading & Unloading')}
                  role="button"
                  tabIndex={0}
                >
                  <img
                    src="/tile-loading.jpg"
                    alt="Safe Loading and Unloading Services"
                    className="tile-img"
                  />
                  <div className="tile-overlay" />
                  <span className="tile-label">LOADING & UNLOADING</span>
                </div>

                {/* Tile 3: Office Relocation */}
                <div
                  className="service-tile-card"
                  onClick={() => handleOpenQuote('Office Relocation')}
                  role="button"
                  tabIndex={0}
                >
                  <img
                    src="/ppm-team-work.jpg"
                    alt="Office Relocation & Corporate Moving"
                    className="tile-img"
                  />
                  <div className="tile-overlay" />
                  <span className="tile-label">OFFICE RELOCATION</span>
                </div>

                {/* Tile 4: Vehicle Transport */}
                <div
                  className="service-tile-card"
                  onClick={() => handleOpenQuote('Vehicle Transport')}
                  role="button"
                  tabIndex={0}
                >
                  <img
                    src="/tile-delivery.jpg"
                    alt="Vehicle Transport & Doorstep Delivery"
                    className="tile-img"
                  />
                  <div className="tile-overlay" />
                  <span className="tile-label">VEHICLE TRANSPORT</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════ GOLDEN ACCREDITATIONS & TRUST BADGES ════════════════ */}
        <TrustBadgesStrip />

        {/* ════════════════ ABOUT US SECTION ════════════════ */}
        <section id="about" className="about-section">
          {/* Responsive SVG Matching Notch Background (Upper Card of Seam) */}
          <AboutCardBg />

          <div className="about-card">
            <div className="about-compact-grid">
              {/* Left Column: Brand Story + Core Stats + Actions */}
              <div className="about-compact-left">
                <div className="outline-tag-badge">
                  <span>ABOUT PATEL PACKERS & MOVERS</span>
                </div>

                <h2 className="display-h2 about-compact-title">
                  OVER A DECADE OF TRUST,<br />
                  YOUR GOODS — OUR RESPONSIBILITY.
                </h2>

                <p className="about-compact-desc">
                  Headquartered in Mangalore and operating across Pan-India, <strong>Patel Packers and Movers</strong> has spent over a decade perfecting safe, reliable, and stress-free relocations. From family homes to corporate offices and personal vehicles, our trained specialists handle every move with multi-layer protective packaging and guaranteed transit insurance.
                </p>

                {/* 3 Compact Metrics */}
                <div className="about-metrics-row">
                  <div className="about-metric-pill">
                    <span className="metric-num">10+</span>
                    <span className="metric-txt">Years Experience</span>
                  </div>
                  <div className="about-metric-pill">
                    <span className="metric-num">15,000+</span>
                    <span className="metric-txt">Successful Moves</span>
                  </div>
                  <div className="about-metric-pill">
                    <span className="metric-num">100%</span>
                    <span className="metric-txt">Transit Insured</span>
                  </div>
                </div>

                {/* Compact Action Buttons */}
                <div className="about-compact-actions">
                  <a
                    href="tel:+918789227023"
                    className="btn-pill-dark"
                    id="btn-about-call"
                  >
                    <PhoneCallIcon />
                    <span>Call 87892 27023</span>
                  </a>
                  <button
                    onClick={() => handleOpenQuote('About Us Section')}
                    className="btn-outline-pill"
                    id="btn-about-quote"
                  >
                    <span>Get Moving Quote</span>
                    <ArrowRightIcon />
                  </button>
                </div>
              </div>

              {/* Right Column: Visual Image Showcase + Trust Badges */}
              <div className="about-compact-right">
                <div className="about-compact-img-frame">
                  <img
                    src="/ppm-team-work.jpg"
                    alt="Patel Packers and Movers Relocation Specialists"
                    className="about-compact-img"
                  />
                  <div className="about-compact-badge">
                    <div className="compact-badge-icon">
                      <TruckIcon />
                    </div>
                    <div className="compact-badge-text">
                      <span className="compact-badge-title">GSTIN: 29BVKPP9967M1Z7</span>
                      <span className="compact-badge-sub">ISO 9001:2015 Certified • IBA Approved Transport</span>
                    </div>
                  </div>
                </div>

                {/* Trust Pills Strip */}
                <div className="about-compact-trust-strip">
                  <span className="trust-pill-tag">✓ Household & Office Relocation</span>
                  <span className="trust-pill-tag">✓ Car & Bike Carriers</span>
                  <span className="trust-pill-tag">✓ All Cards & UPI Accepted</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════ WHY CHOOSE US SECTION ════════════════ */}
        <section id="why-choose-us" className="why-choose-section">
          {/* Responsive SVG Matching Notch Background (Lower Card of Seam) */}
          <WhyChooseCardBg />

          <div className="why-choose-content">
            {/* Left Column: Tagline + Headline + Description + Know More Button */}
            <div className="why-choose-left">
              <div className="outline-tag-badge">
                <span>WHY CHOOSE US</span>
              </div>

              <h2 className="display-h2 why-choose-title">
                MOVING WITH<br />
                A HIGHER STANDARD
              </h2>

              <p className="why-choose-sub">
                We go beyond just moving boxes — we deliver peace of mind, with trusted service, trained professionals, and end-to-end support.
              </p>

              <button
                onClick={() => handleOpenQuote('Why Choose Us')}
                className="btn-pill-dark why-know-more-btn"
                id="btn-why-know-more"
              >
                <span>Know More</span>
                <ArrowRightIcon />
              </button>
            </div>

            {/* Right Column: 4 Feature Cards Row */}
            <div className="why-choose-right">
              <div className="why-cards-grid">
                {/* Card 1: Safe & Secure Handling */}
                <div className="why-box-card">
                  <div className="why-box-icon">
                    <ShieldCheckIcon />
                  </div>
                  <h3 className="why-box-title">Safe & Secure Handling</h3>
                  <p className="why-box-text">Your belongings are in expert hands.</p>
                </div>

                {/* Card 2: Experienced Team */}
                <div className="why-box-card">
                  <div className="why-box-icon">
                    <TeamUsersIcon />
                  </div>
                  <h3 className="why-box-title">Experienced Team</h3>
                  <p className="why-box-text">Trained and verified professionals.</p>
                </div>

                {/* Card 3: Quality Packing Materials */}
                <div className="why-box-card">
                  <div className="why-box-icon">
                    <PackageBoxIcon />
                  </div>
                  <h3 className="why-box-title">Quality Packing Materials</h3>
                  <p className="why-box-text">High-grade materials for extra safety.</p>
                </div>

                {/* Card 4: End-to-End Support */}
                <div className="why-box-card">
                  <div className="why-box-icon">
                    <SupportHeadsetIcon />
                  </div>
                  <h3 className="why-box-title">End-to-End Support</h3>
                  <p className="why-box-text">From packing to unpacking, we're with you.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════ GALLERY SECTION ════════════════ */}
        <section id="gallery" className="gallery-section">
          {/* Responsive SVG Matching Top Bump Background */}
          <GalleryCardBg />

          <div className="gallery-inner">
            {/* Left: Headline Panel */}
            <div className="gallery-headline-panel">
              <div className="outline-tag-badge">
                <span>OUR GALLERY</span>
              </div>

              <h2 className="display-h2 gallery-title">
                GLIMPSES OF<br />
                OUR WORK
              </h2>

              <p className="gallery-sub">
                Take a look at some of our recent relocations across homes, offices, and vehicles.
              </p>
            </div>

            {/* Accordion Gallery */}
            <AccordionGallery
              items={[
                { image: '/gallery-warehouse.jpg', label: 'Warehouse Storage', link: '#' },
                { image: '/gallery-parcel.jpg', label: 'Secure Packaging', link: '#' },
                { image: '/gallery-sofa.jpg', label: 'Furniture Protection', link: '#' },
                { image: '/tile-packing.jpg', label: 'Professional Packing', link: '#' },
                { image: '/tile-loading.jpg', label: 'Safe Loading', link: '#' }
              ]}
              defaultIndex={2}
              expandRatio={0.52}
              trigger="hover"
              accentColor="#ffffff"
              overlayColor="#060010"
              textColor="#ffffff"
              grayscale
              showLabels
              duration={0.6}
              ease="power3.out"
              parallax={0.5}
              tilt={8}
              stagger={0.06}
              height={460}
              gap={10}
              radius={16}
              orientation="horizontal"
            />
          </div>
        </section>

        {/* ════════════════ CUSTOMER REVIEWS SECTION ════════════════ */}
        <section id="reviews" className="reviews-section">
          {/* Responsive SVG Stepped Transition Seam Background (Upper Card) */}
          <ReviewsCardBg />

          <div className="reviews-inner">
            {/* Left: Headline Panel */}
            <div className="reviews-headline-panel">
              <div className="outline-tag-badge">
                <span>CUSTOMER REVIEWS</span>
              </div>

              <h2 className="display-h2 reviews-title">
                WHAT OUR<br />
                CUSTOMERS SAY
              </h2>

              <p className="reviews-sub">
                Trusted by hundreds of happy customers across India.
              </p>

              <button
                onClick={() => {
                  const el = document.getElementById('reviews')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn-pill-dark reviews-viewall-btn"
                id="btn-reviews-viewall"
              >
                <span>View All Reviews</span>
                <ArrowRightIcon />
              </button>
            </div>

            {/* Right: 3 Testimonial Cards */}
            <div className="reviews-cards-row">
              {/* Review Card 1 */}
              <div className="review-card">
                <div className="review-quote-icon">"</div>
                <div className="review-stars-row">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                </div>
                <p className="review-text">
                  Excellent service! The team was professional, punctual and handled everything with care. Highly recommended!
                </p>
                <div className="review-author-row">
                  <div className="review-avatar">RM</div>
                  <div className="review-author-info">
                    <span className="review-author-name">Rahul Mehta</span>
                    <span className="review-author-city">Bengaluru</span>
                  </div>
                </div>
              </div>

              {/* Review Card 2 */}
              <div className="review-card">
                <div className="review-quote-icon">"</div>
                <div className="review-stars-row">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                </div>
                <p className="review-text">
                  Smooth and hassle-free experience. My home shifting was completed on time with no damage. Great team!
                </p>
                <div className="review-author-row">
                  <div className="review-avatar">SI</div>
                  <div className="review-author-info">
                    <span className="review-author-name">Sneha Iyer</span>
                    <span className="review-author-city">Mumbai</span>
                  </div>
                </div>
              </div>

              {/* Review Card 3 */}
              <div className="review-card">
                <div className="review-quote-icon">"</div>
                <div className="review-stars-row">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                </div>
                <p className="review-text">
                  Very professional and supportive staff. They made our office relocation so easy. Truly reliable service!
                </p>
                <div className="review-author-row">
                  <div className="review-avatar">AS</div>
                  <div className="review-author-info">
                    <span className="review-author-name">Amit Sharma</span>
                    <span className="review-author-city">Delhi</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════ GET A FREE QUOTE (CTA) SECTION ════════════════ */}
        <section id="cta-quote" className="cta-quote-section">
          {/* Responsive SVG Stepped Transition Seam Background (Lower Card) */}
          <QuoteCardBg />

          <div className="cta-quote-inner">
            {/* Left: Headline */}
            <div className="cta-quote-left">
              <div className="outline-tag-badge">
                <span>GET A FREE QUOTE</span>
              </div>

              <h2 className="display-h2 cta-quote-title">
                Move Smarter.<br />
                Get a Free Quote.
              </h2>

              <p className="cta-quote-sub">
                Tell us your requirements and we'll get back with the best quote for your move.
              </p>
            </div>

            {/* Center: Inline Quote Form */}
            <div className="cta-quote-form-area">
              <form className="cta-inline-form" onSubmit={(e) => { e.preventDefault(); handleOpenQuote('CTA Form') }}>
                <div className="cta-form-row">
                  <div className="cta-field">
                    <span className="cta-field-icon">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    </span>
                    <input type="text" placeholder="Your Name" className="cta-input" />
                  </div>
                  <div className="cta-field-phone-wrap">
                    <div className="cta-field">
                      <span className="cta-field-icon">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.27 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 5.55 5.55l1.1-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.5 16l.42.92z"/></svg>
                      </span>
                      <input type="tel" placeholder="Phone Number" className="cta-input" />
                    </div>
                    {/* Mobile: Delivery person image set directly above phone number box */}
                    <div className="cta-phone-delivery-person" aria-hidden="true">
                      <img
                        src="/delivery-person-transparent.png"
                        alt="Patel Packers & Movers Professional"
                        className="cta-phone-person-img"
                      />
                    </div>
                  </div>
                </div>
                <div className="cta-form-row">
                  <div className="cta-field">
                    <span className="cta-field-icon">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    </span>
                    <input type="text" placeholder="From Location" className="cta-input" />
                  </div>
                  <div className="cta-field">
                    <span className="cta-field-icon">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    </span>
                    <input type="text" placeholder="To Location" className="cta-input" />
                  </div>
                </div>
                <div className="cta-form-row cta-form-row--submit">
                  <div
                    ref={selectRef}
                    className={"cta-field cta-custom-select " + (selectOpen ? "cta-custom-select--open" : "")}
                  >
                    <button
                      type="button"
                      className="cta-select-trigger"
                      onClick={() => setSelectOpen(!selectOpen)}
                      aria-haspopup="listbox"
                      aria-expanded={selectOpen}
                    >
                      <span className="cta-field-icon">
                        {selectedMovingOption ? (
                          selectedMovingOption.icon
                        ) : (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
                        )}
                      </span>
                      <span className={"cta-select-label " + (selectedMovingOption ? "cta-select-label--selected" : "")}>
                        {selectedMovingOption ? selectedMovingOption.label : "Select Moving Type"}
                      </span>
                      <span className={"cta-select-chevron " + (selectOpen ? "cta-select-chevron--open" : "")}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="6 9 12 15 18 9"/>
                        </svg>
                      </span>
                    </button>
                    <input type="hidden" name="movingType" value={movingType} />

                    {selectOpen && (
                      <div className="cta-select-dropdown" role="listbox">
                        <div className="cta-select-dropdown-header">
                          <span>Select Moving Service</span>
                        </div>
                        <div className="cta-select-dropdown-list">
                          {MOVING_OPTIONS.map((opt) => {
                            const isSelected = movingType === opt.value
                            return (
                              <button
                                key={opt.value}
                                type="button"
                                className={"cta-select-option " + (isSelected ? "cta-select-option--active" : "")}
                                role="option"
                                aria-selected={isSelected}
                                onClick={() => {
                                  setMovingType(opt.value)
                                  setSelectOpen(false)
                                }}
                              >
                                <div className="cta-option-icon-box">
                                  {opt.icon}
                                </div>
                                <div className="cta-option-info">
                                  <span className="cta-option-name">{opt.label}</span>
                                  {opt.badge && <span className="cta-option-badge">{opt.badge}</span>}
                                </div>
                                {isSelected && (
                                  <span className="cta-option-check">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                                      <polyline points="20 6 9 17 4 12"/>
                                    </svg>
                                  </span>
                                )}
                              </button>
                            )
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                  <button type="submit" className="btn-pill-dark cta-submit-btn">
                    <span>Get Free Quote</span>
                    <ArrowRightIcon />
                  </button>
                </div>
              </form>
            </div>

            {/* Right: Delivery Person Image + "Let's Move Together" */}
            <div className="cta-quote-right">
              <div className="cta-person-wrapper">
                <div className="cta-speech-bubble">
                  <span>Let's</span>
                  <span>Move</span>
                  <span>Together</span>
                </div>
                <img
                  src="/delivery-person-transparent.png"
                  alt="Patel Packers & Movers Professional"
                  className="cta-person-img"
                />
              </div>
            </div>
          </div>

          {/* Bottom Stats Strip */}
          <div className="cta-stats-strip">
            <div className="cta-stat-item">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              <div className="cta-stat-text">
                <span className="cta-stat-num">10,000+</span>
                <span className="cta-stat-label">Happy Customers</span>
              </div>
            </div>
            <div className="cta-stat-divider" />
            <div className="cta-stat-item">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <div className="cta-stat-text">
                <span className="cta-stat-num">60+</span>
                <span className="cta-stat-label">Cities Covered</span>
              </div>
            </div>
            <div className="cta-stat-divider" />
            <div className="cta-stat-item">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
              <div className="cta-stat-text">
                <span className="cta-stat-num">IBA Approved</span>
                <span className="cta-stat-label">Certified Packers & Movers</span>
              </div>
            </div>
            <div className="cta-stat-divider" />
            <div className="cta-stat-item">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              <div className="cta-stat-text">
                <span className="cta-stat-num">PAN India</span>
                <span className="cta-stat-label">Service</span>
              </div>
            </div>
            <div className="cta-stat-divider" />
            <div className="cta-stat-item">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="m4.93 4.93 4.24 4.24"/><path d="m14.83 14.83 4.24 4.24"/></svg>
              <div className="cta-stat-text">
                <span className="cta-stat-num">Worldwide Service</span>
                <span className="cta-stat-label">International Shipping</span>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════ OUR BRANCHES SECTION ════════════════ */}
        <section id="branches" className="branches-section">
          <div className="branches-inner">
            <h2 className="branches-title">Our Branches</h2>
            <div className="branches-decor-dash" aria-hidden="true">
              <span className="dash-bar" />
              <span className="dash-bar" />
            </div>

            <div className="branches-grid">
              {BRANCH_CITIES.map((city, idx) => {
                const len = city.length
                const lenClass = len >= 11 ? 'branch-city--xlong' : len >= 9 ? 'branch-city--long' : ''
                return (
                  <button
                    key={`${city}-${idx}`}
                    type="button"
                    onClick={() => handleOpenQuote(`${city} Branch`)}
                    className={`branch-city-btn ${lenClass}`}
                    title={`Book relocation in ${city}`}
                    aria-label={`Patel Packers and Movers branch in ${city}`}
                  >
                    <span>{city}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </section>

        {/* ════════════════ FOOTER ════════════════ */}
        <footer className="site-footer" id="footer">
          <div className="footer-main">
            {/* Column 1: Brand */}
            <div className="footer-col footer-col--brand">
              <div className="footer-logo">
                <img src={footerLogo} alt="Patel Packers & Movers Logo" className="footer-logo-img" />
              </div>
              <p className="footer-brand-desc">
                India's most trusted packers and movers. We provide safe, reliable and affordable moving solutions across 60+ cities nationwide.
              </p>
              <div className="footer-social-row">
                <a href="#" className="footer-social-link footer-social--fb" aria-label="Facebook">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#" className="footer-social-link footer-social--ig" aria-label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a href="#" className="footer-social-link footer-social--x" aria-label="Twitter/X">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="#" className="footer-social-link footer-social--yt" aria-label="YouTube">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12z"/></svg>
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="footer-col footer-col--links">
              <h4 className="footer-col-title">Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#home" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>Home</a></li>
                <li><a href="#about" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) }}>About Us</a></li>
                <li><a href="#services" onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }) }}>Services</a></li>
                <li><a href="#gallery" onClick={(e) => { e.preventDefault(); document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' }) }}>Gallery</a></li>
                <li><a href="#reviews" onClick={(e) => { e.preventDefault(); document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' }) }}>Reviews</a></li>
                <li><a href="#branches" onClick={(e) => { e.preventDefault(); document.getElementById('branches')?.scrollIntoView({ behavior: 'smooth' }) }}>Our Branches</a></li>
                <li><a href="#cta-quote" onClick={(e) => { e.preventDefault(); document.getElementById('cta-quote')?.scrollIntoView({ behavior: 'smooth' }) }}>Get a Quote</a></li>
              </ul>
            </div>

            {/* Column 3: Our Services */}
            <div className="footer-col footer-col--services">
              <h4 className="footer-col-title">Our Services</h4>
              <ul className="footer-links">
                <li><a href="#" onClick={(e) => { e.preventDefault(); handleOpenQuote('House Shifting') }}>House Shifting</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); handleOpenQuote('Loading & Unloading') }}>Loading &amp; Unloading</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); handleOpenQuote('Office Relocation') }}>Office Relocation</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); handleOpenQuote('Vehicle Transport') }}>Vehicle Transport</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); handleOpenQuote('Warehouse Storage') }}>Warehouse &amp; Storage</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); handleOpenQuote('International Shipping') }}>All India Express</a></li>
              </ul>
            </div>

            {/* Column 4: Contact Info */}
            <div className="footer-col footer-col--contact">
              <h4 className="footer-col-title">Contact Us</h4>
              <ul className="footer-contact-list">
                <li className="footer-contact-item footer-contact--address">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  <span>No, 4-T-189-24 Anand Nagar Akash Bhavan Kavoor, Kottara Chowki, Mangalore, Karnataka 575006</span>
                </li>
                <li className="footer-contact-item footer-contact--phone">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.27 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 5.55 5.55l1.1-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.5 16l.42.92z"/></svg>
                  <div className="footer-contact-details">
                    <div>
                      <strong>Call &amp; WhatsApp: </strong>
                      <a href="https://wa.me/918789227023" target="_blank" rel="noopener noreferrer">+91 87892 27023</a>
                    </div>
                    <div style={{ marginTop: '4px' }}>
                      <strong>Office: </strong>
                      <a href="tel:+917975430309">+91 79754 30309</a>, <a href="tel:+919448659805">+91 94486 59805</a>
                    </div>
                  </div>
                </li>
                <li className="footer-contact-item footer-contact--email">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  <a href="mailto:info@patelpackers.com">info@patelpackers.com</a>
                </li>
                <li className="footer-contact-item footer-contact--hours">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  <span>Mon – Sun: 24/7 Available</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="footer-bottom">
            <p className="footer-copyright">© {new Date().getFullYear()} Patel Packers &amp; Movers. All Rights Reserved.</p>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <span className="footer-dot">·</span>
              <a href="#">Terms of Service</a>
              <span className="footer-dot">·</span>
              <a href="#">Sitemap</a>
            </div>
          </div>
        </footer>

      </div>

      {/* ════════════════ INTERACTIVE QUOTE MODAL ════════════════ */}
      <QuoteModal
        open={quoteOpen}
        onClose={() => setQuoteOpen(false)}
        initialService={selectedService}
      />
    </div>
  )
}

/* ─────────────── QUOTE MODAL COMPONENT ─────────────── */
function QuoteModal({ open, onClose, initialService }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    fromCity: '',
    toCity: '',
    date: '',
    serviceType: initialService || 'House Shifting',
  })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (initialService) {
      setForm((f) => ({ ...f, serviceType: initialService }))
    }
  }, [initialService])

  if (!open) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      onClose()
      setSubmitted(false)
    }, 2400)
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="quote-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <CloseIcon />
        </button>

        {submitted ? (
          <div className="modal-success-state">
            <div className="success-icon-badge">✓</div>
            <h3 className="modal-title">Quote Request Received!</h3>
            <p className="modal-subtext">
              Our relocation specialist will call <strong>{form.phone || 'you'}</strong> within 30 minutes with guaranteed best pricing.
            </p>
          </div>
        ) : (
          <>
            <div className="modal-header-block">
              <img src="/logo-ppm-transparent.png" alt="PPM Logo" className="modal-ppm-logo" />
              <div>
                <h2 className="modal-title">Get Instant Moving Quote</h2>
                <p className="modal-subtext">Zero obligation · Guaranteed safe transit</p>
              </div>
            </div>

            <form className="modal-quote-form" onSubmit={handleSubmit}>
              <div className="form-grid-2">
                <div className="form-field">
                  <label className="field-label">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    className="field-input"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div className="form-field">
                  <label className="field-label">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 87892 27023"
                    className="field-input"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-grid-2">
                <div className="form-field">
                  <label className="field-label">Moving From (City / Area)</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Mumbai, Andheri"
                    className="field-input"
                    value={form.fromCity}
                    onChange={(e) => setForm({ ...form, fromCity: e.target.value })}
                  />
                </div>
                <div className="form-field">
                  <label className="field-label">Moving To (City / Area)</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Bengaluru, Whitefield"
                    className="field-input"
                    value={form.toCity}
                    onChange={(e) => setForm({ ...form, toCity: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-grid-2">
                <div className="form-field">
                  <label className="field-label">Expected Shifting Date</label>
                  <input
                    type="date"
                    required
                    className="field-input"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                  />
                </div>
                <div className="form-field">
                  <label className="field-label">Service Type</label>
                  <select
                    className="field-input field-select"
                    value={form.serviceType}
                    onChange={(e) => setForm({ ...form, serviceType: e.target.value })}
                  >
                    <option value="House Shifting">House Shifting</option>
                    <option value="Loading & Unloading">Loading & Unloading</option>
                    <option value="Office Relocation">Office Relocation</option>
                    <option value="Vehicle Transport">Vehicle Transport</option>
                    <option value="Warehouse Storage">Warehouse & Storage</option>
                    <option value="International Shipping">All India Express</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="btn-modal-submit">
                <span>Request Free Estimate</span>
                <ArrowRightIcon />
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

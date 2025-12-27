import React, { useState, useEffect } from 'react';
import { Watch, Gem, ShoppingBag, ChevronRight } from 'lucide-react';
import './Home.css';
import LazyLoad from '../components/common/LazyLoad';
import useScrollProgress from '../hooks/useScrollProgress';
import { useRef } from 'react';

// Import images from assets folder
import watchCollectionImg from '../assets/icons/1.jpg';
import tagHeuerImg from '../assets/icons/2.jpg';
import casioImg from '../assets/icons/3.jpg';
import tissotImg from '../assets/icons/4.jpg';
import mechanismImg from '../assets/icons/5.jpg';
import skeletonWatchImg from '../assets/icons/7.png';

function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sigRef = useRef<HTMLDivElement | null>(null);
  const progress = useScrollProgress(sigRef);
  const maxAngle = 24; // degrees
  const angle = (progress - 0.5) * maxAngle * 2; // -max..+max

  return (
    <div className="home-container">

      {/* Hero Section */}
      <section className="hero-section">
        <div className="grid-overlay"></div>
        <div 
          className="hero-background image-reveal"
          style={{
            backgroundImage: `url(${watchCollectionImg})`,
          }}
        ></div>
        <div className="hero-content fade-in">
          <h1 className="hero-title serif">
            Timeless <span className="hero-title-accent">Elegance</span>
          </h1>
          <p className="hero-description">
            Discover our curated collection of exquisite timepieces, where precision meets artistry
          </p>
          <button className="hero-button btn-primary">
            EXPLORE COLLECTION
            <ChevronRight size={20} />
          </button>
        </div>
      </section>

      {/* Featured Collections */}
      <LazyLoad>
      <section id="collections" className="collections-section">
        <div className="section-container">
          <div className="section-header slide-up">
            <h2 className="section-title serif">Featured Collections</h2>
            <div className="section-divider"></div>
          </div>

          <div className="collections-grid">
            {/* Collection Card 1 */}
            <div className="collection-card hover-lift slide-up" style={{animationDelay: '0.1s'}}>
              <div className="collection-image-wrapper">
                <img 
                  loading="lazy"
                  src={tagHeuerImg}
                  alt="Tag Heuer Collection"
                  className="collection-image"
                />
                <div className="collection-overlay"></div>
              </div>
              <div className="collection-info">
                <h3 className="collection-title serif">Swiss Precision</h3>
              </div>
            </div>

            {/* Collection Card 2 */}
            <div className="collection-card hover-lift slide-up" style={{animationDelay: '0.2s'}}>
              <div className="collection-image-wrapper">
                <img 
                  loading="lazy"
                  src={casioImg}
                  alt="Casio Collection"
                  className="collection-image"
                />
                <div className="collection-overlay"></div>
              </div>
              <div className="collection-info">
                <h3 className="collection-title serif">Modern Luxury</h3>
              </div>
            </div>

            {/* Collection Card 3 */}
            <div className="collection-card hover-lift slide-up" style={{animationDelay: '0.3s'}}>
              <div className="collection-image-wrapper">
                <img 
                  loading="lazy"
                  src={tissotImg}
                  alt="Tissot Collection"
                  className="collection-image"
                />
                <div className="collection-overlay"></div>
              </div>
              <div className="collection-info">
                <h3 className="collection-title serif">Heritage Series</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      </LazyLoad>

      {/* Craftsmanship Section */}
      <LazyLoad>
      <section id="craftsmanship" className="craftsmanship-section">
        <div className="section-container">
          <div className="craftsmanship-grid">
            <div className="craftsmanship-content slide-up">
              <h2 className="serif">
                The Art of <span className="hero-title-accent">Precision</span>
              </h2>
              <p>
                Every timepiece in our collection represents the pinnacle of horological craftsmanship. 
                From intricate mechanical movements to sophisticated complications, each watch is a 
                testament to centuries of watchmaking tradition.
              </p>
              <p>
                Our artisans spend countless hours perfecting every detail, ensuring that each piece 
                not only tells time but tells a story of excellence and dedication.
              </p>
              <button className="craftsmanship-button btn-primary">
                DISCOVER MORE
                <ChevronRight size={18} />
              </button>
            </div>
            <div className="craftsmanship-image-wrapper slide-up" style={{animationDelay: '0.2s'}}>
              <div className="craftsmanship-image">
                <img 
                  loading="lazy"
                  src={mechanismImg}
                  alt="Watch Mechanism"
                />
              </div>
              <div className="decorative-box-bottom"></div>
              <div className="decorative-box-top"></div>
            </div>
          </div>
        </div>
      </section>
      </LazyLoad>

      {/* Features Section */}
      <LazyLoad>
      <section className="features-section">
        <div className="section-container">
          <div className="features-grid">
            <div className="feature-card slide-up" style={{animationDelay: '0.1s'}}>
              <div className="feature-icon">
                <Watch size={28} />
              </div>
              <h3 className="feature-title serif">Swiss Movement</h3>
              <p className="feature-description">
                Precision-engineered mechanical movements crafted by master watchmakers
              </p>
            </div>

            <div className="feature-card slide-up" style={{animationDelay: '0.2s'}}>
              <div className="feature-icon">
                <Gem size={28} />
              </div>
              <h3 className="feature-title serif">Premium Materials</h3>
              <p className="feature-description">
                Finest materials including sapphire crystal, precious metals, and premium leather
              </p>
            </div>

            <div className="feature-card slide-up" style={{animationDelay: '0.3s'}}>
              <div className="feature-icon">
                <ShoppingBag size={28} />
              </div>
              <h3 className="feature-title serif">Lifetime Warranty</h3>
              <p className="feature-description">
                Every timepiece comes with comprehensive warranty and expert service support
              </p>
            </div>
          </div>
        </div>
      </section>
      </LazyLoad>

      {/* Signature Piece */}
      <LazyLoad>
      <section className="signature-section">
        <div className="section-container">
          <div className="signature-grid">
            <div className="signature-image-wrapper slide-up" ref={sigRef}>
              <img 
                loading="lazy"
                src={skeletonWatchImg}
                alt="Skeleton Watch"
                className="signature-image"
                style={{ transform: `rotate(${angle}deg)` }}
              />
            </div>
            <div className="signature-content slide-up" style={{animationDelay: '0.2s'}}>
              <div className="signature-badge">
                <span>SIGNATURE COLLECTION</span>
              </div>
              <h2 className="serif">
                Skeleton <span className="hero-title-accent">Masterpiece</span>
              </h2>
              <p className="signature-description">
                Witness the mesmerizing beauty of mechanical artistry through the transparent dial. 
                This extraordinary timepiece showcases the intricate ballet of gears, springs, and 
                jewels working in perfect harmony.
              </p>
              <div className="signature-specs">
                <div>
                  <div className="spec-item-value serif">42mm</div>
                  <div className="spec-item-label">Case Diameter</div>
                </div>
                <div>
                  <div className="spec-item-value serif">48h</div>
                  <div className="spec-item-label">Power Reserve</div>
                </div>
              </div>
              <button className="signature-button btn-primary">
                VIEW DETAILS
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
      </LazyLoad>

    </div>
  );
}

export default Home;
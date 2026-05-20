import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function HomePage() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="lp-root">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="lp-hero">
        <div className="blob blob-tl" />
        <div className="blob blob-tr" />

        <div className="lp-hero-inner">
          {/* LEFT – copy */}
          <div className="lp-hero-copy reveal">
            <div className="lp-badge">
              <span className="badge-dot" />
              AI-Powered · 26 Indigenous Breeds
            </div>

            <h1 className="lp-h1">
              Identify Your<br />
              <span className="lp-gradient-text">Cattle Breed</span><br />
              in Seconds
            </h1>

            <p className="lp-hero-sub">
              Deep-learning breed classification for Indian cattle &amp; buffalo.
              Upload a photo, point your camera, or paste a URL — get instant,
              accurate results with rich breed metadata.
            </p>

            <div className="lp-hero-actions">
              <Link to="/predict">
                <button className="lp-btn-primary" id="hero-cta-classify">
                  Start Classifying
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
              </Link>
              <Link to="/breeds">
                <button className="lp-btn-ghost" id="hero-cta-explore">
                  Explore Breeds
                </button>
              </Link>
            </div>

            {/* trust strip */}
            <div className="lp-trust-strip">
              <div className="trust-item">
                <span className="trust-num">98.5%</span>
                <span className="trust-label">Top-1 Accuracy</span>
              </div>
              <div className="trust-divider" />
              <div className="trust-item">
                <span className="trust-num">&lt;1s</span>
                <span className="trust-label">Avg. Inference</span>
              </div>
              <div className="trust-divider" />
              <div className="trust-item">
                <span className="trust-num">26</span>
                <span className="trust-label">Breed Classes</span>
              </div>
            </div>
          </div>

          {/* RIGHT – static visual panel */}
          <div className="lp-hero-panel reveal">
            <div className="hero-panel-card">
              <div className="hpc-top">
                <span className="hpc-dot green" /><span className="hpc-dot yellow" /><span className="hpc-dot red" />
              </div>
              <div className="hpc-label">AI Analysis Result</div>
              <div className="hpc-breed">Gir Cow</div>
              <div className="hpc-conf-label">
                <span>Confidence</span><span className="hpc-pct">98.5%</span>
              </div>
              <div className="hpc-bar-bg">
                <div className="hpc-bar-fill" style={{ width: '98.5%' }} />
              </div>
              <div className="hpc-divider" />
              <div className="hpc-meta-grid">
                {[
                  { label: 'Region', val: 'Gujarat' },
                  { label: 'Type', val: 'Cow' },
                  { label: 'Milk Yield', val: '10–12 L/day' },
                  { label: 'Lifespan', val: '15–20 yrs' },
                ].map((m) => (
                  <div className="hpc-meta-item" key={m.label}>
                    <div className="hpc-meta-label">{m.label}</div>
                    <div className="hpc-meta-val">{m.val}</div>
                  </div>
                ))}
              </div>
              <div className="hpc-footer">
                <span className="hpc-status-dot" />
                Vision Transformer · Active
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3 KEY HIGHLIGHTS ────────────────────────────── */}
      <section className="lp-highlights">
        <div className="lp-container">
          <div className="lp-hl-grid">

            <div className="hl-card reveal">
              <div className="hl-icon-wrap green">📸</div>
              <h3>3 Input Modes</h3>
              <p>Upload from device, capture live from camera, or paste an image URL — works on any browser.</p>
              <Link to="/predict" className="hl-link">Try it now →</Link>
            </div>

            <div className="hl-card reveal">
              <div className="hl-icon-wrap blue">🐄</div>
              <h3>26 Breed Classes</h3>
              <p>Covers all major indigenous cow & buffalo breeds across India with verified metadata.</p>
              <Link to="/breeds" className="hl-link">Browse breeds →</Link>
            </div>

            <div className="hl-card reveal">
              <div className="hl-icon-wrap green">🧠</div>
              <h3>Vision Transformer AI</h3>
              <p>Benchmarked 4 architectures — the best model gives 98.5% accuracy in under a second.</p>
              <Link to="/about" className="hl-link">See methodology →</Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────── */}
      <section className="lp-cta reveal">
        <div className="lp-container">
          <div className="lp-cta-inner">
            <div className="cta-blob cta-blob-l" />
            <div className="cta-blob cta-blob-r" />
            <h2 className="lp-h2 cta-h2">
              Ready to Identify a Breed?
            </h2>
            <p className="cta-sub">No signup needed. Upload your first image and see the AI at work.</p>
            <Link to="/predict">
              <button className="lp-btn-primary lp-btn-large" id="cta-start-now">
                Start Classifying Now
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

export default HomePage;

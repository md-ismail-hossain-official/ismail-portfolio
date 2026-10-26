# MD Ismail Hossain — Professional Portfolio

> **Vendor Management & Business Operations Professional**  
> *Specializing in US Property Operations, Vendor Coordination, Pricing Negotiation, and B2B Operations.*

[![Deploy to GitHub Pages](https://github.com/md-ismail-hossain-official/ismail-portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/md-ismail-hossain-official/ismail-portfolio/actions/workflows/deploy.yml)
[![Live Site](https://img.shields.io/badge/Live_Site-GitHub_Pages-2563EB)](https://md-ismail-hossain-official.github.io/ismail-portfolio/)

---

## 🌐 Live Production Deployment
* **Live URL:** [https://md-ismail-hossain-official.github.io/ismail-portfolio/](https://md-ismail-hossain-official.github.io/ismail-portfolio/)
* **Repository:** `md-ismail-hossain-official/ismail-portfolio`

---

## 🛠️ Technology Stack
* **Framework:** React 18
* **Build Engine:** Vite 5 (Configured with relative base path `/ismail-portfolio/` for GitHub Pages)
* **Styling:** Tailwind CSS (Custom Dark Navy & Slate design system with accessible contrast tokens)
* **Iconography:** Lucide React (Tree-shaken SVGs)
* **Deployment Pipeline:** GitHub Actions (`.github/workflows/deploy.yml`) with zero manual server maintenance

---

## 📂 Project Structure
```text
ismail-portfolio/
├── .github/workflows/deploy.yml    # Automated GitHub Actions Pages deployment
├── public/
│   └── favicon.svg                 # Brand monogram favicon (IH)
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   └── DemoDisclaimer.jsx  # Standardized privacy/simulation disclaimer
│   │   ├── layout/
│   │   │   ├── Navbar.jsx          # Responsive sticky navigation with mobile drawer
│   │   │   └── Footer.jsx          # Contact channels, privacy notices, repo links
│   │   ├── sections/
│   │   │   ├── HeroSection.jsx     # Deep navy hero with live status pill
│   │   │   ├── AboutSection.jsx    # Professional narrative & initials avatar card
│   │   │   ├── CoreExpertise.jsx   # 8 operational competency cards
│   │   │   ├── CareerTimeline.jsx  # LeadCraft IT Solutions & Bryan Squad
│   │   │   ├── FeaturedProjects.jsx# 4 core project showcases (Projects A–D)
│   │   │   ├── OperationsDemo.jsx  # Interactive Simulated Work-Order & Negotiation Dashboard
│   │   │   ├── VendorLifecycle.jsx # 7-stage interactive vendor lifecycle SOP
│   │   │   ├── B2BSalesCaseStudy.jsx # 2.5y Bryan Squad outbound sales & objection simulator
│   │   │   ├── TenantSatisfaction.jsx # Documented 5.0/5.0 internal recognition
│   │   │   ├── EducationAndTools.jsx # English studies at Govt. Shahid Suhrawardy College
│   │   │   └── ContactSection.jsx  # Direct mailto composer, WhatsApp, Upwork, LinkedIn
│   │   └── ui/
│   │       └── Badge.jsx           # Accessible status chip variants
│   ├── data/
│   │   ├── profileData.js          # Strictly verified profile constants & contact links
│   │   ├── operationsData.js       # Simulated work orders & configurable datasets
│   │   └── navigation.js           # Section navigation targets
│   ├── App.jsx                     # Single-page layout orchestrator
│   ├── main.jsx                    # React entrypoint
│   └── index.css                   # Tailwind directives & focus styles
├── index.html                      # Rich SEO, Open Graph & Twitter metadata
├── package.json
├── tailwind.config.js
└── vite.config.js                  # GitHub Pages base path configuration
```

---

## 🔒 Privacy & Compliance Safeguards
1. **Simulated Demonstration Data:** All interactive dashboards, contractor listings, and work orders use clearly labeled fictional sample data for portfolio demonstration purposes only.
2. **Confidentiality Assurance:** No confidential employer records, proprietary pricing matrices, tenant personal information, or private client rosters are published.
3. **Verified Experience Integrity:** All roles, employment durations (LeadCraft IT Solutions & Bryan Squad), and academic studies (Government Shahid Suhrawardy College) reflect strictly confirmed factual records.

---

## 💻 Local Development & Build

### Prerequisites
* Node.js v18+ (tested on v24.19)
* pnpm (or npm / yarn)

### Quick Start
```bash
# 1. Install dependencies
pnpm install

# 2. Run local development server
pnpm run dev

# 3. Test production build
pnpm run build

# 4. Preview production build locally
pnpm run preview
```

---

## 🚀 Setting up GitHub Pages
1. Push this repository to GitHub: `https://github.com/md-ismail-hossain-official/ismail-portfolio`
2. In your GitHub repository:
   * Go to **Settings** &rarr; **Pages**
   * Under **Build and deployment** &rarr; **Source**, select **GitHub Actions**
3. On every push to `main`, the `.github/workflows/deploy.yml` workflow will automatically build and publish the site.

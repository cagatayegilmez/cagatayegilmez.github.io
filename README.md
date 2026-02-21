<!-- portfolio site quick-ref — see below for full profile -->

## Portfolio site

Vanilla HTML/CSS/JS. No build step. No dependencies. → [cagatayegilmez.github.io](https://cagatayegilmez.github.io)

### Local preview
```bash
python3 -m http.server 8080   # open http://localhost:8080
```

### Editing content

| What | Where |
|---|---|
| Projects | `js/main.js` → `PROJECTS` array |
| Hero typewriter | `js/main.js` → `sequences` array |
| About / Experience | `index.html` → `#about` / `#experience` |
| Writing links | `index.html` → `#writing` |
| Email / socials | `index.html` → `#contact` |
| Colours | `css/styles.css` → `:root` vars |

---

<div align="center">

![cover](/assets/cover.png)

<!-- Place your cover image at: /assets/cover.png (recommended: 1280×400px, dark or neutral background) -->

# Çağatay Eğilmez

**Senior iOS Developer** &nbsp;·&nbsp; Istanbul, TR

*Building secure, maintainable iOS systems — one well-named type at a time.*

---

[![LinkedIn](https://img.shields.io/badge/LinkedIn-%230A66C2.svg?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/cagatay-egilmez/)
[![Portfolio](https://img.shields.io/badge/Portfolio-%23000000.svg?style=flat&logo=safari&logoColor=white)](https://cagatayegilmez.github.io/)
[![Email](https://img.shields.io/badge/Email-%23EA4335.svg?style=flat&logo=gmail&logoColor=white)](mailto:cagatayegilmez08@gmail.com)

</div>

---

## About

**TR:** Yazılım mimarisi, modüler tasarım ve güvenliğe odaklanan, 9+ yıllık deneyime sahip kıdemli bir iOS geliştiricisiyim. Clean Code ve SOLID prensiplerine bağlıyım, hem teknik borcu minimize eden hem de ekiplerin hızla teslim edebileceği sistemler inşa etmeyi hedefliyorum.

**EN:** Senior iOS developer with 9+ years of experience focused on software architecture, modular design, and security. I care deeply about clean abstractions and SOLID principles — building systems that minimize technical debt while keeping team velocity high. I've shipped production apps used by 14M+ users and contributed open-source tools relied on by iOS teams.

---

## Focus Areas

| Area | Details |
|---|---|
| **Architecture** | MVVM, MVC, VIP/VIPER, modularization, dependency injection, legacy-to-modern migration, GCD, Combine |
| **Swift Concurrency** | `async/await`, `TaskGroup`, cooperative cancellation, actor isolation |
| **Security** | SSL pinning, mTLS, certificate trust evaluation, keychain hardening |
| **UIKit / SwiftUI** | Hybrid integration patterns, diffable data sources, custom layout engines |
| **CI/CD** | GitHub Actions, reproducible build pipelines |
| **Quality & Delivery** | Unit/UI testing (XCTest, XCUITest), CI/CD, GitHub Actions, release automation |

---

## Featured Projects

### [PinGuard](https://github.com/pinguard/pinguard-ios)
> SSL pinning / mTLS / trust evaluation SDK for iOS

A production-grade security SDK for iOS that enforces certificate pinning, mutual TLS, and configurable trust evaluation policies. Designed to be drop-in, auditable, and testable.

- Supports URLSession and custom `URLProtocol` stacks
- Zero runtime dependencies, ships as an SPM package

---

### [MovieProjectConcurrency](https://github.com/cagatayegilmez/MovieProjectConcurrency)
> UIKit + SwiftUI Hybrid But Only Concurrency Usage

MovieProjectConcurrency is an iOS development project that demonstrates sophisticated concurrency management within a hybrid UIKit and SwiftUI environment. It showcases how to build responsive, high-performance apps with clean architecture and engaging UI components.

- MVVM-C pattern
- Used only Concurrency features

---

### [MovieProjectHybrid](https://github.com/cagatayegilmez/MovieProjectHybrid)
> SwiftUI + UIKit & Combine + Concurrency Hybrid Project



MovieProjectHybrid is an iOS development project that demonstrates sophisticated concurrency management within a hybrid UIKit and SwiftUI environment. It showcases how to build responsive, high-performance apps with clean architecture and engaging UI components.

- MVVM-C pattern
- Used Combine and Concurrency features

---

## Experience Highlights

- **Softtech** &nbsp;·&nbsp; Senior iOS Developer &nbsp;·&nbsp; 2022–2026
  - Owned core rendering infrastructure within ORMComponents / ORMFramework; reusable iOS SDKs powering production-critical flows across İşCep and adopted by partner integrations which enabled 10+ teams/features and reduced duplicated UI/utility code by 17%.
  - Modernized UIKit-heavy legacy into SwiftUI + MVVM feature development; improved delivery speed by 21% while reducing UI regression risk on critical journeys.
  - Defined and enforced modularization + DI standards for shared frameworks, reducing build overhead and lowering coupling and merge conflict hotspots.
  - Strengthened release stability through automated tests, CI/CD quality gates, and architecture/performance reviews, mentoring developers on scalable patterns.

- **Norma** &nbsp;·&nbsp; iOS Developer &nbsp;·&nbsp; 2021–2021
  - Built a banking & accounting iOS app from scratch; a 5-tab product with 60–70 screens, implementing core flows in Swift + MVVM.
  - Developed the networking layer with URLSession and RESTful APIs, supporting 150+ endpoints with robust error handling and maintainable request/response models.
  - Improved reliability of critical business logic by adding unit tests for high-risk accounting and banking calculations.
  - Integrated Firebase (Crashlytics, Analytics, A/B Testing, FCM, Remote Config) to enable crash monitoring, experimentation, and feature rollout control.

- **PayALL** &nbsp;·&nbsp; iOS Developer &nbsp;·&nbsp; 2020–2021
  - Led iOS development of a payment & digital wallet app from scratch, designing the core Swift MVVM architecture for secure, production-ready flows.
  - Modularized the codebase to separate Merchant and Wallet domains; built the networking layer with Alamofire + REST APIs, and integrated Core Data for user-related persistence.
  - Implemented product observability and rollout control with Firebase (Crashlytics, Analytics, A/B Testing, FCM, Remote Config) and delivered polished UI with Core Animation charts/animations for merchant income visualization.
  
- **Smartapps** &nbsp;·&nbsp; iOS Developer &nbsp;·&nbsp; 2019–2020
  - Delivered multiple client iOS apps in a consultancy setting, contributing to Luckit and Pet-On using Swift across fast-changing requirements and codebases.
  - Implemented production features in VIPER architectures and MVVM modules, and built remotely configurable multi-language support via Firebase (runtime updates without App Store releases).
  
- **Cake Loyalty** &nbsp;·&nbsp; iOS Developer &nbsp;·&nbsp; 2017–2019
  - Built iOS apps for loyalty and customer engagement programs across multiple brands and markets, contributing end-to-end from feature design to release.
  - Delivered payment-enabled ordering and loyalty functionality in Swift, focusing on reliable user journeys and scalable feature development.
  - Worked with Beşiktaş JK, Yaşam Pınarım, Tıkla Gelsin, Volvo Car Prime iOS applications.

---

## Tech Stack

**Languages**

![Swift](https://img.shields.io/badge/Swift-%23FA7343.svg?style=flat&logo=swift&logoColor=white)
![Objective-C](https://img.shields.io/badge/Objective--C-%233A95E3.svg?style=flat&logo=apple&logoColor=white)

**Frameworks & Tools**

![UIKit](https://img.shields.io/badge/UIKit-%23007AFF.svg?style=flat&logo=apple&logoColor=white)
![SwiftUI](https://img.shields.io/badge/SwiftUI-%23007AFF.svg?style=flat&logo=swift&logoColor=white)
![Combine](https://img.shields.io/badge/Combine-%23FA7343.svg?style=flat&logo=swift&logoColor=white)
![XCTest](https://img.shields.io/badge/XCTest-%23007AFF.svg?style=flat&logo=apple&logoColor=white)
![SPM](https://img.shields.io/badge/Swift_Package_Manager-%23FA7343.svg?style=flat&logo=swift&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-%232088FF.svg?style=flat&logo=github-actions&logoColor=white)
![Xcode](https://img.shields.io/badge/Xcode-%23147EFB.svg?style=flat&logo=xcode&logoColor=white)

---

## Now

> What I'm focused on in 2 months — updated periodically.

- Hardening PinGuard's certificate rotation API and adding a test harness for mTLS flows
- Exploring **Swift 6 strict concurrency** adoption patterns for large mixed-target codebases
- Writing a technical series on modular iOS architecture for teams of 10+

---

## Contact

The fastest way to reach me is [email](mailto:cagatayegilmez08@gmail.com). I'm open to discussing senior iOS roles, open source collaborations, and technical writing opportunities.

| | |
|---|---|
| **LinkedIn** | [linkedin.com/in/cagatay-egilmez/](https://www.linkedin.com/in/cagatay-egilmez/) |
| **Email** | cagatayegilmez@gmail.com |
| **Location** | Istanbul, TR (open to remote) |

---

<div align="center">

*"Correctness first. Performance second. Everything else is negotiable."*

</div>

<!--
==========================================================================
HOW TO UPDATE THIS README — PLACEHOLDER CHECKLIST
==========================================================================

PERSONAL LINKS (search for these strings and replace):
  [ ] YOUR_LINKEDIN_HANDLE      → your LinkedIn profile slug
  [ ] YOUR_EMAIL@example.com    → your actual email address
  [ ] YOUR_PORTFOLIO_SITE       → your portfolio or personal site URL

PROJECTS:
  [ ] PROJECT_A_REPO            → repo name for Project Slot A
  [ ] PROJECT_B_REPO            → repo name for Project Slot B
  [ ] SHORT_DESCRIPTION_A/B     → one-line description for each project

EXPERIENCE:
  [ ] [Company A/B/C]           → real company names
  [ ] [YEAR]–[YEAR]             → employment dates
  [ ] Metric placeholders (X%, N+, Z ms) → real verified numbers

WRITING:
  [ ] Article Title A/B/C       → real article titles
  [ ] YOUR_BLOG_OR_MEDIUM_LINK  → actual article URLs

NOW SECTION:
  [ ] [Month YEAR]              → current month and year

ASSETS (place files in the /assets/ folder of this repo):
  [ ] /assets/cover.png         → header cover image (1280×400px recommended)
  [ ] /assets/pinguard-diagram.png → optional architecture diagram for PinGuard
                                    (uncomment the img block in the PinGuard section)

BADGES:
  All shields.io badges use stable, parameter-based URLs — no external state.
  If a badge breaks, replace it with a plain text label; nothing else will break.

==========================================================================
-->
<!--
## Writing & Notes

Articles on real-world iOS engineering — no shallow tutorials.

1. **[Article Title A: e.g., "Taming Swift Concurrency in Large Codebases"](https://YOUR_BLOG_OR_MEDIUM_LINK)**
   *A deep-dive into TaskGroup pitfalls, actor reentrancy, and cancellation patterns in production.*

2. **[Article Title B: e.g., "SSL Pinning Without the Footguns"](https://YOUR_BLOG_OR_MEDIUM_LINK)**
   *Why most iOS pinning implementations fail under rotation and how to fix them.*

3. **[Article Title C: e.g., "Modular iOS at Scale: What Actually Matters"](https://YOUR_BLOG_OR_MEDIUM_LINK)**
   *A practical guide to feature modules, dependency graphs, and avoiding circular imports.*

---
-->

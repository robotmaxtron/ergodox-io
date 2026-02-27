# [ergodox.io](https://www.ergodox.io)

The home of the **ErgoDox project**: an entirely open-source, split-hand, mechanical keyboard designed with ergonomics 
in mind.

This repository contains the source code for the ErgoDox website, which serves as a documentation hub and build guide 
for the keyboard.

## Recent Updates

-   **Modern Architecture**: Built with [Hugo](https://gohugo.io) as a high-performance single-page application (SPA).
-   **Performance Focused**: Zero external dependencies (no jQuery); uses native vanilla JavaScript and modern browser 
APIs like `IntersectionObserver`.
-   **Dark Mode Support**: Full theme-aware design that automatically follows system preferences or can be toggled 
manually.
-   **Contemporary UI**: Built with a modern design system using the **Inter** font family and SCSS via Hugo Pipes.
-   **Updated Hardware Guidance**: Optimized for the **Adafruit ItsyBitsy 32u4** (replacing the legacy Teensy 2.0).
-   **Streamlined Sourcing**: Integrated parts list with some vendor part numbers and product links for simplified 
ordering.
-   **Simplified Content**: Logical Markdown structure for easier maintenance and navigation.

---

## Branch and Directory Structure

-   **`master` branch**: The primary branch for development.
    -   `/hugo-site`: Current source code for the website (built with [Hugo](https://gohugo.io)).
    -   `/deploy`: Rendered static files. These files are synced to the `gh-pages` branch for hosting.
    -   `/archive`: Legacy material, including original ErgoDox PCB files and cases (maintained as Git submodules 
    in `/archive/source-material/`).
-   **`gh-pages` branch**: The deployment branch. This branch contains the *contents* of the `/deploy` directory at its 
root and is served to [www.ergodox.io](https://www.ergodox.io) via GitHub Pages.

## Prerequisites

To build and run the site locally, you need:

-   [Hugo](https://gohugo.io/installation/) (extended version recommended)
-   [Git](https://git-scm.com/downloads)

## Getting Started

1.  Clone the repository with submodules:
    ```bash
    git clone --recursive https://github.com/robotmaxtron/ergodox-io.git
    ```
    If you have already cloned the repository, initialize the submodules:
    ```bash
    git submodule update --init --recursive
    ```

## Local Development

1.  Navigate to the Hugo site directory:
    ```bash
    cd hugo-site
    ```

2.  Run the Hugo development server for a live preview:
    ```bash
    hugo server
    ```
    The site will be available at `http://localhost:1313`.

3.  To build the site and update the `/deploy` directory:
    ```bash
    hugo --destination ../deploy
    ```

## Deployment

The site is served from the `gh-pages` branch using the contents of the `/deploy` directory. To push updates to the live site:

```bash
git subtree push --prefix deploy origin gh-pages
```

---

## Contributing

Contributions to the documentation and build guides are welcome! Please ensure that updates are made to the files 
within the `/hugo-site/content/entries/` directory.

## License

This project is licensed under the terms of the MIT license. See [LICENSE](LICENSE) for more information.

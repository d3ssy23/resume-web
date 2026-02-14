import { Mail, Phone, Globe, Linkedin, Github } from "lucide-react";
import resumeImage from "../../../resume.JPG";

export function Resume() {
  return (
    <div className="resume-container w-full min-h-screen pt-10 pb-10 pl-10 pr-10 bg-white print:shadow-none">
      {/* Header */}
      <header className="bg-gradient-to-r from-slate-900 to-slate-700 text-white px-6 py-4">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">Desislava Ilieva</h1>
            <p className="text-lg text-slate-200 mb-4">
              Audio DSP Engineer (C++ / JUCE / VST3)
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-slate-300">
              <a
                href="tel:+359893004405"
                className="flex items-center gap-2 hover:text-white transition-colors print:text-slate-300 print:underline"
              >
                <Phone className="w-3 h-3" />
                <span>+359 893 004 405</span>
              </a>
              <a
                href="mailto:dessy@daudio.dev"
                className="flex items-center gap-2 hover:text-white transition-colors print:text-slate-300 print:underline"
              >
                <Mail className="w-3 h-3" />
                <span>dessy@daudio.dev</span>
              </a>
              <a
                href="https://daudio.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors print:text-slate-300 print:underline"
              >
                <Globe className="w-3 h-3" />
                <span>daudio.dev</span>
              </a>
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-slate-300">
              <p>
                <span className="font-semibold text-slate-200">Open to:</span>{" "}
                Remote / Contract / Hybrid
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/d3ssy23"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-white transition-colors print:underline"
                >
                  <Github className="w-3 h-3" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/desislava-ilieva-482747158/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-white transition-colors print:underline"
                >
                  <Linkedin className="w-3 h-3" />
                  <span>LinkedIn</span>
                </a>
                {/* <a
                  href="https://daudio.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-white transition-colors print:underline"
                >
                  <Globe className="w-3 h-3" />
                  <span>daudio.dev</span>
                </a> */}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src={resumeImage}
              alt="Profile"
              className="w-36 h-36 rounded-full object-cover border-2 border-white shadow-lg print:shadow-none"
            />
          </div>
        </div>
      </header>

      {/* Main Content - 2 column layout */}
      <div className="px-6 py-5 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-5">
          {/* Professional Summary */}
          <section className="mb-5">
            <h2 className="text-lg font-bold text-slate-900 mb-2 pb-1 border-b-2 border-slate-900">
              Professional Summary
            </h2>
            <p className="text-slate-700 text-sm leading-snug">
              Audio DSP engineer specializing in real-time audio processing and
              cross-platform plugin development. 2+ years of professional
              C++/JUCE experience building VST3/AU plugins, supported by 10+
              years in audio engineering and signal processing.
            </p>
          </section>

          {/* Technical Skills */}
          <section className="mb-5">
            <h2 className="text-lg font-bold text-slate-900 mb-2 pb-1 border-b-2 border-slate-900">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 gap-3">
              <div>
                <h3 className="font-bold text-slate-900 text-sm mb-1">
                  Languages & Core
                </h3>
                <p className="text-slate-700 text-sm">
                  C++ (C++17/20) • C (C99) • Bash • MATLAB
                </p>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm mb-1">
                  Audio Development
                </h3>
                <p className="text-slate-700 text-sm">
                  JUCE Framework • VST3/AU/AAX • Real-Time DSP • Cross-Platform
                  Plugins
                </p>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm mb-1">
                  DSP Algorithms
                </h3>
                <p className="text-slate-700 text-sm">
                  Waveshaping & Nonlinear Processing • BLAMP Anti-Aliasing •
                  Oversampling • Convolution • FFT & Spectral Processing •
                  Dynamic Range Processing • Spectral Noise Reduction • Loudness
                  Normalization (EBU R128) • Phase-Coherent Crossfading
                </p>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm mb-1">
                  Performance & Systems
                </h3>
                <p className="text-slate-700 text-sm">
                  Lock-Free Audio Threads • Low-Latency Optimization •
                  Thread-Safe Memory Management
                </p>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm mb-1">
                  Tools & Platforms
                </h3>
                <p className="text-slate-700 text-sm">
                  Git • CMake • Projucer • GCC/Clang • Valgrind • Linux •
                  Ableton Live • Logic Pro • REAPER • AudioPluginHost
                </p>
              </div>
            </div>
          </section>

          {/* Languages */}
          <section className="mb-5">
            <h2 className="text-lg font-bold text-slate-900 mb-2 pb-1 border-b-2 border-slate-900">
              Languages
            </h2>
            <div className="flex gap-6 text-sm">
              <div>
                <span className="font-bold text-slate-900">English:</span>
                <span className="text-slate-700 ml-2">Fluent</span>
              </div>
              <div>
                <span className="font-bold text-slate-900">French:</span>
                <span className="text-slate-700 ml-2">Very Good</span>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="mb-5">
            <h2 className="text-lg font-bold text-slate-900 mb-2 pb-1 border-b-2 border-slate-900">
              Education & Certifications
            </h2>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between items-start gap-2 mb-0.5">
                  <h3 className="font-bold text-slate-900 text-sm">
                    Software Development Program
                  </h3>
                  <span className="text-slate-600 text-xs whitespace-nowrap">
                    42Berlin, Berlin
                  </span>
                </div>
                <p className="text-slate-700 text-sm">
                  Low-level programming, algorithms, system architecture
                </p>
              </div>
              <div>
                <div className="flex justify-between items-start gap-2 mb-0.5">
                  <h3 className="font-bold text-slate-900 text-sm">
                    BA Audio Engineering
                  </h3>
                  <span className="text-slate-600 text-xs whitespace-nowrap">
                    NBU, Sofia
                  </span>
                </div>
                <p className="text-slate-700 text-sm">
                  Acoustics, signal processing, recording techniques
                </p>
              </div>
              <div>
                <div className="flex justify-between items-start gap-2 mb-0.5">
                  <h3 className="font-bold text-slate-900 text-sm">
                    Dante Certification
                  </h3>
                  <span className="text-slate-600 text-xs whitespace-nowrap">
                    Audinate
                  </span>
                </div>
                <p className="text-slate-700 text-sm">
                  Dante audio networking protocols
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div className="space-y-5">
          {/* Professional Experience */}
          <section className="mb-5">
            <h2 className="text-lg font-bold text-slate-900 mb-2 pb-1 border-b-2 border-slate-900">
              Professional Experience
            </h2>

            <div className="mb-4">
              <div className="flex justify-between items-start mb-1 gap-2">
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">
                    Founder & Audio Developer
                  </h3>
                  <p className="text-slate-700 text-sm">daudio::dev</p>
                </div>
                <span className="text-slate-600 text-xs whitespace-nowrap">
                  Oct 2025 - Present
                </span>
              </div>
              <ul className="list-none space-y-1 text-slate-700 text-sm ml-3">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Founded audio development platform specializing in
                    professional-grade VST3/AU plugins
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Designed and shipped cross-platform audio plugins using C++
                    and JUCE framework, including DSaturator (saturation) and
                    DIRLoader (dual-IR convolution reverb) with 500+ downloads
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Developed server-side voice processing engine for broadcast
                    applications, combining 9-stage DSP chain with AI model
                    support enhancement
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Optimized DSP processing for real-time performance using
                    lock-free threading, parameter smoothing, and efficient
                    memory management
                  </span>
                </li>
                {/* <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Implemented advanced DSP algorithms: BLAMP anti-aliasing,
                    2x–16x oversampling, phase-coherent crossfading, spectral
                    morphing
                  </span>
                </li> */}
              </ul>
            </div>

            <div className="mb-4">
              <div className="flex justify-between items-start mb-1 gap-2">
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">
                    Technical Support Specialist (contractor)
                  </h3>
                  <p className="text-slate-700 text-sm">Antelope Audio Ltd.</p>
                </div>
                <span className="text-slate-600 text-xs whitespace-nowrap">
                  Dec 2021 - Present
                </span>
              </div>
              <ul className="list-none space-y-1 text-slate-700 text-sm ml-3">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Provided high-level technical support for professional audio
                    hardware and software products to enterprise clients
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Troubleshot complex technical issues involving audio
                    interfaces, digital/analog routing, and system integration
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Diagnosed low-level driver, routing, and clocking issues in
                    professional audio systems; collaborated with RnD teams to
                    resolve bugs
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Developed technical articles and knowledge base articles for
                    end users and support staff
                  </span>
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <div className="flex justify-between items-start mb-1 gap-2">
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">
                    Audio Production Assistant
                  </h3>
                  <p className="text-slate-700 text-sm">Antelope Audio Ltd.</p>
                </div>
                <span className="text-slate-600 text-xs whitespace-nowrap">
                  Jan 2020 - Dec 2021
                </span>
              </div>
              <ul className="list-none space-y-1 text-slate-700 text-sm ml-3">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Assisted in audio production workflows, including recording,
                    mixing, and post-production processes
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Operated professional audio equipment and DAWs to support
                    product development and testing
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Contributed to quality assurance processes for audio
                    hardware and software releases
                  </span>
                </li>
              </ul>
            </div>

            {/* <div className="mb-4">
              <h3 className="font-bold text-slate-900 text-sm mb-1">
                Freelance Engagements
              </h3>
              <div>
                <p className="font-semibold text-slate-900 text-sm">
                  Audio Developer
                </p>
                <p className="text-slate-700 text-sm">
                  Remote consulting and development
                </p>
              </div>
            </div> */}
          </section>
        </div>
      </div>

      {/* Key Projects - Full width below 2 cols, starts on page 2 when printed/PDF */}
      <div className="key-projects-section px-6 pb-5">
        <section className="mb-5">
          <h2 className="text-lg font-bold text-slate-900 mb-2 pb-1 border-b-2 border-slate-900">
            Key Projects & Technical Achievements
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
            <div className="mb-4 min-w-0">
              <h3 className="font-bold text-slate-900 text-sm mb-1">
                DSaturator – Audio Saturation Plugin
              </h3>
              <p className="text-slate-700 text-sm mb-1">
                <span className="font-semibold">Role:</span> Audio DSP Developer
                |<span className="font-semibold ml-2">Tech:</span> C++, JUCE
              </p>
              <p className="text-slate-700 text-sm mb-1">
                Developed a professional-grade audio saturation plugin featuring
                multiple saturation algorithms with advanced oversampling
                capabilities for high-quality audio processing.
              </p>
              <ul className="list-none space-y-1 text-slate-700 text-sm ml-3">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Implemented saturation types: Tanh, Atan, Cubic Soft
                    Clipper, Triangle & Sine Wavefolding, BLAMP Anti-Aliased
                    Folding
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Adjustable oversampling (2x-16x) with parameter smoothing
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Real-time DSP with dry/wet mixing and output scaling
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Cross-platform VST3 and AU support</span>
                </li>
              </ul>
              <a
                href="https://daudio.dev/projects/DSaturator"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-slate-700 hover:text-slate-900 font-medium mt-2 print:text-slate-900 print:underline"
              >
                Check out DSaturator →
              </a>
            </div>

            <div className="mb-4 min-w-0">
              <h3 className="font-bold text-slate-900 text-sm mb-1">
                DIRLoader – Parallel Impulse Response Loader
              </h3>
              <p className="text-slate-700 text-sm mb-1">
                <span className="font-semibold">Role:</span> Audio DSP Developer
                |<span className="font-semibold ml-2">Tech:</span> C++, JUCE
              </p>
              <p className="text-slate-700 text-sm mb-2">
                Dual impulse response convolution reverb for producers and sound
                designers. Load two IRs in parallel, blend them seamlessly,
                reshape in real time. Swap impulses without dropouts, automate
                smoothly— from tight early reflections to massive, evolving
                spaces.
              </p>
              <p className="text-slate-700 text-sm mb-1 font-medium">
                Sculpting beyond convolution:
              </p>
              <ul className="list-none space-y-1 text-slate-700 text-sm ml-3">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Size – Non-linear time stretching &amp; Warp – Energy shift
                    in tail (used internally with presets)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Damping, Sustain, Decay – HF decay, tail extension, layered
                    diffusion
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Mod & Drift – LFO-like movement and pitch variation
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Proximity – Depth via stereo width and pre-delay</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Independent Pitch (A/B) – ±12 semitones per IR</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Auto-level system for consistent output when switching IRs
                    (internal)
                  </span>
                </li>
              </ul>
              <a
                href="https://daudio.dev/projects/DIRLoader"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-slate-700 hover:text-slate-900 font-medium mt-2 print:text-slate-900 print:underline"
              >
                Check out DIRLoader →
              </a>
            </div>

            <div className="mb-4 min-w-0">
              <h3 className="font-bold text-slate-900 text-sm mb-1">
                QVox – Server-Side Voice Processing Engine
              </h3>
              <p className="text-slate-700 text-sm mb-1">
                <span className="font-semibold">Role:</span> Audio DSP Engineer
                |<span className="font-semibold ml-2">Tech:</span> C++, FFmpeg,
                JUCE, UVR-MDX
              </p>
              <p className="text-slate-700 text-sm mb-1">
                Designed and implemented a server-based broadcast voice
                processing pipeline combining 9-stage DSP chain and AI models
                for noise reduction and enhancement .
              </p>
              <ul className="list-none space-y-1 text-slate-700 text-sm ml-3">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    9-stage DSP chain: high-pass, subtractive EQ, spectral noise
                    reduction, band-limited expansion, de-essing, dual-stage
                    compression (presets + custom settings option)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    UVR-MDX + Kim Vocal AI models support for noise reduction
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    EBU R128 loudness normalization, true peak limiting (-14 to
                    -16 LUFS for podcast/streaming) and (-23/-24 LUFS for
                    broadcast)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    FFmpeg-based backend handling the presets settings in json
                    format
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    LUFS, TP and LRA measurements data of the original and
                    processed audio
                  </span>
                </li>
              </ul>
              <a
                href="https://qvox.daudio.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-slate-700 hover:text-slate-900 font-medium mt-2 print:text-slate-900 print:underline"
              >
                Check out QVox →
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

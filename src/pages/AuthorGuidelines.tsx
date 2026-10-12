import React from 'react';
import {
  FileText,
  Download,
  Info,
  ExternalLink,
  FileCheck,
  BookOpen,
  ShieldCheck,
  ClipboardCheck,
  AlertTriangle,
  GraduationCap,
  CreditCard,
  Search,
  LayoutTemplate,
  FileSignature,
  CheckCircle2,
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const AuthorGuidelines: React.FC = () => {
  const resources = [
    {
      title: 'Manuscript Preparation Guidelines',
      description:
        "Authors must prepare their manuscripts in accordance with the publisher's official guidelines, ensuring proper formatting, organization, presentation, and compliance with publication standards.",
      url: 'https://www.itm-conferences.org/doc_journal/woc/pdf_guidelines.pdf',
      label: 'View Official Guidelines',
      icon: FileText,
    },
    {
      title: 'Guidelines for Writing the Title and Abstract',
      description:
        "Authors must follow the publisher's recommendations for preparing clear, concise, informative, and technically appropriate titles and abstracts that accurately reflect the scope and contributions of their research.",
      url: 'https://www.itm-conferences.org/doc_journal/woc/How_to_write_title_and_abstract.pdf',
      label: 'View Writing Guidelines',
      icon: BookOpen,
    },
    {
      title: 'Official Manuscript Templates',
      description:
        'Access the publisher website for the prescribed Microsoft Word two-column template and official author resources.',
      url: 'https://www.itm-conferences.org/for-authors',
      label: 'Access Templates',
      icon: LayoutTemplate,
    },
    {
      title: 'Publication Rights Form',
      description:
        'The Publication Rights Form must be duly completed and signed by at least one author of each accepted manuscript. Submission of this form is mandatory as part of the publication process.',
      url: 'https://www.itm-conferences.org/doc_journal/woc/publication_right_form.pdf',
      label: 'Download Rights Form',
      icon: FileSignature,
    },
    {
      title: 'Publication Ethics Policy',
      description:
        'All manuscripts must comply with the ethical policies and publication standards established by ITM Web of Conferences and EDP Sciences.',
      url: 'https://www.itm-conferences.org/about-the-journal/publishing-policies-ethics',
      label: 'Read Ethics Policy',
      icon: ShieldCheck,
    },
  ];

  const guidelines = [
    {
      number: '01',
      heading: '1. Manuscript Preparation Guidelines',
      icon: FileText,
      content: (
        <>
          Authors must prepare their manuscripts in accordance with the
          publisher's official guidelines, ensuring proper formatting,
          organization, presentation, and compliance with publication
          standards.
          <p className="mt-3">
            <strong>Official Guidelines:</strong>
          </p>
          <a
            href={resources[0].url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-1 text-sky-600 hover:text-sky-700 font-semibold break-all"
          >
            pdf_guidelines.pdf
            <ExternalLink className="h-4 w-4 shrink-0" />
          </a>
        </>
      ),
    },
    {
      number: '02',
      heading: '2. Guidelines for Writing the Title and Abstract',
      icon: BookOpen,
      content: (
        <>
          Authors must follow the publisher's recommendations for preparing
          clear, concise, informative, and technically appropriate titles
          and abstracts that accurately reflect the scope and contributions
          of their research.
          <p className="mt-3">
            <strong>Official Guidelines:</strong>
          </p>
          <a
            href={resources[1].url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-1 text-sky-600 hover:text-sky-700 font-semibold break-all"
          >
            How_to_write_title_and_abstract.pdf
            <ExternalLink className="h-4 w-4 shrink-0" />
          </a>
        </>
      ),
    },
    {
      number: '03',
      heading: '3. Required Manuscript Format',
      icon: LayoutTemplate,
      content: (
        <>
          <ul className="space-y-3 mt-1">
            <li>
              <strong>File format:</strong> Microsoft Word
            </li>
            <li>
              <strong>Paper size:</strong> A4 (210 × 297 mm)
            </li>
            <li>
              <strong>Page layout:</strong> Two-column format
            </li>
            <li>
              <strong>Template:</strong> Official Word two-column template
            </li>
            <li>
              <strong>Formatting:</strong> All headings, fonts, margins,
              equations, tables, figures, and references must comply with
              the selected template.
            </li>
          </ul>
          <p className="mt-4">
            <strong>Official Templates:</strong>
          </p>
          <a
            href={resources[2].url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-1 text-sky-600 hover:text-sky-700 font-semibold"
          >
            ITM Web of Conferences Author Templates
            <ExternalLink className="h-4 w-4 shrink-0" />
          </a>
        </>
      ),
    },
    {
      number: '04',
      heading: '4. Publication Rights Form',
      icon: FileSignature,
      content: (
        <>
          The Publication Rights Form must be duly completed and signed by
          at least one author of each accepted manuscript. Submission of
          this form is mandatory as part of the publication process.
          <p className="mt-3">
            <strong>Download the Form:</strong>
          </p>
          <a
            href={resources[3].url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-1 text-sky-600 hover:text-sky-700 font-semibold"
          >
            Publication Rights Form (PDF)
            <Download className="h-4 w-4 shrink-0" />
          </a>
        </>
      ),
    },
    {
      number: '05',
      heading: '5. Publication Ethics and Research Integrity',
      icon: ShieldCheck,
      content: (
        <>
          All manuscripts must comply with the ethical policies and
          publication standards established by ITM Web of Conferences and
          EDP Sciences. Authors are responsible for ensuring originality,
          research integrity, appropriate citations, and adherence to
          ethical publishing practices.
          <p className="mt-3">
            <strong>Publication Ethics Policy:</strong>
          </p>
          <a
            href={resources[4].url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-1 text-sky-600 hover:text-sky-700 font-semibold break-all"
          >
            Read Publication Ethics Policy
            <ExternalLink className="h-4 w-4 shrink-0" />
          </a>
        </>
      ),
    },
    {
      number: '06',
      heading: '5. Final Camera-Ready Manuscript Submission',
      icon: ClipboardCheck,
      content: (
        <>
          No further corrections, revisions, modifications, or replacements
          will be permitted after the submission of the final camera-ready
          manuscript. Authors are therefore strongly advised to thoroughly
          verify the technical content, language, formatting, figures,
          tables, references, author names, affiliations, and other
          manuscript details before final submission.
          <div className="mt-4 p-4 bg-amber-50 border border-amber-100 rounded-xl flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-amber-900 text-sm leading-relaxed">
              Carefully verify every manuscript detail before submitting
              the final camera-ready version.
            </p>
          </div>
        </>
      ),
    },
    {
      number: '07',
      heading: '6. Plagiarism and AI-Generated Content Verification',
      icon: Search,
      content: (
        <>
          All manuscripts must undergo plagiarism and AI-generated content
          verification using the official Turnitin platform only.
          <p className="mt-4 font-semibold text-slate-800">
            The following requirements must be strictly satisfied:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div className="rounded-xl bg-rose-50 border border-rose-100 p-4">
              <p className="text-xs uppercase tracking-wider font-bold text-rose-700">
                AI-generated content detection
              </p>
              <p className="text-3xl font-black text-rose-700 mt-2">0%</p>
              <p className="text-xs text-rose-700 mt-1">
                The required Turnitin AI detection percentage is 0%.
              </p>
            </div>
            <div className="rounded-xl bg-sky-50 border border-sky-100 p-4">
              <p className="text-xs uppercase tracking-wider font-bold text-sky-700">
                Text similarity
              </p>
              <p className="text-2xl sm:text-3xl font-black text-sky-700 mt-2">
                Below 10%
              </p>
              <p className="text-xs text-sky-700 mt-1">
                The overall Turnitin similarity index must be strictly
                below 10%.
              </p>
            </div>
          </div>
          <p className="mt-4">
            Authors must ensure that their manuscripts are original,
            appropriately referenced, and compliant with the prescribed
            similarity and AI-content requirements.
          </p>
          <div className="mt-4 p-4 rounded-xl bg-slate-100 border border-slate-200">
            <p className="font-bold text-slate-800 mb-2">Important</p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Manuscripts that do not meet these requirements may be
              rejected or returned for compliance review. Authors should
              also understand that AI detection scores are not definitive
              proof of AI authorship and must be interpreted carefully.
            </p>
          </div>
        </>
      ),
    },
    {
      number: '08',
      heading: '7. Mandatory Manuscript Template and Page Format',
      icon: FileCheck,
      content: (
        <>
          Authors must prepare their manuscripts using the prescribed Word
          two-column template available on the publisher's official website.
          <p className="mt-3">
            <a
              href={resources[2].url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 font-semibold"
            >
              Access Official Templates
              <ExternalLink className="h-4 w-4 shrink-0" />
            </a>
          </p>
        </>
      ),
    },
    {
      number: '09',
      heading: '8. Uniformity and Consistency of Manuscript Formatting',
      icon: LayoutTemplate,
      content: (
        <>
          To ensure a consistent and professional appearance throughout the
          conference proceedings, all authors must use the same prescribed
          manuscript template.
          <p className="mt-3">
            Although the publisher provides multiple template options, the
            conference has selected the A4 Word two-column format as the
            mandatory standard for all submissions.
          </p>
          <p className="mt-3">
            Authors must not use alternative templates or modify the
            prescribed formatting without prior approval from the
            Conference Organizing Committee.
          </p>
        </>
      ),
    },
    {
      number: '10',
      heading: '9. Research Quality and Publication Eligibility',
      icon: GraduationCap,
      content: (
        <>
          Only manuscripts demonstrating high academic quality, scientific
          originality, technical significance, methodological rigor, and
          meaningful research contributions will be considered for
          publication.
          <p className="mt-4 font-semibold text-slate-800">
            Eligible submissions may include:
          </p>
          <ul className="space-y-3 mt-3">
            <li>
              <strong>Original research articles:</strong> Presenting
              innovative findings and validated results.
            </li>
            <li>
              <strong>Experimental studies:</strong> Involving practical
              implementation and working models.
            </li>
            <li>
              <strong>Technical papers:</strong> Demonstrating novel
              methodologies, algorithms, or engineering solutions.
            </li>
            <li>
              <strong>Comprehensive literature reviews and survey papers:</strong>{' '}
              Providing critical analysis, synthesis, and identification
              of research gaps.
            </li>
            <li>
              <strong>Prototype-based research:</strong> Supported by
              appropriate design, implementation, testing, and performance
              evaluation.
            </li>
          </ul>
          <p className="mt-4">
            All manuscripts will be subject to quality assessment and
            editorial scrutiny. Acceptance for conference presentation does
            not automatically guarantee publication in the proceedings.
          </p>
        </>
      ),
    },
    {
      number: '11',
      heading: '10. Conference Registration Fee and Refund Policy',
      icon: CreditCard,
      content: (
        <>
          The conference registration fee is strictly non-refundable under
          any circumstances. Once the registration fee has been paid, no
          refund requests will be entertained, including cases involving
          withdrawal of a manuscript, non-attendance, failure to submit the
          camera-ready manuscript, failure to satisfy publication
          requirements, or rejection during the editorial or publication
          process.
          <p className="mt-3">
            Authors are advised to carefully review all conference
            guidelines, manuscript requirements, and publication conditions
            before completing registration and payment.
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-8 sm:py-10 lg:py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* Page Header */}
        <ScrollReveal
          variant="3d"
          direction="down"
          className="text-center mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sky-100 rounded-full text-sky-700 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-4 border border-sky-200">
            <FileText className="h-3.5 w-3.5" />
            <span>ICNGMR 2026 · Author Information</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">
            Author <span className="text-sky-500">Guidelines</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto mb-6 leading-relaxed">
            Instructions for Manuscript Preparation and Final Submission
          </p>

          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-sm border border-slate-100 p-5 sm:p-8 text-left">
            <p className="text-sm sm:text-base md:text-lg text-slate-600 font-medium leading-relaxed">
              All authors are requested to carefully review and strictly
              adhere to the following guidelines to ensure the successful
              submission and publication of their research papers in ITM
              Web of Conferences (EDP Sciences).
            </p>
          </div>
        </ScrollReveal>

        {/* Essential Requirements */}
        <ScrollReveal variant="3d" direction="up" className="mb-8 sm:mb-12">
          <div className="bg-slate-900 text-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-sky-500/20 rounded-xl text-sky-300">
                <Info className="h-5 w-5" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black">
                Key Submission Requirements
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-xs text-slate-400 uppercase tracking-wider font-bold">
                  File format
                </p>
                <p className="text-lg font-bold mt-2">Microsoft Word</p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-xs text-slate-400 uppercase tracking-wider font-bold">
                  Paper size
                </p>
                <p className="text-lg font-bold mt-2">A4 · 210 × 297 mm</p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-rose-300/20">
                <p className="text-xs text-slate-400 uppercase tracking-wider font-bold">
                  Turnitin AI detection
                </p>
                <p className="text-3xl font-black text-rose-300 mt-2">0%</p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-sky-300/20">
                <p className="text-xs text-slate-400 uppercase tracking-wider font-bold">
                  Turnitin similarity
                </p>
                <p className="text-2xl sm:text-3xl font-black text-sky-300 mt-2">
                  Below 10%
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 mt-5 leading-relaxed">
              All authors must use the prescribed official Word two-column
              template and comply with the publication requirements.
            </p>
          </div>
        </ScrollReveal>

        {/* Official Resources */}
        <section className="mb-10 sm:mb-14">
          <ScrollReveal variant="3d" direction="up">
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <div className="p-2.5 bg-sky-500 rounded-xl text-white">
                <Download className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Official Guidelines & Resources
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Resources provided by ITM Web of Conferences.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {resources.map((resource, index) => {
              const Icon = resource.icon;

              return (
                <ScrollReveal
                  key={resource.title}
                  variant="3d"
                  direction="up"
                  delay={index * 60}
                  className="h-full"
                >
                  <div className="group h-full flex flex-col bg-white rounded-2xl border border-slate-100 p-5 sm:p-6 shadow-sm hover:border-sky-200 hover:shadow-md transition-all duration-300">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="p-2.5 bg-sky-50 text-sky-600 rounded-xl shrink-0">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-sm sm:text-base font-black text-slate-900 leading-snug pt-1">
                        {resource.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 flex-1">
                      {resource.description}
                    </p>

                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full sm:w-fit px-4 py-3 bg-sky-50 text-sky-700 rounded-xl font-bold text-xs sm:text-sm hover:bg-sky-500 hover:text-white transition-colors"
                    >
                      <Download className="h-4 w-4" />
                      {resource.label}
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </section>

        {/* Complete Guidelines */}
        <section className="bg-white rounded-2xl sm:rounded-[2rem] shadow-sm sm:shadow-lg shadow-slate-200/50 p-5 sm:p-8 md:p-10 border border-slate-100 mb-10 sm:mb-14">
          <ScrollReveal variant="3d" direction="up">
            <div className="mb-7 sm:mb-10">
              <p className="text-xs font-bold uppercase tracking-widest text-sky-600 mb-2">
                Instructions for Authors
              </p>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Complete Submission Guidelines
              </h2>
              <p className="text-sm sm:text-base text-slate-500 mt-3 leading-relaxed">
                Please read the following requirements carefully before
                submitting your manuscript.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-4 sm:space-y-5">
            {guidelines.map((item, index) => {
              const Icon = item.icon;

              return (
                <ScrollReveal
                  key={item.number}
                  variant="3d"
                  direction="up"
                  delay={Math.min(index * 35, 140)}
                >
                  <article className="group rounded-xl sm:rounded-2xl border border-slate-100 bg-slate-50/70 p-4 sm:p-6 hover:bg-white hover:border-sky-200 hover:shadow-md transition-all duration-300">
                    <div className="flex items-start gap-3 sm:gap-5">
                      <div className="flex flex-col items-center gap-2 shrink-0">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-white border border-slate-200 text-sky-600 group-hover:bg-sky-500 group-hover:text-white group-hover:border-sky-500 transition-colors">
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="text-[10px] sm:text-xs font-black tracking-widest text-slate-400">
                          {item.number}
                        </span>
                      </div>

                      <div className="min-w-0 flex-1 pt-1">
                        <h3 className="text-base sm:text-lg font-black text-slate-900 mb-3 group-hover:text-sky-700 transition-colors">
                          {item.heading}
                        </h3>

                        <div className="text-xs sm:text-sm text-slate-600 leading-relaxed break-words">
                          {item.content}
                        </div>
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </section>

        {/* Final Notice */}
        <ScrollReveal variant="3d" direction="up" className="mb-8 sm:mb-10">
          <div className="p-5 sm:p-8 bg-amber-50 border border-amber-200 rounded-2xl sm:rounded-3xl">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="p-2.5 bg-amber-100 rounded-xl text-amber-700 shrink-0">
                <AlertTriangle className="h-5 w-5" />
              </div>

              <div>
                <h2 className="text-base sm:text-lg font-black text-amber-950 mb-2">
                  Important Notice
                </h2>
                <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                  Manuscripts that do not meet the stated requirements may
                  be rejected or returned for compliance review. Authors
                  should carefully review all manuscript guidelines,
                  publication requirements, and registration conditions
                  before submitting their manuscripts and completing payment.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Footer */}
        <ScrollReveal variant="3d" direction="up">
          <div className="bg-slate-900 rounded-2xl sm:rounded-3xl p-6 sm:p-9 md:p-10 text-center text-white">
            <div className="inline-flex items-center justify-center p-3 bg-sky-500/15 rounded-2xl text-sky-300 mb-4">
              <CheckCircle2 className="h-6 w-6" />
            </div>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-black mb-3">
              Prepare Your Manuscript Carefully
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed mb-6">
              Please ensure that your manuscript follows the prescribed
              formatting, ethical standards, verification requirements,
              and final submission guidelines.
            </p>

            <a
              href="https://www.itm-conferences.org/for-authors"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 bg-sky-500 text-white rounded-xl font-bold text-sm hover:bg-sky-400 transition-colors"
            >
              <Download className="h-4 w-4" />
              Official Author Resources
              <ExternalLink className="h-4 w-4" />
            </a>

            <div className="mt-7 pt-6 border-t border-white/10">
              <p className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-widest font-bold">
                Organizing Committee
              </p>
              <p className="text-sm sm:text-base font-black mt-1">
                ICNGMR 2026
              </p>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
};

export default AuthorGuidelines;

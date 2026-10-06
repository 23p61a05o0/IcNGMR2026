import React from 'react';
import { User, Users, ShieldCheck, Globe, Star, Mic2, ClipboardCheck, Coffee, Award } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

interface Member {
  name: string;
  title: string;
}

const AFFILIATION = ", VBIT";

const chiefPatrons: Member[] = [
  { name: 'Dr. N. Gowtham Rao', title: 'Chairman' + AFFILIATION },
  { name: 'Dr. G. Manohar Reddy', title: 'Secretary' + AFFILIATION },
];

const patrons: Member[] = [
  { name: 'Dr. P.V.S. Srinivas', title: 'Principal' + AFFILIATION },
  { name: 'Dr. Y.V.S.S.S.V. Prasada Rao', title: 'Director' + AFFILIATION },
];

const conferenceChair: Member[] = [
  { name: 'Dr. Dara Raju', title: 'Head of The Department, Dept. of C.S.E.' + AFFILIATION },
];

const CoConvenor: Member[] = [

  { name: 'Dr. M. Venkateswara Rao', title: 'Professor, Dept. of C.S.E.' + AFFILIATION },
  { name: 'Dr. G. Arun', title: 'Associate Professor, Dept. of C.S.E.' + AFFILIATION },
  { name: 'Dr. B. Naresh Kumar', title: 'Associate Professor, Dept. of C.S.E.' + AFFILIATION },

];

const internationalAdvisory: Member[] = [
  {
    name: "Satya Aditya Akundi",
    title:
      "Assistant Professor, Industrial & Manufacturing Engineering\nUniversity of Wisconsin-Milwaukee, USA"
  },
  {
    name: "Madhava Sharma Vemuri",
    title:
      "Assistant Professor\nUniversity of Washington Bothell, USA"
  },
  { name: 'Dr. Satyaranjan Bairagi', title: 'Ph.D ETH Zurich, Postdoctoral Researcher' },
  { name: 'Dr. Venkat Rao', title: 'Professor, University of Glasgow, U.K' },
  { name: 'Joshin Kumar Reddy Darreddy', title: 'Community Health Systems LLC, USA' },
  { name: 'Dr. Pranith Abbaraju', title: 'Computer Information Systems\nWalker College of Business, Appalachian State University, USA' },
  { name: 'Dr. Warusia Yassin', title: 'Head of Cyber Security Department\nUniversiti Teknikal Malaysia Melaka' },
  { name: 'Dr. R Kanesaraj Ramasamy', title: 'Faculty of Computing and Informatics\nMultimedia University, Cyberjaya, Malaysia' }
];

const nationalAdvisory: Member[] = [
  { name: 'Dr. V. Kamakshi Prasad', title: 'Senior Professor, JNTUH, Hyderabad, Telangana' },
  { name: 'Dr. Ch. Sudhakar', title: 'Professor, NIT, Warangal, Telangana, India' },
  { name: 'Dr. M. Naresh Babu', title: 'Associate Professor, IIITDM, Kurnool, Andhra Pradesh' },
  { name: 'Dr. V. Ramesh', title: 'Professor, Tezpur University, Assam' },
  { name: 'Dr. M. S. Jagadeesh', title: 'Associate Professor, NITTTR Kolkata, West Bengal' },
  { name: 'Dr. Ch. Koteswara Rao', title: 'Associate Professor, Guru Ghasidas University, Chattisgarh' },
  { name: 'Dr. Kranthi Kumar L', title: 'Associate Professor, Manipal Institute of Technology, Karnataka' },
  { name: 'Dr. Nagaraju Baydeti', title: 'NIT, Nagaland' },
  { name: 'Dr. Ripon Patgiri', title: 'NIT, Silchar, Assam' },
  { name: 'Dr. C. R. Rao', title: 'Rtd. Senior Professor, Hyderabad Central University, Telangana' },
  { name: 'Mr. S. Praveen Kumar', title: 'Dy. General Manager, BEL, Hyderabad' }
];

const organizingCommittee: Member[] = [
  { name: 'Dr. A.L. Srinivasulu', title: 'Professor, Dept. of C.S.E.' + AFFILIATION },
  { name: 'Dr. N. Swapna', title: 'Associate Professor, Dept. of C.S.E.' + AFFILIATION },
  { name: 'Dr. P. Yamini Devi', title: 'Associate Professor, Dept. of C.S.E.' + AFFILIATION },
  { name: 'Dr. M. Kalpana', title: 'Associate Professor, Dept. of C.S.E.' + AFFILIATION },
  { name: 'Dr. P. Subhadra', title: 'Associate Professor, Dept. of C.S.E.' + AFFILIATION }
];

const steeringCommittee: Member[] = [

  { name: 'Dr. N. Srinivas', title: 'Associate Professor, Dept. of C.S.E.' + AFFILIATION },
  { name: 'Dr. S. Pothalaiah', title: 'Dean, Academic & Planning, Professor, E.C.E.' + AFFILIATION },
  { name: 'Dr. Sundeep Siddula', title: 'Associate Dean, R&D, Dept. of EEE' + AFFILIATION },
  { name: 'Dr. N. Sathyanarayan', title: 'Rtd. Senior Scientist, BARC, Professor of Physics' + AFFILIATION },
  { name: 'Dr. C. Ramaseshagiri Rao', title: 'Professor, Dept. of C.S.E.' + AFFILIATION },
  { name: 'Dr. P. Sathish Kumar', title: 'Professor, Dept. of M.E.' + AFFILIATION },
  { name: 'Dr. V. Sridhar Reddy', title: 'HoD – I.T' + AFFILIATION },
  { name: 'Dr. Y. Raju', title: 'HoD – C.S.E. (DS)' + AFFILIATION },
  { name: 'Dr. K. Sireesha', title: 'HoD – C.S.E. (A.I. & M.L.)' + AFFILIATION },
  { name: 'Dr. P. Sushma', title: 'HoD – C.S.E. (Cyber Security)' + AFFILIATION },
  { name: 'Dr. G. Swamy', title: 'HoD – C.S.B.S.' + AFFILIATION },
  { name: 'Dr. U. Poornalakshmi', title: 'HoD – E.C.E.' + AFFILIATION },
  { name: 'Dr. K. Neelima', title: 'HoD – E.E.E.' + AFFILIATION },
  { name: 'Dr. P. Kishore Kumar', title: 'HoD – M.E.' + AFFILIATION },
  { name: 'Dr. U. Ramakrishna', title: 'HoD – C.E.' + AFFILIATION },
  { name: 'Dr. P. Kalyani', title: 'HoD – FME' + AFFILIATION },
];

// const technicalProgrammeCommittee: Member[] = [
//   { name: 'Dr. N. Swapna', title: 'Associate Professor, Dept. of C.S.E.' + AFFILIATION },
//   { name: 'Mr. V. Sathish', title: 'Assistant Professor, Dept. of C.S.E.' + AFFILIATION },
// ];

const publicationCommittee: Member[] = [
  { name: 'Dr. P. Subhadra', title: 'Associate Professor, Dept. of C.S.E.' + AFFILIATION },
  { name: 'Dr. M. Kalpana', title: 'Associate Professor, Dept. of C.S.E.' + AFFILIATION },
  { name: 'Mr. D. Srinivas Goud', title: 'Associate Professor, Dept. of C.S.E.' + AFFILIATION },
  { name: 'Mr. S. Venkata Satyakrishna', title: 'Associate Professor, Dept. of C.S.E.' + AFFILIATION },
];

const registrationCommittee: Member[] = [

  { name: 'Ms. P. Suvarnapushpa', title: 'Assistant Professor, Dept. of C.S.E.' + AFFILIATION },
  { name: 'Ms. K. Priyabhashini', title: 'Assistant Professor, Dept. of C.S.E.' + AFFILIATION },
  { name: 'Ms. A. Sandhyarani', title: 'Assistant Professor, Dept. of C.S.E.' + AFFILIATION },
  { name: 'Ms. R. Sumathi', title: 'Associate Professor, Dept. of C.S.E.' + AFFILIATION },
  { name: 'Ms. P. Swathi', title: 'Assistant Professor, Dept. of C.S.E.' + AFFILIATION },
  { name: 'Ms. A.P. Chaitanyasri Mouli', title: 'Professor, Dept. of C.S.E.' + AFFILIATION },
];

// const publicityCommittee: Member[] = [
//   { name: 'Mr. P. Hanumantha Rao', title: 'Assistant Professor, Dept. of C.S.E.' + AFFILIATION },
//   { name: 'Ms. J. Kumari', title: 'Assistant Professor, Dept. of C.S.E.' + AFFILIATION },
//   { name: 'Ms. U. Kavya', title: 'Assistant Professor, Dept. of C.S.E.' + AFFILIATION },
// ];

const hospitalityCommittee: Member[] = [
  { name: 'Dr. S. Ramesh', title: 'Assistant Professor, Dept. of C.S.E.' + AFFILIATION },
  { name: 'Mr. G. Srikanth Reddy', title: 'Assistant Professor, Dept. of C.S.E.' + AFFILIATION },
  { name: 'Mr. S. Nagarjuna', title: 'Assistant Professor, Dept. of C.S.E.' + AFFILIATION },
  { name: 'Ms. N. Sudharani', title: 'Assistant Professor, Dept. of C.S.E.' + AFFILIATION },
  { name: 'Mr. Degavath Raju', title: 'Assistant Professor, Dept. of C.S.E.' + AFFILIATION },
];

const CommitteeSection = ({ title, members, icon }: { title: string; members: Member[]; icon: React.ReactNode }) => (
  <ScrollReveal variant="3d" direction="up" className="mb-10 sm:mb-12">
    <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
      <div className="p-2 sm:p-2.5 bg-sky-500 rounded-xl shadow-md text-white flex-shrink-0">
        {icon}
      </div>
      <div>
        <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">{title}</h2>
        <div className="w-8 sm:w-10 h-1 bg-sky-500 rounded-full mt-1"></div>
      </div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5">
      {members.map((member, index) => (
        <div
          key={index}
          className="group bg-white p-4 sm:p-5 rounded-xl sm:rounded-[1.2rem] border border-slate-100 shadow-sm sm:shadow-md shadow-slate-200/30 md:hover:-translate-y-1.5 md:hover:shadow-xl md:hover:shadow-sky-500/15 md:hover:border-sky-300 md:hover:scale-[1.015] transition-all duration-300 cursor-default sm:cursor-pointer"
        >
          <h3 className="font-extrabold text-slate-900 text-sm sm:text-base mb-1 leading-snug group-hover:text-sky-600 transition-colors">{member.name}</h3>
          <p className="text-slate-500 text-[11px] sm:text-xs font-medium leading-relaxed italic whitespace-pre-line">{member.title}</p>
        </div>
      ))}
    </div>
  </ScrollReveal>
);

const Committee = () => (
  <div className="min-h-screen bg-slate-50 py-8 lg:py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
      <ScrollReveal variant="3d" direction="down" className="text-center mb-8 sm:mb-12">
        <div className="inline-flex items-center space-x-2 px-3 py-1 bg-sky-100 rounded-full text-sky-700 text-[10px] font-bold uppercase tracking-widest mb-3 sm:mb-4 border border-sky-200">
          <Star className="h-3 w-3" />
          <span>ICNGMR 2026 Organizing Body</span>
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-2 tracking-tight">
          Conference <span className="text-sky-500">Committee</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto font-medium mt-2">
          Vignana Bharathi Institute of Technology (Autonomous), Hyderabad, Telangana – 501301
        </p>
      </ScrollReveal>

      <CommitteeSection title="Chief Patrons" members={chiefPatrons} icon={<ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5" />} />
      <CommitteeSection title="Patrons" members={patrons} icon={<Star className="h-4 w-4 sm:h-5 sm:w-5" />} />
      <CommitteeSection title="Convenor" members={conferenceChair} icon={<User className="h-4 w-4 sm:h-5 sm:w-5" />} />
      <CommitteeSection title="Co-Convenor" members={CoConvenor} icon={<ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5" />} />
      <CommitteeSection title="International Advisory Committee" members={internationalAdvisory} icon={<Globe className="h-4 w-4 sm:h-5 sm:w-5" />} />
      <CommitteeSection title="National Advisory Committee" members={nationalAdvisory} icon={<Award className="h-4 w-4 sm:h-5 sm:w-5" />} />
      <CommitteeSection title="Organizing Committee" members={organizingCommittee} icon={<Users className="h-4 w-4 sm:h-5 sm:w-5" />} />
      <CommitteeSection title="Steering Committee" members={steeringCommittee} icon={<ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5" />} />
      <CommitteeSection title="Publication Committee" members={publicationCommittee} icon={<ClipboardCheck className="h-4 w-4 sm:h-5 sm:w-5" />} />
      <CommitteeSection title="Registration Committee" members={registrationCommittee} icon={<ClipboardCheck className="h-4 w-4 sm:h-5 sm:w-5" />} />
      {/* <CommitteeSection title="Technical Programme Committee" members={technicalProgrammeCommittee} icon={<Mic2 className="h-4 w-4 sm:h-5 sm:w-5" />} />
      <CommitteeSection title="Publicity Committee" members={publicityCommittee} icon={<Users className="h-4 w-4 sm:h-5 sm:w-5" />} /> */}
      <CommitteeSection title="Hospitality Committee" members={hospitalityCommittee} icon={<Coffee className="h-4 w-4 sm:h-5 sm:w-5" />} />
    </div>
  </div>
);

export default Committee;
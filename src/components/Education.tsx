
import {
  FaGraduationCap,
  FaBookOpen,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Education = () => {
  return (
    <section
      id="education"
      className="bg-[#050b16] text-white px-5 md:px-8 lg:px-12 py-20 md:py-24 scroll-mt-24 ..."
    >
      {/* Section Heading */}
      <div className="text-center mb-14">
        <h2 className="text-blue-500 text-sm font-bold tracking-[5px] uppercase">
          Education
        </h2>

        <p className="text-4xl md:text-5xl font-extrabold text-white mt-3">
          My Academic <span className="text-blue-500">Journey</span>
        </p>

        <div className="w-16 h-1 bg-blue-500 rounded-full mx-auto mt-6"></div>

        <p className="text-gray-400 text-base md:text-lg mt-5 max-w-2xl mx-auto">
          My educational background and academic experience.
        </p>
      </div>

      {/* Education Content */}
      <div className="max-w-4xl mx-auto">

        {/* University Card */}
        <div className="relative bg-gradient-to-br from-[#0b1527] to-[#09111f] border border-blue-500/20 rounded-2xl p-6 md:p-10 shadow-[0_10px_40px_rgba(37,99,235,0.08)] transition-all duration-300 hover:border-blue-500/50">

          {/* Top Section */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-8">

            {/* Graduation Icon */}
            <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-blue-500/10 border border-blue-500/20 shrink-0">
              <FaGraduationCap className="text-blue-400 text-3xl" />
            </div>

            {/* University Information */}
            <div>
              <span className="inline-block text-blue-400 text-xs font-bold tracking-widest uppercase mb-2">
                University Education
              </span>

              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Sittwe University
              </h3>

              <p className="text-gray-400 text-base mt-2">
                English Major
              </p>
            </div>

          </div>

          {/* Divider */}
          <div className="border-t border-white/10 my-6"></div>

          {/* Information Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">

            <div className="flex items-center gap-4 bg-[#101d30] border border-white/10 rounded-xl p-4">
              <FaCalendarAlt className="text-blue-400 text-xl shrink-0" />

              <div>
                <p className="text-gray-500 text-xs mb-1">
                  Study Period
                </p>
                <p className="text-gray-200 font-medium">
                  2019 – Present
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-[#101d30] border border-white/10 rounded-xl p-4">
              <FaMapMarkerAlt className="text-blue-400 text-xl shrink-0" />

              <div>
                <p className="text-gray-500 text-xs mb-1">
                  Location
                </p>
                <p className="text-gray-200 font-medium">
                  Rakhine State, Myanmar
                </p>
              </div>
            </div>

          </div>

          {/* Academic Description */}
          <div className="mb-8">
            <h4 className="flex items-center gap-3 text-xl font-bold text-white mb-4">
              <FaBookOpen className="text-blue-400" />
              About My Studies
            </h4>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              I am an undergraduate student majoring in English at
              Sittwe University. My academic studies have helped me
              develop English communication, reading, writing, and
              analytical skills.
            </p>
          </div>

          {/* Status */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-semibold">
              Undergraduate Student
            </span>

            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm">
              English Major
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;

import profile_me from "../assets/profile_me.png";
import white_logo from "../assets/white_logo.png";
import icon_github from "../assets/icon_github.png";
import icon_linkedin from "../assets/icon_linkedin.png";
import icon_blog from "../assets/icon_blog.png";
import icon_resume from "../assets/icon_resume.png";

const Home = () => {
  return (
    <section>
      <div className="relative px-4 pt-[12px] md:px-32 flex flex-col md:gap-[48px]">
        <img
          src={white_logo}
          alt="logo"
          className="absolute md:top-0 top-32 right-0 w-[140px] md:w-[279px] z-0"
        />
        <div className="flex gap-[12px] md:gap-[36px] flex-col md:flex-row">
          <img
            src={profile_me}
            alt="profile"
            className="h-[200px] md:h-[320px] z-10 flex-none w-[150px] md:w-[240px]"
          />
          <div className="text-left m-4 z-10 flex-1">
            <h2 className="text-[12pt] md:text-[32pt]">안녕하세요.</h2>
            <h2 className="text-[12pt] md:text-[32pt]">
              컴퓨터를 공부하고 있는, <span className="font-bold">윤준성</span>
              입니다.
            </h2>
            <h2 className="text-[12pt] md:text-[32pt]">
              재밌는 앱/웹 프로젝트들을 많이 만들고 싶어요.
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[12px] md:gap-[60px] mt-[24px]">
          <LinkCard
            key={"github"}
            img={icon_github}
            link="https://github.junbyeol.me"
            bold_label="GitHub"
            regular_label="@Junbyeol"
          />
          <LinkCard
            key={"linkedin"}
            img={icon_linkedin}
            link="https://linkedin.junbyeol.me"
            bold_label="LinkedIn"
          />
          <LinkCard
            key={"blog"}
            img={icon_blog}
            link="https://blog.junbyeol.me"
            bold_label="Blog"
            regular_label="준별개발"
          />
          <LinkCard
            key={"resume"}
            img={icon_resume}
            link="https://resume.junbyeol.me"
            bold_label="Resume"
            regular_label="이력서"
          />
        </div>
      </div>
    </section>
  );
};

interface LinkCardProps {
  img: string;
  link: string;
  bold_label: string;
  regular_label?: string;
}

function LinkCard({ img, link, bold_label, regular_label }: LinkCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full aspect-square md:aspect-auto md:h-[120px] py-[8px] bg-[#D9D9D9]/50 rounded-[8px] flex flex-col justify-center items-center hover:bg-[#D9D9D9]/60 transition-colors"
    >
      <img
        src={img}
        alt={bold_label}
        className="w-[24px] h-[24px] md:w-[48px] md:h-[48px] mx-auto mb-[4px]"
      />
      <div className="flex flex-col md:flex-row justify-center items-center gap-[4px]">
        <span className="font-bold text-[12pt] md:text-[16pt]">
          {bold_label}
        </span>
        {regular_label && (
          <span className="ml-[4px] text-[12pt] md:text-[16pt]">
            {regular_label}
          </span>
        )}
      </div>
    </a>
  );
}

export default Home;

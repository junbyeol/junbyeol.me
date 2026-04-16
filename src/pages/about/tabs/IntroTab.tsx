const B = ({ children }: { children: React.ReactNode }) => (
  <strong className="font-semibold text-text">{children}</strong>
);

const IntroTab = () => (
  <div
    id="tabpanel-intro"
    role="tabpanel"
    aria-labelledby="tab-intro"
    className="flex flex-col gap-5"
  >
    <p className="text-base leading-relaxed text-text/80">
      안녕하세요.
      <br />
      한국에 살고 있는 소프트웨어 엔지니어 <B>윤준성</B>입니다.
    </p>
    <p className="text-base leading-relaxed text-text/80">
      지금 당신이 보고 있는 이곳은 <B>Junbyeol.me</B>라는 웹사이트입니다.
      <br />제 생각, 고민, 공부, 자아성찰 과정에서 나온 작업물들을 다양한 형태로
      기록하고자 만든 공간입니다.
    </p>
    <p className="text-base leading-relaxed text-text/80">
      지금까지도 다양한 작업과 시도를 해왔습니다만,{" "}
      <B>기록되지 않거나 미완성된 채로 잊혀지기</B>가 다반사였습니다.
      <br />
      기록되더라도 <B>파편화되어 흩어진 시도들</B>은 더 큰 가치로 이어지지
      못하고 그 자체로 남겨졌습니다.
    </p>
    <p className="text-base leading-relaxed text-text/80">
      제 시간과 열정을 쏟은 결과물들이 이 곳에서 모여 <B>창발적인 효과</B>를
      만들어내기를 기대합니다.
      <br />
      더불어, 이 사이트가 <B>저라는 인간을 설명</B>할 수 있는 공간이 되기를
      기대합니다.
    </p>
  </div>
);

export default IntroTab;

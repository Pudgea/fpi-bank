import Header from "./components/ui/Header";
import "./css/App.css";
import "./css/header.css";
import "./css/charts.css";
import "./css/slider.css";
import "./css/info.css";
import "./css/holders.css";
import "./css/tarifs.css";
import "./css/qa.css";
import "./css/footer.css";

import {
  Chart,
  LineController,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
} from "chart.js";
import "chartjs-adapter-date-fns";
import ChartContainer from "./components/ui/Charts";

import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import HcBlock from "./components/common/hcBlock";
import TariffBlock from "./components/common/tariffBlock";
import ClosingBlock from "./components/common/closingBlock";

Chart.register(
  LineController,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
);

function App() {
  const tarif1 = {
    name: "Нищий",
    price: 3000,
    values: [
      { name: "Часть семьи", isIncluded: true },
      { name: "Увоженья дон", isIncluded: true },
      { name: "Кошка девочка", isIncluded: false },
      { name: "Чай без сахара", isIncluded: false },
      { name: "Обед в кругу семьи", isIncluded: false },
    ],
  };

  const tarif2 = {
    name: "Дворянин",
    price: 5000,
    values: [
      { name: "Часть семьи", isIncluded: true },
      { name: "Увоженья дон", isIncluded: true },
      { name: "Кошка девочка", isIncluded: true },
      { name: "Чай с сахаром", isIncluded: true },
      { name: "Обед в кругу семьи", isIncluded: true },
      { name: "Свежая газета по утрам", isIncluded: false },
    ],
  };

  const tarif3 = {
    name: "Император",
    price: 10000,
    values: [
      { name: "Часть семьи", isIncluded: true },
      { name: "Увоженья дон", isIncluded: true },
      { name: "Кошка девочка", isIncluded: true },
      { name: "Чай с мёдом", isIncluded: true },
      { name: "Обед в кругу семьи", isIncluded: true },
      { name: "Свежая газета по утрам", isIncluded: true },
      { name: "Золотая ложка", isIncluded: true },
    ],
  };

  const tariffs = [tarif1, tarif2, tarif3];

  const questions = [
    {
      question: "Как у нас дела?",
      answer: "Да все на самом деле замечательно, лучше чем у многих хо-хо-хо",
    },
    {
      question: "Вы знаете мою маму?",
      answer: "Это не я ее знаю, это она меня знает",
    },
    {
      question: "ОТкуда у вас данные моей карты",
      answer: "Ищем на ней ориентиры... тут легко потеряться",
    },
  ];
  return (
    <div className="container">
      <Header />
      <ChartContainer />
      <div className="info-container">
        <div className="ic-main">
          <div className="">
            <h1>Почему именно FPI Bank?</h1>
            <p>сам не знаю</p>
          </div>
          <div className="icm-blocks">
            <div className="icmb-block">
              <h3>
                Мы не спрашиваем, зачем вам деньги. Мы просто их принимаем.
              </h3>
              <p>
                В то время как другие банки обещают вам стабильность и
                прозрачность, мы предлагаем иллюзию стабильности и абсолютную
                анонимность. Ваши деньги под надежной защитой — они просто
                исчезнут, и никто (даже мы) не узнает, где они.
              </p>
            </div>
            <div className="icmb-block">
              <h3>Безопасность, которой можно не доверять.</h3>
              <p>
                Ваши данные? Мы их не храним. Ваши деньги? Мы их не видим. Ваши
                транзакции? Мы о них даже не думаем.
                <br />
              </p>
              <p>
                Наши серверы работают на базе:
                <ul>
                  <li>Черной магии</li>
                  <li>Секретного API</li>
                  <li>Telegram</li>
                  <li>Бесплатного Wi-Fi из ближайшей кофейни</li>
                </ul>
              </p>
            </div>
            <div className="icmb-block">
              <h3>Наши ключевые продукты.</h3>
              <p>
                <ul>
                  <li>
                    <b>FPIBANK Token</b> — единственная криптовалюта,
                    обеспеченная мемами
                  </li>
                  <li>
                    <b>FPI Credit</b> — кредит без процентов, сроков и шансов
                    его получить
                  </li>
                  <li>
                    <b>FPI Vault</b> — хранилище для ваших токенов с гарантией
                    "пока не надоест"
                  </li>
                  <li>
                    <b>FPI IPO</b> — инвестируйте в компанию, которая не
                    существует
                  </li>
                </ul>
              </p>
            </div>
            <div className="icmb-block">
              <h3>FPIBANK Token — Валюта великого будущего.</h3>
              <p>
                <b>FPIBANK Token</b> — это первый токен, который честно говорит:
                <b>"Мы не знаем, зачем он вам, но вы все равно его купите."</b>
              </p>
              <p>
                Преимущества токена:
                <ul>
                  <li>Абсолютная нестабильность</li>
                  <li>100% волатильность</li>
                  <li>
                    Полная децентрализация (даже создатели не знают, где он
                    торгуется)
                  </li>
                  <li>
                    Невероятный рост — просто потому что все об этом говорят
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <img
            src="https://static.wixstatic.com/media/ba338e_f9dcfb2708ee404ebe878591210fa99c~mv2.png/v1/fill/w_1158,h_728,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/card3_2_%20(2).png"
            alt=""
          />
        </div>
        <div className="ic-bg"></div>
      </div>
      <div className="slider-container">
        <div className="sc-main">
          <div className="">
            <h1>Выберите DESIGN себе в кайф</h1>
            <p>ну или что мама разрешит</p>
          </div>
          <div className="sc-slider">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src="https://static.wixstatic.com/media/ba338e_ffedeea87b3447fc8fc582b4c433ca00~mv2.png/v1/fill/w_1066,h_668,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/ba338e_ffedeea87b3447fc8fc582b4c433ca00~mv2.png" />
                <h2>Пакости</h2>
                <p>
                  Идеальный инструмент для тех, кто хочет добавить немного
                  беспорядка в свои финансы. Эта карта спроектирована для
                  максимального сюрприза с каждой транзакцией, гарантируя вам
                  неожиданные комиссии и сбои. Подарите себе финансовое
                  приключение, полное случайностей и скрытых уловок!
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://static.wixstatic.com/media/ba338e_a74ff505d7b14caca524ed2de5b464bf~mv2.png/v1/fill/w_1042,h_654,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/card4.png" />
                <h2>Финансовая Ловушка</h2>
                <p>
                  Для тех, кто любит сложные схемы и неожиданные повороты.
                  Каждый платеж с этой картой может привести к скрытым комиссиям
                  и финансовым загадкам, которые будут держать вас в напряжении.
                  Настоящая находка для любителей сюрпризов и ловушек!
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://static.wixstatic.com/media/ba338e_7069895e29d847b09b1ce04e5b487060~mv2.png/v1/fill/w_1086,h_680,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/card5_2.png" />
                <h2>СкрытаяКомиссияВ КаждомПлатеже-инатор</h2>
                <p>
                  Для настоящих фанатов финансовых фокусов! Каждый платеж
                  превращается в грандиозное представление, где комиссии
                  появляются, как по волшебству. Удивляйтесь сами и веселите
                  окружающих, пока ваш баланс тает, а счета пестрят сюрпризами!
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://static.wixstatic.com/media/ba338e_f9dcfb2708ee404ebe878591210fa99c~mv2.png/v1/fill/w_1158,h_728,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/card3_2_%20(2).png" />
                <h2>Злодейский Пластик</h2>
                <p>
                  Ваш верный союзник в создании финансового хаоса! Она
                  превращает каждую покупку в шоу, полное скрытых сборов,
                  странных условий и неожиданных сюрпризов. Готовьтесь к тому,
                  что ваш баланс будет танцевать под управлением злодейского
                  куража!
                </p>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="sc-trans-p"></div>
        <div className="sc-trans-g"></div>
      </div>
      <div className="road-container">
        <div className="rc-head">
          <h1>Присоединяйтесь к финансовой революции!</h1>
          <p>FPI Bank — Просто доверьтесь процессу.</p>
        </div>
        <div className="rc-main">
          <h3 id="one">
            <p>1</p>Пока другие ждут — мы печатаем деньги.
          </h3>
          <h3 id="two">
            <p>2</p>Пока другие жалуются — мы создаем токены.
          </h3>
          <h3 id="three">
            <p>3</p>Пока другие работают — мы отдыхаем.
          </h3>
          <div className="bg-circle" id="one"></div>
        </div>
      </div>
      <div className="holders-container">
        <h1>Главные лица проекта</h1>
        <div className="hc-main">
          <HcBlock
            url={"/burik.webp"}
            name={"Бурик"}
            text={"Главный холдер FPI банков. Фигурирует в группировке ШПАНА"}
          />
          <HcBlock
            url={"/nowkie.webp"}
            name={"Новки"}
            text={
              "Главный в криптоскаме и забирает все деньге Бурика, обещая огромные XXX."
            }
          />
          <HcBlock
            url={"/ya.webp"}
            name={"Я"}
            text={
              "Участник организации ШПАНА. Друг Бурика и просто чилловый парень пишущий этот сайт"
            }
          />
          <HcBlock
            url={"/monkey.webp"}
            name={"Бибизян"}
            text={
              "Круто манкеееее. Обезьянки просто лучшие, респпеееект им лютыйй"
            }
          />
          <HcBlock
            url={"/stability.jpg"}
            name={"Стабилити"}
            text={
              "Ключевой аспект FPI, который так понравитлся Бурику, что он решил довериться нам"
            }
          />
        </div>
      </div>
      <div className="tarifs-container">
        <div className="tc-head">
          <h1>Наши тарифы</h1>
          <p>или делай че хочеш</p>
        </div>
        <div className="tc-main">
          {tariffs.map((tarif) => (
            <TariffBlock {...tarif} />
          ))}
        </div>
        <div className="tc-foot">
          <p>
            Остались вопросы? <span className="primary">Не пишите нам :)</span>
          </p>
        </div>
      </div>
      <div className="qa-container">
        <div className="qc-head">
          <h1>Ответы на ваши вопросы</h1>
          <p>Ладно, мы сами их писали</p>
        </div>
        <div className="qc-main">
          {questions.map((q) => (
            <ClosingBlock {...q} />
          ))}
        </div>
      </div>
      <div className="footer-container">
        <div className="fc-top">Ваш люти ФПЕ банке ДОнн</div>
        <div className="fc-line"></div>
        <div className="fc-bottom">C кружок FPI Артйом банке</div>
      </div>
    </div>
  );
}

export default App;

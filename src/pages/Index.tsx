export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <img
            src="https://cdn.poehali.dev/files/7b98ef7d-f2d7-40fa-b5fb-a62995db33dd.jpg"
            alt="ОбедБрат"
            style={{ width: "50px", height: "50px", borderRadius: "50%", border: "2px solid var(--dark)" }}
          />
          <span style={{ fontSize: "20px" }}>ОБЕДБРАТ</span>
        </div>
        <nav>
          <a href="#menu">Меню</a>
          <a href="#about">О нас</a>
          <a href="#order">Заказать</a>
        </nav>
        <a href="tel:+79000000000" className="btn-cta" style={{ textDecoration: "none" }}>
          Позвонить
        </a>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              ЕДА КАК
              <br />
              ДОМА,{" "}
              <span>только</span>
              <br />
              вкуснее
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Домашние сэндвичи, картошка и морс — всё свежее, всё вкусное. Работаем на доставку, готовим с душой.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                Заказать набор — 650 ₽
              </button>
              <a href="#menu" className="btn-cta" style={{ background: "white", textDecoration: "none" }}>
                Смотреть меню
              </a>
            </div>
          </div>
          <div
            className="hero-img"
            style={{
              background: `url("https://cdn.poehali.dev/projects/d38b36c1-381d-4094-8ded-0a957a499c91/files/becf1ab9-fedd-4bec-9c61-ba1852f7d8ac.jpg") center center / cover`,
            }}
          >
            <div className="sticker">
              650 ₽
              <br />
              НАБОР!
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              ДОСТАВКА
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              ДОМАШНЕЕ
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * СЭНДВИЧИ С КУРИЦЕЙ * КЛАБ-СЭНДВИЧ С БЕКОНОМ * КАРТОШКА ДОЛЬКАМИ ИЛИ ФРИ * МОРС В КАЖДОМ НАБОРЕ *
            ДОСТАВКА * ОПЛАТА НАЛИЧНЫМИ ИЛИ ПЕРЕВОДОМ * СЭНДВИЧИ С КУРИЦЕЙ * КЛАБ-СЭНДВИЧ С БЕКОНОМ * КАРТОШКА ДОЛЬКАМИ
            ИЛИ ФРИ * МОРС В КАЖДОМ НАБОРЕ * ДОСТАВКА
          </div>
        </div>

        <section className="section-padding" id="menu">
          <div className="section-header">
            <h2 className="section-title">НАШ НАБОР</h2>
            <span
              style={{
                fontSize: "14px",
                fontWeight: 800,
                textTransform: "uppercase",
                background: "var(--primary)",
                color: "white",
                padding: "8px 16px",
                border: "var(--border)",
                boxShadow: "4px 4px 0 var(--dark)",
              }}
            >
              650 ₽ за набор
            </span>
          </div>

          {/* Что входит в набор */}
          <div
            style={{
              background: "var(--accent)",
              border: "var(--border)",
              boxShadow: "var(--shadow)",
              padding: "24px 30px",
              marginBottom: "40px",
              display: "flex",
              flexWrap: "wrap",
              gap: "16px",
              alignItems: "center",
            }}
          >
            <span style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 800, fontSize: "18px", color: "var(--dark)" }}>
              В КАЖДОМ НАБОРЕ:
            </span>
            {["🥤 Морс", "🍟 Картошка дольками или фри", "🥪 Сэндвич на выбор"].map((item) => (
              <span
                key={item}
                style={{
                  background: "white",
                  border: "2px solid var(--dark)",
                  padding: "8px 16px",
                  fontWeight: 700,
                  fontSize: "14px",
                }}
              >
                {item}
              </span>
            ))}
          </div>

          <div className="menu-grid">
            {/* Сэндвич с курицей */}
            <div className="menu-card">
              <span className="menu-tag">Хит</span>
              <img
                src="https://cdn.poehali.dev/files/70e7e015-9c52-4657-b201-6fa9a7460b38.jpg"
                alt="Сэндвич с курицей и помидорами"
                style={{ objectFit: "cover", height: "220px", width: "100%" }}
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Сэндвич с курицей</h3>
                  <span className="price">в наборе</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Хлеб для тостов, куриное филе, твёрдый сыр, крем-сыр, помидор, зелень, салатные листья.
                </p>
              </div>
            </div>

            {/* Клаб-сэндвич с беконом */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>
                Классика
              </span>
              <img
                src="https://cdn.poehali.dev/files/7b98ef7d-f2d7-40fa-b5fb-a62995db33dd.jpg"
                alt="Клаб-сэндвич с беконом"
                style={{ objectFit: "cover", height: "220px", width: "100%" }}
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Клаб-сэндвич с беконом</h3>
                  <span className="price">в наборе</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Хлеб, бекон, ветчина, сыр, помидор, красный лук, салатный лист, майонез. Самый что ни на есть классический!
                </p>
              </div>
            </div>

            {/* Набор целиком */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                Полный набор
              </span>
              <img
                src="https://cdn.poehali.dev/projects/d38b36c1-381d-4094-8ded-0a957a499c91/files/becf1ab9-fedd-4bec-9c61-ba1852f7d8ac.jpg"
                alt="Набор ОбедБрат"
                style={{ objectFit: "cover", height: "220px", width: "100%" }}
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Набор ОбедБрат</h3>
                  <span className="price">650 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Сэндвич на выбор + картошка дольками или фри + стакан домашнего морса. Сытно, вкусно, по-домашнему.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="retro-vibe" id="about">
          <div>
            <h2 className="vibe-title">ЕДА КАК ОТ МАМЫ.</h2>
            <p className="vibe-text">
              Мы не ресторан со звёздами Мишлен — мы просто готовим хорошую домашнюю еду и везём её к тебе. Свежие
              ингредиенты, честные цены, никаких лишних понтов. Оплата наличными или переводом на карту — как удобно.
            </p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
              Как заказать
            </button>
          </div>
          <div
            className="vibe-img"
            style={{
              background: `url("https://cdn.poehali.dev/projects/d38b36c1-381d-4094-8ded-0a957a499c91/files/3f3fb4ad-42eb-4d2e-8da8-8e9992934f32.jpg") center center / cover`,
            }}
          ></div>
        </section>

        {/* Как заказать */}
        <section className="section-padding" id="order" style={{ background: "var(--dark)", color: "white" }}>
          <h2
            className="section-title"
            style={{ marginBottom: "40px", textAlign: "center", color: "var(--accent)" }}
          >
            КАК ЗАКАЗАТЬ
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "24px",
            }}
          >
            {[
              { num: "01", title: "Позвони нам", desc: "Расскажи, что хочешь — сэндвич с курицей или клаб с беконом, дольки или фри." },
              { num: "02", title: "Подтверди заказ", desc: "Уточним адрес и время доставки. Работаем утром и в обеденные часы." },
              { num: "03", title: "Оплати", desc: "Наличными при получении или переводом на карту — как тебе удобнее." },
            ].map((step) => (
              <div
                key={step.num}
                style={{
                  border: "2px solid white",
                  padding: "30px 24px",
                  position: "relative",
                }}
              >
                <span
                  style={{
                    fontFamily: "Unbounded, sans-serif",
                    fontSize: "48px",
                    fontWeight: 800,
                    color: "var(--primary)",
                    lineHeight: 1,
                    display: "block",
                    marginBottom: "16px",
                  }}
                >
                  {step.num}
                </span>
                <h3 style={{ fontWeight: 800, fontSize: "18px", marginBottom: "10px", textTransform: "uppercase" }}>
                  {step.title}
                </h3>
                <p style={{ color: "#aaa", fontSize: "14px", lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <a
              href="tel:+79000000000"
              className="btn-cta"
              style={{
                background: "var(--primary)",
                color: "white",
                fontSize: "18px",
                padding: "16px 40px",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Позвонить и заказать
            </a>
          </div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            @ОБЕДБРАТ
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/files/70e7e015-9c52-4657-b201-6fa9a7460b38.jpg"
                alt="Сэндвич с курицей"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/files/7b98ef7d-f2d7-40fa-b5fb-a62995db33dd.jpg"
                alt="Клаб-сэндвич"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/d38b36c1-381d-4094-8ded-0a957a499c91/files/becf1ab9-fedd-4bec-9c61-ba1852f7d8ac.jpg"
                alt="Набор"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/d38b36c1-381d-4094-8ded-0a957a499c91/files/3f3fb4ad-42eb-4d2e-8da8-8e9992934f32.jpg"
                alt="Атмосфера"
              />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <img
              src="https://cdn.poehali.dev/files/7b98ef7d-f2d7-40fa-b5fb-a62995db33dd.jpg"
              alt="ОбедБрат"
              style={{ width: "40px", height: "40px", borderRadius: "50%", border: "2px solid var(--dark)" }}
            />
            ОБЕДБРАТ
          </div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Домашняя еда с доставкой. Сэндвичи, картошка, морс — набор за 650 ₽. Оплата наличными или переводом.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li>
              <a href="#menu" style={{ color: "inherit", textDecoration: "none" }}>
                Меню
              </a>
            </li>
            <li>
              <a href="#about" style={{ color: "inherit", textDecoration: "none" }}>
                О нас
              </a>
            </li>
            <li>
              <a href="#order" style={{ color: "inherit", textDecoration: "none" }}>
                Заказать
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Часы работы</h4>
          <ul>
            <li>Пн-Пт: 08:00 — 14:00</li>
            <li>Сб: 09:00 — 13:00</li>
            <li>Вс: Выходной</li>
          </ul>
        </div>
        <div className="footer-bottom">
          <span>2025 ОБЕДБРАТ</span>
          <span>ЕДА КАК ДОМА</span>
          <span>Доставка · Наличные · Перевод</span>
        </div>
      </footer>
    </>
  );
}

import { useState } from "react";
import Tabs from "../components/layout/Tabs";
import Accordion from "../components/Accordion";
import faq1 from "../assets/images/faq1.svg";
import faq2 from "../assets/images/faq2.svg";
import faq3 from "../assets/images/faq3.svg";
import { Link } from "react-router-dom";
function Faq() {
  const [activeTab, setActiveTab] = useState("Popüler Sorular");
  const [openAccordion, setOpenAccordion] = useState("popular-1");

  // Function to handle accordion toggle
  const toggleAccordion = (accordionId) => {
    setOpenAccordion(openAccordion === accordionId ? null : accordionId);
  };
  return (
    <div className="bg-[rgb(246,247,250)] lg:bg-transparent">
      <div
        className="h-32 text-lg bg-[rgb(246,247,250)] text-[rgb(33,44,58)]  lg:flex items-center justify-center hidden"
        style={{
          backgroundImage: `url(${faq1}), url(${faq2}), url(${faq3})`,
          backgroundRepeat: "no-repeat, no-repeat, no-repeat",
          backgroundPosition:
            "left 57px top, left 331px top 40px, right -30px top 55px",
        }}
      >
        <h2 className="capitalize text-[20px] font-medium leading-8 text-[#505050] text-center">
          Merhaba! Size nasıl yardımcı olabiliriz?
        </h2>
      </div>
      <div className="lg:container">
        <div className="flex  space-y-10 lg:space-y-0  lg:space-x-[60px] lg:flex-nowrap flex-wrap flex-col lg:flex-row lg:mt-[40px] mb-[100px]">
          <div className="flex w-full lg:w-[32%] flex-col">
            <div className="flex items-center lg:block border-b border-[#eaebf2] lg:border-none bg-white lg:bg-[#f6f7fa] lg:py-[40px] lg:px-[25px] p-[15px] lg:space-y-4 rounded-lg gap-[12px]">
              <Tabs
                active={activeTab === "Popüler Sorular"}
                onClick={() => setActiveTab("Popüler Sorular")}
              >
                Popüler Sorular
              </Tabs>
              <Tabs
                active={activeTab === "Duyurular"}
                onClick={() => setActiveTab("Duyurular")}
              >
                Duyurular
              </Tabs>
            </div>
          </div>

          <div className="w-full lg:w-[63%] bg-white lg:bg-transparent container">
            <h2 className="text-[15px] font-medium capitalize mb-[20px] text-[#212C3A] hidden lg:block">
              <Link to="/" className="hover:text-red text-[#8D94AD]">
                Ana sayfa
              </Link>
              <span className="text-[#8D94AD]"> • </span>
              {activeTab}
            </h2>
            <h2 className="text-[22px] font-bold capitalize mb-[20px] text-[#212C3A] pt-5 lg:pt-0">
              {activeTab}
            </h2>
            {activeTab === "Popüler Sorular" && (
              <div className="flex flex-col gap-y-5">
                <Accordion
                  id="popular-1"
                  isOpen={openAccordion === "popular-1"}
                  onToggle={() => toggleAccordion("popular-1")}
                  title="İlanım neden yayınlanmadı?"
                  content={
                    <>
                      Muhtemelen ilan yerleştirme Kurallarından birine veya
                      birkaçına uymamışsınız.
                      <br />
                      Sebep, daha ayrıntılı bir şekilde ilanı yerleştirirken
                      belirttiğiniz e-posta adresinize gönderildi.
                    </>
                  }
                />
                <Accordion
                  id="popular-2"
                  isOpen={openAccordion === "popular-2"}
                  onToggle={() => toggleAccordion("popular-2")}
                  title="İlana nasıl düzeltme yapabilirim?"
                  content={
                    <>
                      İlanınızın kendi sayfasında düzeltme yapmak için:
                      <br />
                      1. Düzeltmek istediğiniz ilanınızı sitede bulun ve
                      açın.(E-postanıza gönderilen mesajda linki
                      bulabilirsiniz.)
                      <br />
                      2. İlan sayfasının altında <b>Düzenle</b> düğmesini
                      göreceksiniz. Ona tıklayın.
                      <br />
                      3. İlanı yerleştirirken size gönderilen <b>
                        PIN kodunu
                      </b>{" "}
                      girin ve düzenlemeye başlayın.
                      <br />
                      4. Gerekli düzenlemeleri yaptıktan sonra{" "}
                      <b>İlanı Güncelle</b> düğmesine tıklayın.
                      <br />
                      5. Kategorisine bağlı olarak fiyatı ve açıklamayı
                      değiştirebilir, görselleri silebilir veya ekleyebilir ve
                      diğer bazı düzenlemeleri yapabilirsiniz. Düzenleme
                      yaptıktan sonra ilanınız incelemeye gönderilecektir.
                      İnceleme <b>1 saate kadar</b> sürebilir, ancak genellikle
                      değişiklikler birkaç dakika içinde uygulanır.
                      <br />
                      Unutmayın ki,{" "}
                      <b>
                        24 saat içinde bir ilana yalnızca 2 kez düzenleme
                        yapabilirsiniz.
                      </b>
                    </>
                  }
                />
                <Accordion
                  id="popular-3"
                  isOpen={openAccordion === "popular-3"}
                  onToggle={() => toggleAccordion("popular-3")}
                  title="İlanı nasıl yerleştirebilirim?"
                  content={
                    <>
                      İlanınızı Kibcar.com sitesinin tam (masaüstü) veya mobil
                      versiyonunda, yayınlayabilirsiniz.
                      <br />
                      <b>
                        Sitenin tam veya mobil versiyonunda ilan yerleştirmek
                        için:
                      </b>
                      <br />
                      1. Tam versiyonda sağ üst köşedeki <b>Yeni ilan</b>{" "}
                      düğmesine, mobil versiyonda ise ekranın altındaki Yeni
                      ilan veya sağ üst köşedeki + düğmesine tıklayın.
                      <br />
                      2. Açılan sayfada gerekli alanları doldurarak aracınız
                      hakkında bilgileri girin. Unutmayın, bu bilgileri
                      potansiyel alıcılar görecektir.
                      <br />
                      3. İlk defa ilan veriyorsanız, ilanınızın incelenmeye
                      gönderilmesi için İletişim Bilgileri bölümünde belirtilen
                      telefon numarasını doğrulamanız gerekir.
                      <br />
                      4. Neredeyse bitti! Şimdi tek yapmanız gereken{" "}
                      <b>"İlanı Yerleştir"</b> düğmesine tıklamak !
                    </>
                  }
                />
                <Accordion
                  id="popular-4"
                  isOpen={openAccordion === "popular-4"}
                  onToggle={() => toggleAccordion("popular-4")}
                  title="İlanı nasıl silebilirim?"
                  content={
                    <>
                      İlanınızı sayfadan silmek için:
                      <br />
                      1. Silmek istediğiniz ilanınızı sitede bulun ve açın.
                      <br />
                      2. İlanı yerleştirirken size gönderilen <b>
                        PIN kodunu
                      </b>{" "}
                      girin ve onaylayın.
                      <br />
                      3. İlan sayfasının altında <b>İlanı Sil</b> düğmesini
                      göreceksiniz. Ona tıklayın.
                      <br />
                      4. Eğer PIN kodunuzu kaybettiyseniz, ilanı oluştururken
                      kullandığınız e-posta adresinize tekrardan ücretsiz olarak
                      sıfırlama isteye bilirsiniz.
                      <br />
                      5. Eğer e-posta hesabınıza erişiminiz yoksa, PIN kodunu{" "}
                      <b>SMS</b> yolu ile sıfırlamanız gerekir, bu işlem{" "}
                      <b>100 Türk Lirası</b> ücrete tabidir ve günde en fazla{" "}
                      <b>iki kez</b> PIN kodu sıfırlanabilir.
                      <br />
                      Bu şekilde ilanınızı kolayca silebilirsiniz.
                    </>
                  }
                />
              </div>
            )}
            {activeTab === "Duyurular" && (
              <div className="flex flex-col gap-y-5">
                <Accordion
                  id="popular-1"
                  isOpen={openAccordion === "popular-1"}
                  onToggle={() => toggleAccordion("popular-1")}
                  title="Sizinle nasıl iletişime geçebilirim?"
                  content="Soru için içerik 1"
                />
                <Accordion
                  id="popular-2"
                  isOpen={openAccordion === "popular-2"}
                  onToggle={() => toggleAccordion("popular-2")}
                  title="Sizinle nasıl iletişime geçebilirim?"
                  content="Soru için içerik 2"
                />
                <Accordion
                  id="popular-3"
                  isOpen={openAccordion === "popular-3"}
                  onToggle={() => toggleAccordion("popular-3")}
                  title="Sizinle nasıl iletişime geçebilirim?"
                  content="Soru için içerik 2"
                />
                <Accordion
                  id="popular-4"
                  isOpen={openAccordion === "popular-4"}
                  onToggle={() => toggleAccordion("popular-4")}
                  title="Sizinle nasıl iletişime geçebilirim?"
                  content="Soru için içerik 2"
                />
                {/* ... More accordions ... */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;

import { useState } from "react";

function PaidServices() {
  const [width] = useState(window.innerWidth);
  const showMobileCom = width < 971;
  return (
    <div className="">
      <div className={`${!showMobileCom ? "container" : ""}`}>
        <div
          className={`" ${
            !showMobileCom
              ? "border-y border-[#eaebf2] bg-[#f1f3f7] px-[40px] py-[20px]"
              : "py-[12px] px-[10px]"
          } `}
        >
          <h2
            className={`uppercase ${
              !showMobileCom
                ? "text-[16px] font-bold leading-8 text-primary"
                : "text-[14px] font-medium text-primary"
            } `}
          >
            Ücretli Hizmetler
          </h2>
        </div>
        <div className="px-5 text-[12px] md:text-[14px] leading-[28px]">
          {/* Posting of Advertisements */}
          <section className="text-[#739e5b] mt-[20px] mb-[60px] leading-8">
            <p className="text-[14px]">
              ــ{" "}
              <a className="text-base underline" href="#bumb">
                "Arama Sonuçlarında Yükselt" hizmeti
              </a>
            </p>
            <p className="text-[14px]">
              ــ{" "}
              <a className="text-base underline" href="#vip">
                "VIP" hizmeti
              </a>
            </p>
            <p className="text-[14px]">
              ــ{" "}
              <a className="text-base underline" href="#featured">
                "Premium" hizmeti
              </a>
            </p>
            <p className="text-[14px]">
              ــ{" "}
              <a className="text-base underline" href="#limits">
                "İlan Limiti" hizmeti
              </a>
            </p>
            <p className="text-[14px]">
              ــ{" "}
              <a className="text-base underline" href="#relist">
                "İlanı Tekrar Yayınla" hizmeti
              </a>
            </p>
            <p className="text-[14px]">
              ــ{" "}
              <a className="text-base underline" href="#sms-pin">
                "SMS PIN"
              </a>
            </p>
            <p className="text-[14px]">
              ــ{" "}
              <a className="text-base underline" href="#recovery">
                "İlan Yenileme" hizmeti
              </a>
            </p>
          </section>
          <section className="mb-[60px]" id="bumb">
            <h2 className="my-[10px] font-bold text-[21px]">
              "Arama Sonuçlarında Yükselt" Hizmeti
            </h2>
            <p className="my-4">
              "Arama Sonuçlarında Yükselt" ücretli bir tanıtım hizmetidir. Bu
              hizmet, ilanınızı benzer diğer ilanların üzerinde sıralar. Sonuç
              olarak, ilanınızı daha fazla potansiyel alıcı görür ve satış
              işlemini daha hızlı yaparsınız.
            </p>

            <h4 className="my-[10px] font-bold">
              "Arama Sonuçlarında Yükselt" hizmeti nasıl çalışır?
            </h4>
            <p className="my-4">
              kibcar.com web sitesinde her gün binlerce yeni ilan yayınlanıyor.
              Bu ilanlar arama sonuçlarında farklı şekilde sıralanır. Her ilanın
              pozisyonu birçok faktöre bağlıdır. Örneğin, ilanın yayınlanma
              tarihi, arama sorgusuna uygunluğu ve uygulanan hizmetler önemli
              bir rol oynar. İlanlar tüm bu parametrelere göre sıralanır.
            </p>
            <p className="my-4">
              "Arama Sonuçlarında Yükselt": Bu hizmet, ilanın tarihini
              güncelleyerek onu en son yayınlanmış gibi gösterir ve diğer
              ücretsiz ilanların üstüne çıkarır. Ayrıca, bu hizmet sayesinde
              ilanın arama sonuçlarında diğer benzer ilanlardan daha yüksek
              sıralanma önceliği olur.
            </p>
            <p className="my-4">
              İlan için en uygun pozisyonlar, kullanıcıların daha fazla dikkat
              ettiği yerlerdir ve bu her zaman arama sonuçlarının ilk satırları
              değildir. Bu nedenle, "Arama Sonuçlarında Yükselt" hizmeti, ilanın
              her zaman arama sonuçlarının ilk satırında olacağını garanti
              etmez.
            </p>
            <p className="my-4">
              İlanınızın kaliteli ve arama sorgusuna uygun olduğundan emin
              olmalısınız. Örneğin, iki ilana da aynı hizmet uygulanmışsa, daha
              kaliteli olan ilan daha üst sıralarda yer alacaktır.
            </p>

            <h4 className="my-[10px] font-bold">Hizmetin maliyeti nedir?</h4>
            <p className="my-4">- 3 USD – 1 defa yükseltme </p>
            <p className="my-4">
              - 6 USD – 3 defa yükseltme (24 saat içinde 1 defa)
            </p>
            <p className="my-4">
              - 9 USD – 5 defa yükseltme (24 saat içinde 1 defa)
            </p>
            <p className="my-4">
              - 15 USD – 10 defa yükseltme (24 saat içinde 1 defa)
            </p>

            <h4 className="my-[10px] font-bold">Hizmet ne zaman aktif olur?</h4>
            <p className="my-4">
              Hizmet, ilanın yayınlanma tarihi güncellenir güncellenmez aktif
              olur.
            </p>
            <p className="my-4">
              <strong>BONUS:</strong> Yeni bir ilan yayınlandığında, ilan
              ücretsiz olarak arama sonuçlarının en üstüne çıkar.
            </p>

            <h4 className="my-[10px] font-bold">
              Hizmet, ilanın süresini etkiler mi?
            </h4>
            <p className="my-4">
              "Arama Sonuçlarında Yükselt" hizmeti bir defaya mahsus bir
              hizmettir ve site üzerinde aktif olan bir ilanın etkinlik süresini
              etkilemez. Ancak, ilan süresinin hizmet süresinden önce sona
              erdiği durumlar istisnadır.
            </p>
            <p className="my-4">
              <strong>Örnek:</strong>
            </p>
            <p className="my-4">
              - 1 Ağustos: Ücretsiz bir ilan verdiniz - 30 gün boyunca aktiftir
              (1 Ağustos - 30 Ağustos).
            </p>
            <p className="my-4">
              - 5 Ağustos: İlanın süresinin dolmasına 25 gün kaldı (5 Ağustos -
              30 Ağustos). Eğer "Arama Sonuçlarında Yükselt" hizmetini
              etkinleştirirseniz, ilanın süresi değişmez.
            </p>
            <p className="my-4">
              - 31 Ağustos: İlan süresi doldu (1 Ağustos - 30 Ağustos). Eğer
              "Arama Sonuçlarında Yükselt" hizmetini etkinleştirirseniz, hizmet
              uygulandıktan sonra ilan yeniden aktif hale gelir ve aktif süresi
              3 gün uzatılır. Eğer "3 defa Arama Yükseltme" hizmetini
              kullanırsanız, ilan 3 defa sıfırlanarak her 24 saatte bir
              yükseltilecek ve aktif süresi 3 gün uzatılacaktır. Eğer "5 defa
              Arama Yükseltme" hizmetini kullanırsanız, ilan 5 defa sıfırlanarak
              her 24 saatte bir yükseltilecek ve aktif süresi 5 gün
              uzatılacaktır.
            </p>

            <h4 className="my-[10px] font-bold">
              Hizmeti birden fazla defa uygularsam ne olur?
            </h4>
            <p className="my-4">
              Eğer "Arama Sonuçlarında Yükselt" hizmetini birden fazla kez satın
              alırsanız, her sipariş ödemenin hemen ardından uygulanacaktır.
              Hizmet, 5 dakikalık aralıklarla kullanılabilir.
            </p>
            <p className="my-4">
              <strong>Örnek:</strong>
            </p>
            <p className="my-4">
              Pazartesi günü ilanınıza 5 defa "Arama Sonuçlarında Yükselt"
              hizmetini uygularsınız. Bu durumda, ilan aynı gün içerisinde ödeme
              yapıldıktan hemen sonra 5 defa üst sıralara çıkarılır.
            </p>
          </section>
          <section className="mb-[60px]" id="vip">
            <h2 className="my-[10px] font-bold text-[21px]"> "VIP" Hizmeti</h2>
            <p className="my-4">
              "VIP" ücretli bir tanıtım hizmetidir. Bu hizmet ile ilan, rastgele
              bir sırayla özel bir VIP bloğunda yer alır ve daha fazla dikkat
              çeker. Bu hizmetin uygulandığı ilanların kartlarında sağ alt
              köşede "V" işareti görülür.
            </p>

            <h4 className="my-[10px] font-bold">Hizmetin maliyeti nedir?</h4>
            <p className="my-4">- 5 USD – 1 gün</p>
            <p className="my-4">- 15 USD – 5 gün</p>
            <p className="my-4">- 25 USD – 15 gün</p>
            <p className="my-4">- 40 USD – 30 gün</p>

            <h4 className="my-[10px] font-bold">Hizmet ne zaman aktif olur?</h4>
            <p className="my-4">
              Hizmet, ödeme yapıldıktan hemen sonra aktif hale gelir. Satın
              alınan gün sayısına bağlı olarak ilan 30 güne kadar VIP bloğunda
              yer alabilir.
            </p>
            <p className="my-4">
              <strong>BONUS:</strong> "Arama Sonuçlarında Yükselt" hizmeti, bu
              hizmetin etkinleştirildiği andan itibaren gün boyunca ilana 1 kez
              uygulanır.
            </p>

            <h4 className="my-[10px] font-bold">
              İlanımı VIP bloğunda göremiyorum
            </h4>
            <p className="my-4">
              İlanlar "VIP ilanlar" bloğunda rastgele sırayla sayfanın üst
              sıralarında yer alır.
            </p>
            <p className="my-4">
              Masaüstü versiyonun arama sonuçları sayfasındaki VIP blokta aynı
              anda en fazla 8 ilan (hepsini göster seçeneği ile) görüntülenir.
            </p>
            <p className="my-4">
              Mobil versiyonun arama sonuçları sayfasındaki VIP blokta aynı anda
              en fazla 4 ilan (hepsini göster seçeneği ile) görüntülenir.
            </p>
            <p className="my-4">
              Mobil uygulamadaki VIP blok, her 24 ilanda bir tekrarlanır ve
              blokta 2 ilan bulunur (sınırsız kaydırma seçeneği ile).
            </p>
            <p className="my-4">
              Her sayfa yenileme sırasında, sistem VIP ilanları öyle bir şekilde
              seçer ki aynı pakete sahip olan ilanlar yaklaşık olarak aynı
              sayıda görüntülenme alır. İlanınızı göremeseniz bile diğer
              ziyaretçilerin o anda ilanınızı gördüğünden emin olabilirsiniz.
            </p>
            <p className="my-4">
              Ayrıca, VIP blok, ilanın ait olduğu kategori sayfasında, bölüm
              sayfasında ve arama sonuçlarında en üst pozisyonlarda gösterilir.
            </p>

            <h4 className="my-[10px] font-bold">
              Hizmet, ilanın süresini etkiler mi?
            </h4>
            <p className="my-4">
              Eğer ilan, hizmet süresinden önce sona ererse etkili olur. "VIP"
              hizmetinin minimum süresi 1 gündür ve ilanın standart etkinlik
              süresi hizmet süresinden önce sona ererse otomatik olarak
              uzatılır.
            </p>
            <p className="my-4">
              Eğer ilan zaten süresi dolmuşsa, ilan bu hizmetin uygulanmasından
              itibaren hizmet süresine eşit bir süre için yenilenir.
            </p>
            <p className="my-4">
              <strong>Örnek:</strong>
            </p>
            <p className="my-4">
              - 1 Ağustos: Ücretsiz bir ilan verdiniz - 30 gün boyunca aktiftir
              (1 Ağustos - 30 Ağustos).
            </p>
            <p className="my-4">
              - 5 Ağustos: İlanın süresinin dolmasına 25 gün kaldı (5 Ağustos -
              30 Ağustos). Eğer "VIP" hizmetini etkinleştirirseniz, ilanın
              süresi değişmez.
            </p>
            <p className="my-4">
              - 27 Ağustos: İlanın süresinin dolmasına 3 gün kaldı (27 Ağustos -
              30 Ağustos). Eğer 5 günlük "VIP" hizmetini etkinleştirirseniz,
              ilanın aktif süresi 2 gün uzatılacak ve hizmet 5 gün boyunca etkin
              olacaktır.
            </p>
            <p className="my-4">
              - 31 Ağustos: İlan süresi dolmuş durumda (1 Ağustos - 30 Ağustos).
              Eğer "VIP" hizmetini etkinleştirirseniz, ilan yenilenecek ve aktif
              süresi 5 gün uzatılacaktır.
            </p>

            <h4 className="my-[10px] font-bold">
              Hizmeti birden fazla defa uygularsam ne olur?
            </h4>
            <p className="my-4">
              VIP ayarlarının etkisi daha uzun süre devam eder. Eğer 5 günlük
              "VIP" hizmetini iki kez uygularsanız, VIP ayarları 10 gün boyunca
              geçerli olacaktır. Bu süre boyunca, hizmetin etkinleştirildiği
              andan itibaren her gün bonus promosyonlar gerçekleştirilecektir.
            </p>

            <h4 className="my-[10px] font-bold">
              İlan üzerinde değişiklik yaptıktan sonra ilanın VIP blokta kalmaya
              devam eder mi?
            </h4>
            <p className="my-4">
              Evet, bu değişiklikler sitenin kurallarını ihlal etmediği sürece
              VIP blokta kalır.
            </p>
            <p className="my-4">
              <strong>ÖNERİ:</strong> Siteye yerleştirilen her ilanın
              doğrulanması gerekmektedir ve bu biraz zaman alabilir. Ücretli
              hizmetleri kullanmadan önce acele etmeyin ve kurallarımızı
              inceleyin.
            </p>
          </section>
          <section className="mb-[60px]" id="featured">
            <h2 className="my-[10px] font-bold text-[21px]">
              "Premium" Hizmeti
            </h2>
            <p className="my-4">
              "Premium" ücretli bir tanıtım hizmetidir. "Premium" hizmetinin
              uygulandığı ilanlar, sitenin ana sayfasında ayrılmış özel bir
              blokta görünür ve aktif oldukları süre boyunca orada kalırlar. Tüm
              bu tür ilanları aynı anda tek bir sayfada görebilirsiniz. Bu
              hizmetin uygulandığı ilanların kartlarında sağ alt köşede taç
              simgesi görünür.
            </p>

            <h4 className="my-[10px] font-bold">Hizmetin maliyeti nedir?</h4>
            <p className="my-4">- 7 USD – 1 gün</p>
            <p className="my-4">- 20 USD – 5 gün</p>
            <p className="my-4">- 45 USD – 15 gün</p>
            <p className="my-4">- 60 USD – 30 gün</p>

            <h4 className="my-[10px] font-bold">Hizmet ne zaman aktif olur?</h4>
            <p className="my-4">
              Hizmet, ödeme yapıldıktan hemen sonra aktif hale gelir. Satın
              alınan gün sayısına bağlı olarak ilan 30 güne kadar Premium blokta
              yer alabilir.
            </p>
            <p className="my-4">
              <strong>BONUS:</strong> "Arama Sonuçlarında Yükselt" ve "VIP"
              hizmetleri, bu hizmetin etkinleştirildiği andan itibaren gün
              boyunca ilana 1 kez uygulanır ve bu süre hizmet süresi boyunca
              geçerlidir.
            </p>

            <h4 className="my-[10px] font-bold">
              Premium blokta ilanımı göremiyorum
            </h4>
            <p className="my-4">
              İlan, ana sayfadaki Premium blokta Premium ayarlarının sona
              ermesine kadar yer alır. İlanlar Premium blokta hizmetin tanıtım
              tarihine göre (en yeniden en eskiye doğru) sıralanır.
            </p>
            <p className="my-4">
              "Arama Sonuçlarında Yükselt" hizmeti, Premium bloktaki bir ilana
              uygulandığında, ilan bu bloktaki diğer ilanlara göre daha üst bir
              konuma taşınır.
            </p>

            <h4 className="my-[10px] font-bold">
              Hizmet, ilanın süresini etkiler mi?
            </h4>
            <p className="my-4">
              Eğer ilan, hizmet süresinden önce sona ererse etkili olur.
              "Premium" hizmetinin minimum süresi 1 gündür ve ilanın standart
              etkinlik süresi hizmet süresinden önce sona ererse otomatik olarak
              hizmetin uygulandığı andan itibaren 24 saatlik bir süre uzatılır.
            </p>
            <p className="my-4">
              Eğer ilanın süresi zaten dolmuşsa, ilan bu hizmetin
              uygulanmasından itibaren hizmet süresine eşit bir süre için
              yenilenir.
            </p>
            <p className="my-4">
              <strong>Örnek:</strong>
            </p>
            <p className="my-4">
              - 1 Ağustos, 18:00: Ücretsiz bir ilan verdiniz - 30 gün boyunca
              aktiftir (1 Ağustos - 30 Ağustos).
            </p>
            <p className="my-4">
              - 5 Ağustos, 18:00: İlanın süresinin dolmasına 25 gün kaldı (5
              Ağustos - 30 Ağustos). Eğer 5 günlük "Premium" hizmetini
              etkinleştirirseniz, ilanın süresi değişmez.
            </p>
            <p className="my-4">
              - 29 Ağustos, 18:00: İlanın süresinin dolmasına 1 gün kaldı (29
              Ağustos - 30 Ağustos). Eğer 5 günlük "Premium" hizmetini 15:00'te
              etkinleştirirseniz, ilanın aktif süresi 4 gün uzatılır, böylece
              hizmet 5 gün boyunca aktif olur (hem hizmet hem de ilan 3 Eylül,
              15:00'te sona erer).
            </p>
            <p className="my-4">
              - 31 Ağustos: İlan süresi dolmuş durumda (1 Ağustos - 30 Ağustos).
              Eğer 5 günlük "Premium" hizmetini etkinleştirirseniz, ilan
              yenilenecek ve aktif süresi 5 gün uzatılacaktır.
            </p>

            <h4 className="my-[10px] font-bold">
              Hizmeti birden fazla defa uygularsam ne olur?
            </h4>
            <p className="my-4">
              Premium ayarlarının etkisi daha uzun süre devam eder. Eğer 5
              günlük "Premium" hizmetini iki kez uygularsanız, Premium ayarları
              10 gün boyunca geçerli olacaktır. Bu süre boyunca, hizmetin
              etkinleştirildiği andan itibaren her gün bonus promosyonlar
              gerçekleştirilecektir.
            </p>

            <h4 className="my-[10px] font-bold">
              İlan üzerinde değişiklik yaptıktan sonra ilanın Premium blokta
              kalmaya devam eder mi?
            </h4>
            <p className="my-4">
              Evet, bu değişiklikler sitenin kurallarını ihlal etmediği sürece
              Premium blokta kalır.
            </p>
            <p className="my-4">
              <strong>ÖNERİ:</strong> Siteye yerleştirilen her ilanın
              doğrulanması gerekmektedir ve bu biraz zaman alabilir. Ücretli
              hizmetleri kullanmadan önce acele etmeyin ve kurallarımızı
              inceleyin.
            </p>
          </section>
          <section className="mb-[60px]" id="limits">
            <h2 className="my-[10px] font-bold text-[21px]">
              "İlan Limiti" Hizmeti
            </h2>
            <p className="my-4">
              "İlan Limiti", bireysel satıcıların 30 günlük bir dönemde ücretsiz
              olarak yerleştirebilecekleri ilan sayısını ifade eder. Limit
              aşıldığında, ilan yerleştirme ücretli olur.
            </p>
            <p className="my-4">
              Profesyonel satıcılar için ücretsiz ilan limiti yoktur. Ticaretle
              uğraşan ve ek gelir elde eden kişiler, kibcar.com’da tüm
              ilanlarını ücretli olarak yerleştirirler.
            </p>

            <h4 className="my-[10px] font-bold">
              Hangi ilanlar limit kullanımına dahil edilir?
            </h4>
            <p className="my-4">
              Aşağıdaki durumlarda ilan limiti 1 ilan azaltılır:
            </p>
            <ul className="list-disc ml-8 my-4">
              <li>- limit kullanılarak bir ilan yerleştirildiğinde;</li>
              <li>- ilan yerleştirildikten sonra iptal edildiğinde;</li>
              <li>
                - ilan yinelenen ilan nedeniyle engellendiğinde veya kabul
                edilmediğinde;
              </li>
              <li>- siteden kaldırılan bir ilan geri yüklendiğinde.</li>
            </ul>

            <h4 className="my-[10px] font-bold">
              Bir ilanı nasıl ücretsiz olarak yayınlarım?
            </h4>
            <p className="my-4">
              30 günde bir ilan yayınlayın. Ücretsiz ilan yerleştirme avantajını
              kullandıysanız ve bir veya daha fazla ücretli ilan
              yerleştirirseniz, ilan yenileme günü aynı kalır.
            </p>
            <p className="my-4">
              <strong>Örnek:</strong>
            </p>
            <p className="my-4">
              Limit – 30 gün içinde 1 ücretsiz ilan. 1 Mayıs’ta ilan
              yayınlarsınız. Limit kullanıldı. Bir sonraki ücretsiz ilanınızı 31
              Mayıs’ta yerleştirebilirsiniz. 5 Mayıs’ta ücretli bir ilan
              yerleştirirseniz, limit sıfırlanma tarihi değişmez ve bir sonraki
              ücretsiz ilan yine 31 Mayıs’ta mevcut olur.
            </p>

            <h4 className="my-[10px] font-bold">
              Neden ücretli ilan yerleştirme uygulandı?
            </h4>
            <p className="my-4">
              Ücretli ilan yerleştirme sayesinde, kibcar.com sitesinde yinelenen
              ve şüpheli ilanların sayısını azaltıyoruz ve dolandırıcıların
              faaliyetlerini sınırlıyoruz. Aynı zamanda, dürüst satıcılarımızın
              ilanlarının görüntülenme sayısı artıyor ve anlaşmalar hızlanıyor.
              Alıcılar için, benzersiz tekliflerle araç bulmak daha kolay hale
              geliyor.
            </p>
            <p className="my-4">
              Ücretli ilan yerleştirme, esas olarak kibcar.com’ı düzenli gelir
              kaynağı olarak kullanan iş adamları ve şirketler için
              tasarlanmıştır. Bireysel kişiler ilanlarını ücretsiz olarak
              yerleştirirler.
            </p>

            <h4 className="my-[10px] font-bold">Hangi ilanlar ücretlidir?</h4>
            <p className="my-4">
              Ücretsiz ilan limiti dolduğunda ilanlar ücretli hale gelir.
            </p>

            <h4 className="my-[10px] font-bold">Hizmetin maliyeti nedir?</h4>
            <p className="my-4">
              - 12 USD – Ücretsiz ilan limitini aşan bireysel satıcılar için
            </p>
            <p className="my-4">
              - 30 USD – İş hesabı ile site üzerinde faaliyet gösteren satıcılar
              için
            </p>
          </section>
          <section className="mb-[60px]" id="relist">
            <h2 className="my-[10px] font-bold text-[21px]">
              "Tekrar İlan" Hizmeti
            </h2>
            <p className="my-4">
              "Tekrar İlan", 90 gün içinde tekrarlanan ve benzer ilanların
              (marka/model, renk) ücretli olarak yerleştirilmesidir.
            </p>
            <p className="my-4">
              Bir araç, 90 gün içinde yalnızca bir kez ücretsiz olarak satışa
              çıkarılabilir.
            </p>

            <h4 className="my-[10px] font-bold">Hizmetin maliyeti nedir?</h4>
            <p className="my-4">- 12 USD – Bireysel satıcılar için</p>
            <p className="my-4">
              - 30 USD – İş hesabı ile site üzerinde faaliyet gösteren satıcılar
              için
            </p>

            <h4 className="my-[10px] font-bold">
              İlanlar neden yinelenen ilanlar nedeniyle kabul edilmiyor?
            </h4>
            <p className="my-4">
              Aynı veya benzer aracı birden fazla ilanla satıyorsunuz. 90 gün
              içinde aşağıdaki durumlar yasaktır:
            </p>
            <ul className="list-disc ml-8 my-4">
              <li>
                - Aynı veya benzer (marka/model, renk) araçla yeni bir ilan
                vermek;
              </li>
              <li>
                - İlk ilanı iptal edip aynı veya benzer araç için yeni bir ilan
                vermek;
              </li>
              <li>- Bu aracı başka bir ilanın açıklamasında belirtmek; </li>
              <li>- Bu araca ait görselleri başka bir ilanda kullanmak.</li>
            </ul>

            <h4 className="my-[10px] font-bold">Aracı nasıl satabilirim? </h4>
            <p className="my-4">
              İlk ilanı kullanın. Aynı veya benzer teklif içeren her ilanı
              engelliyoruz, ancak ilk ilanı koruyoruz. Eğer iptal ettiyseniz, bu
              ilanı yeniden geri yükleyebilirsiniz. Geri yükleme ücretlidir.
            </p>
            <p className="my-4">
              Eğer açıklamada bir şey eklemeyi unuttuysanız, görselleri veya
              fiyatı değiştirmek istiyorsanız, lütfen ilk ilanı düzenleyin.
            </p>
            <p className="my-4">
              İlanınızı arama sonuçlarında daha üst sıralara yerleştirmek için
              ücretli hizmetler uygulayın.
            </p>
            <p className="my-4">
              Yinelenen ilan nedeniyle kabul edilmeyen yeni bir ilan vermek için
              "Tekrar İlan" hizmetini kullanabilirsiniz. Bu durumda, ilk ilan
              kabul edilmeyecektir.
            </p>

            <h4 className="my-[10px] font-bold">
              Neden yeniden ilan vermemeliyim?
            </h4>
            <p className="my-4">
              Yinelenen ilanlar, arama yapmayı zorlaştırır. Ürün veya hizmet
              ararken yinelenen ilanlar arasında dolaşmak zorlaşır – hangi
              ilanları daha önce gördüğünüzü, hangilerinin yinelenmiş olduğunu
              ve hangilerini açmadığınızı anlamak imkansızdır. Bu durum
              genellikle zaman kaybına yol açar ve olumsuz izlenimlere neden
              olur. Satın alma süreci çok uzun sürer veya tamamen durur.
            </p>

            <h4 className="my-[10px] font-bold">
              Aynı ilanı başka bir numaradan verebilir miyim?
            </h4>
            <p className="my-4">
              90 gün içinde aynı veya benzer ilanı başka bir numaradan
              veremezsiniz. Bu arkadaşınızın, eşinizin ya da komşunuzun numarası
              bile olsa – yine de izin verilmez.
            </p>
          </section>
          <section className="mb-[60px]" id="sms-pin">
            <h2 className="my-[10px] font-bold text-[21px]">
              {" "}
              "SMS PIN" Hizmeti
            </h2>
            <p className="my-4">
              "SMS PIN" – PIN kodunun ücretli olarak geri alınması hizmetidir.
            </p>
            <p className="my-4">
              İlana değişiklik yapmak için, ilanın verildiği sırada e-posta
              adresine gönderilen PIN kodunu girmeniz gerekmektedir. E-posta
              adresi yanlış girildiğinde veya PIN kodu kaybedildiğinde,
              ilanınızda belirtilen numaraya SMS yoluyla gönderilmesi mümkündür.
            </p>

            <h4 className="my-[10px] font-bold">Hizmetin maliyeti nedir?</h4>
            <p className="my-4">
              - 1 USD – PIN kodunun numaranıza SMS olarak gönderilmesi
            </p>

            <h4 className="my-[10px] font-bold">
              PIN kodunu başka nasıl alabilirim?
            </h4>
            <p className="my-4">
              PIN kodu, ilan verildiğinde e-posta adresine gönderilir. SMS ile
              PIN almak istemiyorsanız, lütfen ilan verirken geçerli ve doğru
              bir e-posta adresi sağlayın.
            </p>
            <p className="my-4">
              Eğer ilanın PIN kodunun yer aldığı e-postayı kaybettiyseniz veya
              sildiyseniz, kod bu e-posta adresine yeniden gönderilebilir.
            </p>
          </section>
          <section className="mb-[60px]" id="recovery">
            <h2 className="my-[10px] font-bold text-[21px]">
              "İlan Yenileme" Hizmeti
            </h2>
            <p className="my-4">
              "İlan Yenileme" ücretli bir ilan hizmetidir. Bu hizmet yalnızca
              süresi dolmuş ve iptal edilmiş ilanlara uygulanabilir. Yenileme,
              hizmetin uygulanmasından itibaren ilan süresini 30 gün uzatır.
            </p>

            <h4 className="my-[10px] font-bold">
              "İlan yenileme" nasıl çalışır?
            </h4>
            <p className="my-4">
              Sitedeki ücretsiz ilan süresi 30 gündür. Bu süre otomatik olarak
              sona ererse veya ilan iptal edilirse (yanlışlıkla veya kasıtlı
              olarak), ilan sitede inaktif ilan statüsü kazanır. İlanınızı geri
              yüklemek için, ilanınızı kişisel kabinetinizden, ilanınızı
              verdiğinizde gönderilen e-postalardan, tarayıcıda kaydedilen yer
              imlerinden veya sitede seçilenlerden bularak altındaki veya ilanın
              kartındaki "Yenile" butonuna tıklamanız gerekir.
            </p>
            <p className="my-4">
              Yenileme, ilan süresini 30 gün uzatır ve ilanı arama sonuçlarının
              en üstüne taşır.
            </p>
            <p className="my-4">
              İlanı yenilerken kullanıcı, ilanın görüntülenme sayısını
              sıfırlamak ve yayımlamadan önce düzeltmeler yapmak için yeni bir
              fırsat elde eder.
            </p>
            <p className="my-4">
              Yenileme sırasında, değiştirilen ilan doğrulamadan geçmelidir.
              İlan değişikliklerin onaylanmasından hemen sonra sitede
              yayınlanacaktır. Düzenlenmemiş ilanlar ise doğrulama yapılmadan
              sitede yayınlanır.
            </p>

            <h4 className="my-[10px] font-bold">Hizmetin maliyeti nedir?</h4>
            <p className="my-4">- 12 USD – Bireysel satıcılar için</p>
            <p className="my-4">
              - 30 USD – İş hesabı ile site üzerinde faaliyet gösteren satıcılar
              için
            </p>

            <h4 className="my-[10px] font-bold">Hizmet ne zaman aktif olur?</h4>
            <p className="my-4">
              Hizmet, ilanın yayınlanma tarihi güncellendiği anda aktif hale
              gelir.
            </p>
            <p className="my-4">
              <strong>BONUS:</strong> Yenileme sırasında ilan, arama
              sonuçlarının en üstüne ücretsiz olarak taşınır.
            </p>

            <h4 className="my-[10px] font-bold">
              Hizmet, ilanın süresini etkiler mi?
            </h4>
            <p className="my-4">
              "İlan Yenileme" hizmeti yalnızca inaktif ilanlara uygulanabilir ve
              ilan sitede aktif olduğu sürece hizmet, etkinlik süresini
              etkilemez.
            </p>
            <p className="my-4">
              Eğer bir ilan süresi dolmadan yayından kaldırılırsa, yenileme ilan
              süresini 30 gün daha uzatır.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default PaidServices;

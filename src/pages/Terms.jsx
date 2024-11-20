import { useState } from "react";

function Terms() {
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
            Kullanıcı Sözleşmesi
          </h2>
        </div>
        <div className="px-5 text-[14px] md:text-base leading-[26px]">
          {/* Posting of Advertisements */}
          <section className="my-[10px]">
            <h2 className="font-bold my-[10px]">1. Genel Şartlar</h2>
            <p className="my-[10px]">
              <strong>1.1.</strong> Bu Sözleşme,{" "}
              <a href="/" className="text-link underline">
                https://kibcar.com/
              </a>{" "}
              Servisinin Kullanıcıları tarafından kullanım koşullarını belirler.
            </p>
            <p className="my-[10px]">
              <strong>1.2.</strong> Bu Kullanıcı Sözleşmesi'nin amaçları
              doğrultusunda, aşağıda belirtilen terimler ve tanımlar şu şekilde
              anlaşılacaktır:
            </p>
            <p className="my-[10px]">
              <strong>1.2.1.</strong>Servis — İnternet'te{" "}
              <a href="/" className="text-link underline">
                https://kibcar.com/
              </a>{" "}
              adresinde bulunan internet kaynağı (site), farklı işletim
              sistemleri bazında siteye yapılan eklemeler ve diğer hizmetler,
              ayrıca yazılım, sitenin ve diğer hizmetlerin tasarımı (grafik
              tasarım), veri tabanı, hizmetlerin herhangi bir bölümü (yarı
              bölümleri) ve hizmetlerde Yönetim ve Kullanıcılar tarafından
              yayınlanan bilgileri içerir.
            </p>
            <p className="my-[10px]">
              <strong>1.2.2.</strong> Yönetim — Servisin yönetimi, Azerbaycan
              Cumhuriyeti yasalarına göre kurulmuş ve kayıtlı olan "DIGITAL
              CLASSIFIEDS LLC" Şirketi (Vergi Kimlik Numarası: 1405631661)
              tarafından gerçekleştirilir. Servise ait tüm mülkiyet hakları
              münhasıran Şirkete aittir.
            </p>
            <p className="my-[10px]">
              <strong>1.2.3.</strong> Kullanıcı — bu sözleşmenin koşullarını
              kabul eden ve Servisin hizmetlerini kullanan, yasal yetkiye sahip
              herhangi bir kişidir.
            </p>
            <p className="my-[10px]">
              <strong>1.2.4.</strong> Kişisel Hesap — Kullanıcının belirlediği
              ve oluşturduğu bilgilerin ve ayarların toplandığı alandır. Her
              Kullanıcının yalnızca bir Kişisel Hesaba sahip olma hakkı vardır.
            </p>
            <p className="my-[10px]">
              <strong>1.2.5.</strong> Kullanıcı Hesabı — Kullanıcıya ait ve
              yalnızca kibcar.com sitesi üzerinden yapılan ödemeler için
              kullanılabilecek bakiye hesaplama sistemidir.
            </p>
            <p className="my-[10px]">
              <strong>1.2.6.</strong> Kullanıcının kişisel bilgileri — Kullanıcı
              hakkında, Servisin kullanım sürecinde otomatik olarak Yönetim’e
              iletilen bilgiler; IP adresi, çerez bilgileri, Kullanıcının
              tarayıcısı hakkında bilgiler gibi kaydedilen veya Servisi
              kullanırken sağlanan her türlü bilgiyi kapsar.
            </p>
            <p className="my-[10px]">
              <strong>1.2.7.</strong> Bilgi — Servis üzerinde Kullanıcı veya
              Yönetim tarafından yayınlanan herhangi bir bilgidir.
            </p>
            <p className="my-[10px]">
              <strong>1.2.8.</strong> Spam — Alıcılar tarafından istenmeyen veya
              onaylanmamış reklamlar, bilgiler, promosyonlar veya başka türde
              toplu gönderimlerdir.
            </p>
            <p className="my-[10px]">
              <strong>1.2.9.</strong> Hizmet Paketi — ticari faaliyet gösteren
              Kullanıcılar için özel olarak oluşturulmuş, ticari olarak
              avantajlı hizmetler/bonuslar/indirimler/ilanlar bütünü. Paket
              satın alındığında Kullanıcı bazı avantajlar elde eder. Hizmet
              paketinin aktive edilmesinden sonra ödenen tutar iade edilmez.
            </p>
            <p className="my-[10px]">
              <strong>1.2.10.</strong> İndirim — İlanların daha çok görünürlük
              kazanması için uygulanan ücretli hizmetlerin fiyatlarında yapılan
              indirimlerdir.
            </p>
            <p className="my-[10px]">
              <strong>1.2.11.</strong> Bu Sözleşmenin Tarafları — Yönetim ve
              Kullanıcıdır.
            </p>
            <p className="my-[10px]">
              <strong>1.3.</strong> Bu Kullanıcı Sözleşmesinde kullanılan ve
              "Terimler ve Tanımlar" bölümünde belirtilmeyen tüm terimler ve
              kavramlar, Kullanıcı Sözleşmesi metninden doğan anlamlarına göre
              yorumlanacaktır. Kullanıcı Sözleşmesinde kullanılan herhangi bir
              terimin veya tanımın yorumlanması konusunda ortaya çıkabilecek
              anlaşmazlıklarda Yönetim tarafından belirlenen yorum geçerli
              olacaktır.
            </p>
            <p className="my-[10px]">
              <strong>1.4.</strong> Servis hizmetlerinin ve içeriklerinin
              kullanımı, yürürlükteki yasalar ile bu Sözleşme tarafından
              düzenlenir.
            </p>
            <p className="my-[10px]">
              <strong>1.5.</strong> Bu Sözleşme, herkese açık bir tekliftir.
            </p>
            <p className="my-[10px]">
              <strong>1.6.</strong> Servis hizmetlerini kullanarak, Kullanıcı bu
              Sözleşmeye dahil olur ve Servis kullanımına ilişkin talimatlara
              uymayı ve bu talimatların gerektirdiği yükümlülükleri kabul eder.
            </p>
            <p className="my-[10px]">
              <strong>1.7.</strong> Şirket adına Servisi kullanma durumunda,
              şirket de bu Sözleşmeyi ve şartlarını kabul etmiş sayılır.
            </p>
            <p className="my-[10px]">
              <strong>1.8.</strong> Yönetim, bu Sözleşmenin şartlarını tek
              taraflı olarak değiştirme hakkına sahiptir.
            </p>
            <p className="my-[10px]">
              <strong>1.9.</strong> Kullanıcı, bu Sözleşmenin şartlarını veya
              yapılan değişiklikleri kabul etmiyorsa, Servise erişimi bırakmalı
              ve hizmetleri kullanmayı sonlandırmalıdır.
            </p>
            <p className="my-[10px]">
              <strong>1.10.</strong> Yönetim, bu vesileyle Kullanıcılara
              Servisin hizmetleriyle ilan yerleştirme ve arama hizmetleri sunar.
            </p>
            <p className="my-[10px]">
              <strong>1.11.</strong> Belirli hizmetlerin sağlanması, özel
              kurallar ve/veya anlaşmalar ile düzenlenebilir.
            </p>
            <p className="my-[10px]">
              <strong>1.12.</strong> Kullanıcı, Servisin tüm içeriklerinin veya
              herhangi bir bölümünün reklam içerebileceğini kabul eder.
              Kullanıcı, Yönetimin bu reklamlardan sorumlu olmadığını ve
              reklamlarla ilgili herhangi bir yükümlülüğünün olmadığını kabul
              eder.
            </p>
            <p className="my-[10px]">
              <strong>1.13.</strong> Servise kayıt olmak gönüllüdür. Kayıt
              olunduğunda, Kullanıcı ek Servis hizmetlerine erişim sağlar.
              Yönetim, kayıt sırasında verilen bilgilerin doğrulanmasını ve
              gerekli belgeleri her zaman isteme hakkına sahiptir.
            </p>
            <p className="my-[10px]">
              <strong>1.14.</strong> Kullanıcı şifresini gizli tutmayı kabul
              eder. Kullanıcı, e-posta adresi ve şifresi kullanılarak yapılan
              tüm işlemlerden ve Kişisel Hesabında yapılan hareketlerden
              sorumludur. Kullanıcı, Servis hizmetlerini yalnızca kendi e-posta
              adresi ve şifresi ile kullanma hakkına sahiptir. Kullanıcı,
              Kişisel Hesabına izinsiz giriş olduğundan şüpheleniyorsa,
              şifresini değiştirme yükümlülüğündedir.
            </p>
            <p className="my-[10px]">
              <strong>1.15.</strong> Yönetim, kayıt ve/veya yetkilendirme
              sırasında Kullanıcılar tarafından sağlanan bilgilerin doğruluğunu
              kontrol etmek için özel teknik çözümler kullanma hakkına sahiptir.
            </p>
            <p className="my-[10px]">
              <strong>1.16.</strong> Yönetim, Kullanıcının gerçekten belirttiği
              kişi olduğunu veya kayıt sırasında verdiği bilgilerin doğru
              olduğunu garanti edemez.
            </p>
            <p className="my-[10px]">
              <strong>1.17.</strong> Kullanıcının, Servis üzerinde sunulan tüm
              araçları kullanarak potansiyel iş ortaklarıyla iletişim kurması
              önerilir.
            </p>
            <p className="my-[10px]">
              <strong>1.18.</strong> Yönetim, bu Sözleşme hükümlerini ihlal eden
              Kullanıcının hizmetlerine erişimi durdurma hakkını saklı tutar.
            </p>
            <p className="my-[10px]">
              <strong>1.19.</strong> Başka kişilerin haklarının ihlal edilmesi
              veya yürürlükteki yasaların ihlali durumunda Servis, Kullanıcının
              erişimini kısıtlama veya durdurma hakkına sahiptir.
            </p>
            <p className="my-[10px]">
              <strong>1.20.</strong> Erişimi durdurulan Kullanıcı, Yönetimin
              özel izni olmadan tekrar kayıt olamaz. Aynı Kullanıcı, başka bir
              Kullanıcının kayıt bilgilerini kullanarak Servise erişim
              sağlayamaz.
            </p>
          </section>

          {/* Images */}
          <section className="my-[10px]">
            <h2 className="font-bold my-[10px]">
              2. Servisin Kullanımı. İlanların Yerleştirilmesi
            </h2>
            <p className="my-[10px]">
              <strong>2.1.</strong> Yönetim, kayıtlı veya kayıtsız tüm
              Kullanıcılara Servise ilan yerleştirme hakkı tanır, bunun için
              özel bir form doldurulması gerekir.
            </p>
            <p className="my-[10px]">
              <strong>2.2.</strong> Kullanıcı, yasaların veya uluslararası hukuk
              normlarının ihlali olarak değerlendirilebilecek herhangi bir
              eylemde bulunmamayı, özellikle fikri mülkiyet, telif hakları
              ve/veya ilgili haklar alanında veya Servisin normal işleyişini
              bozabilecek herhangi bir eylemde bulunmamayı kabul eder.
            </p>
            <p className="my-[10px]">
              <strong>2.3.</strong> NV (Nakil Vasıtası) ile ilgili tüm
              anlaşmalar doğrudan Kullanıcılar arasında yapılır. Servis,
              Kullanıcılar arasında Servis üzerinden yapılan anlaşmaların bir
              tarafı veya arabulucusu değildir. Yönetim, bu tür anlaşmaları
              kontrol etmez ve bunlardan sorumlu değildir.
            </p>
            <p className="my-[10px]">
              <strong>2.4.</strong> Kullanıcının Servis üzerindeki yorumları ve
              diğer notları, yürürlükteki yasaların gereksinimlerine ve genel
              ahlak kurallarına aykırı olmamalıdır.
            </p>
            <p className="my-[10px]">
              <strong>2.5.</strong> Kullanıcı, Servis üzerindeki dış kaynaklara
              yapılan yönlendirmelerle ilgili erişim ve kullanım sorumluluğunun
              Yönetimde olmadığını kabul eder. Yönetim, ilanlarda verilen
              bilgilerin, diğer kaynaklara yapılan yönlendirmelerin veya
              ilanlarda yer alan diğer içeriklerin doğruluğundan sorumlu
              değildir.
            </p>
            <p className="my-[10px]">
              <strong>2.6.</strong> Kullanıcı, Servis üzerinde yayımladığı
              ilanlar, bilgiler ve verilerin kullanımı konusunda Yönetim’e tüm
              hakları verir. Bu haklar, küresel, süresiz, geri alınamaz,
              münhasır olmayan kullanım, dağıtım, yayınlama, toplama, işleme,
              görüntüleme, çoğaltma ve tekrarlama haklarını içerir. Bu haklar
              ücretsiz olarak Yönetim’e verilir. Kullanıcı ayrıca, Servis
              üzerindeki diğer Kullanıcılara, yayımladığı bilgilere erişim hakkı
              tanır. Kullanıcı, Serviste yayınladığı tüm materyallerin fikri
              mülkiyet haklarına sahiptir.
            </p>
            <p className="my-[10px]">
              <strong>2.7.</strong> Servis, Kullanıcı tarafından sağlanan
              bilgilerle ilgili olarak üçüncü tarafların haklarının ihlalinden
              sorumlu değildir.
            </p>
            <p className="my-[10px]">
              <strong>2.8.</strong> Kullanıcı, Servisin talimatlarına uygun
              olarak ilan yerleştirmeyi ve NV hakkındaki bilgileri doğru ve
              eksiksiz bir şekilde sağlamayı kabul eder. Yanlış veya eksik bilgi
              tespit edildiğinde, Kullanıcı ilanını düzeltmek veya eksik
              bilgileri tamamlamak zorundadır.
            </p>
            <p className="my-[10px]">
              <strong>2.9.</strong> NV ile ilgili bir ilan yayımlayarak,
              Kullanıcı, NV üzerinde belirtilen işlemleri gerçekleştirme hakkına
              sahip olduğunu onaylar.
            </p>
            <p className="my-[10px]">
              <strong>2.10.</strong> Kullanıcı, Servis üzerinde ilanlarda
              belirtilen bilgileri yayımlama hakkına sahip olduğunu, gerekli tüm
              patentler, ticari markalar, ticari sırlar, fikri mülkiyet hakları
              ve üçüncü tarafların izinleri dahil olmak üzere gerekli tüm
              lisanslara sahip olduğunu beyan eder.
            </p>
            <p className="my-[10px]">
              <strong>2.11.</strong> Servis, Kullanıcıdan, yayımlanan NV ile
              ilgili ek bilgi ve belgeler talep etme hakkına sahiptir. Yönetim,
              bu belgeler sağlanana kadar ilanı yayımlamama hakkına sahiptir.
            </p>
            <p className="my-[10px]">
              <strong>2.12.</strong> Kullanıcı, NV'yi Servis üzerinde satma
              hakkına sahiptir, ancak bu durumun özel izinlere tabi olmadığı ve
              geçerli kullanım kurallarına uyulduğu sürece geçerlidir.
            </p>
            <p className="my-[10px]">
              <strong>2.13.</strong> Servisin yüksek kalitesini sağlamak
              amacıyla, Yönetim, Kullanıcının aktif ilanlarının sayısını ve
              Servis üzerindeki işlemlerini sınırlama hakkına sahiptir.
            </p>
            <p className="my-[10px]">
              <strong>2.14.</strong> İlanda Kullanıcı tarafından verilen NV
              açıklamaları, NV'nin satış koşullarını temsil eder.
            </p>
            <p className="my-[10px]">
              <strong>2.15.</strong> Hizmetin sunulma koşulları veya NV'nin
              satış koşulları, ilan yerleştirildiği andaki ve gelecekteki
              yürürlükte olan yasalarla ve bu Sözleşme ile çelişmemelidir.
              İlanın herhangi bir koşulu yasa veya Sözleşme ile uyumlu değilse,
              bu koşullar Kullanıcı tarafından düzeltilmeli veya silinmelidir.
              Yönetim, bu tür ilanları Kullanıcıyı bilgilendirmeden düzenleme
              veya silme hakkına sahiptir.
            </p>
            <p className="my-[10px]">
              <strong>2.16.</strong> Yasaları ihlal eden, ahlaki normlara
              aykırı, hakaret içeren veya üçüncü kişilerin haklarını ihlal eden
              ilanların Serviste yayımlanması yasaktır. Kullanıcı, teklifi ile
              geçerli yasaları ve bu Sözleşme'yi ihlal etmediğinden emin
              olmalıdır.
            </p>
            <p className="my-[10px]">
              <strong>2.17.</strong> Ücretli hizmetler, ilanların bu Sözleşmenin
              ihlal edilmesi durumunda Yönetim tarafından engellenmeyeceğini
              garanti etmez. İlan yerleştirme kurallarının ihlal edilmesi
              durumunda, ücretli hizmetler için yapılan ödemeler iade edilmez.
            </p>
            <p className="my-[10px]">
              <strong>2.18.</strong> İlanlara, satış veya ürünler ve hizmetler
              hakkında bilgi içeren web sitelerine yönlendiren bağlantılar
              eklemek yasaktır.
            </p>
            <p className="my-[10px]">
              <strong>2.19.</strong> Kullanıcı, sunulan hizmetleri
              desteklememeyi ve aşağıdaki bilgileri yaymamayı kabul eder:
            </p>
            <p className="my-[10px]">
              <strong>2.19.1.</strong> Diğer ticaret platformları, çevrimiçi
              açık artırmalar veya çevrimiçi mağazalar;
            </p>
            <p className="my-[10px]">
              <strong>2.19.2.</strong> Servisteki ürün ve hizmetlerden daha
              düşük fiyatlarla ürün ve hizmetler sunan diğer servisler;
            </p>
            <p className="my-[10px]">
              <strong>2.19.3.</strong> Serviste yasaklanmış ürün ve hizmetleri
              satan diğer servisler.
            </p>
            <p className="my-[10px]">
              <strong>2.20.</strong> Kullanıcı, Yönetimin yazılı izni olmadan
              Servise erişim sağlamak için otomatik programlar kullanmamayı
              kabul eder. Yönetim'in yazılı izni olmadan ilanları yerleştiren
              otomatik bilgisayar programlarının kullanımı yasaktır.
            </p>
            <p className="my-[10px]">
              <strong>2.21.</strong> Ayrıca Kullanıcı şu taahhütleri verir:
            </p>
            <p className="my-[10px]">
              <strong>2.21.1.</strong> Servisin altyapısına aşırı yük
              bindirebilecek herhangi bir eylemde bulunmamayı;
            </p>
            <p className="my-[10px]">
              <strong>2.21.2.</strong> Yönetim’in yazılı izni olmadan Servisteki
              bilgileri kopyalamamayı, değiştirmemeyi, çoğaltmamayı ve
              yaymamayı;
            </p>
            <p className="my-[10px]">
              <strong>2.21.3.</strong> Servisin işleyişine müdahale etmemeyi
              veya Servisin otomatik sistemlerinin işleyişine zarar vermemeyi.
            </p>
            <p className="my-[10px]">
              <strong>2.22.</strong> Kullanıcı tarafından sağlanan bilgiler ve
              Servis üzerindeki hareketleri:
            </p>
            <p className="my-[10px]">
              <strong>2.22.1.</strong> Yanlış, yanıltıcı veya sahte olmamalıdır;
            </p>
            <p className="my-[10px]">
              <strong>2.22.2.</strong> Dolandırıcılık, güveni kötüye kullanma
              veya sahtecilik içermemelidir;
            </p>
            <p className="my-[10px]">
              <strong>2.22.3.</strong> Çalıntı veya sahte ürünlerle yapılan
              anlaşmalara yol açmamalıdır;
            </p>
            <p className="my-[10px]">
              <strong>2.22.4.</strong> Üçüncü kişilerin mülkiyet haklarını veya
              gizliliğini ihlal etmemelidir;
            </p>
            <p className="my-[10px]">
              <strong>2.22.5.</strong> Kişinin şerefini, itibarını veya iş
              itibarını zedeleyen bilgiler içermemelidir;
            </p>
            <p className="my-[10px]">
              <strong>2.22.6.</strong> Kimseye iftira veya tehdit içermemelidir;
            </p>
            <p className="my-[10px]">
              <strong>2.22.7.</strong> Suça teşvik veya uluslararası düşmanlığı
              kışkırtıcı olamaz;
            </p>
            <p className="my-[10px]">
              <strong>2.22.8.</strong> Terör ve aşırıcılık faaliyetlerine destek
              olmamalı veya teşvik etmemelidir;
            </p>
            <p className="my-[10px]">
              <strong>2.22.9.</strong> Müstehcen veya pornografik içerikli
              olmamalıdır;
            </p>
            <p className="my-[10px]">
              <strong>2.22.10.</strong> Bilgisayar virüsleri veya hasara yol
              açabilecek diğer yazılımlar içermemelidir;
            </p>
            <p className="my-[10px]">
              <strong>2.22.11.</strong> Üçüncü kişilerin fikri mülkiyet
              haklarını veya diğer haklarını ihlal etmemelidir.
            </p>
            <p className="my-[10px]">
              <strong>2.23.</strong> Servis üzerinde yasaları ihlal eden
              herhangi bir ilan yerleştirmek veya anlaşmalar yapmak yasaktır.
            </p>
            <p className="my-[10px]">
              <strong>2.24.</strong> Yönetim, NV hakkında ilan yayımlama
              sırasında Kullanıcı tarafından belirtilen bilgileri kullanarak bu
              NV'yi reklam etme hakkına sahiptir.
            </p>
            <p className="my-[10px]">
              <strong>2.25.</strong> Yönetim, ilanların görüntülenme sürelerini
              değiştirme, askıya alma veya uzatma hakkına sahiptir.
            </p>
            <p className="my-[10px]">
              <strong>2.26.</strong> Yönetim, bu Sözleşmenin kurallarını veya
              yasaları ihlal eden nedenlerle ilanları kaldırma hakkına sahiptir.
            </p>
            <p className="my-[10px]">
              <strong>2.27.</strong> Yönetim, ilanlara düzenleme yapma, farklı
              kategorilere taşıma veya diğer düzenlemeleri yapma hakkına
              sahiptir.
            </p>
            <p className="my-[10px]">
              <strong>2.28.</strong> Yönetim, ilanları yayımlamayı reddetme
              hakkına sahiptir.
            </p>
            <p className="my-[10px]">
              <strong>2.29.</strong> İlan düzenleme gereksinimleri, Servis
              üzerindeki "
              <a href="/rules" className="text-link underline">
                Site Kuralları
              </a>
              " bölümünde belirtilmiştir.
            </p>
            <p className="my-[10px]">
              <strong>2.30.</strong> Kullanıcı, ilanların içeriğinden tamamen
              sorumludur.
            </p>
          </section>

          {/* Price */}
          <section className="my-[10px]">
            <h2 className="font-bold my-[10px]">3. Ücretli Hizmetler</h2>
            <p className="my-[10px]">
              <strong>3.1.</strong> Kullanıcılar Servis üzerinde ücretli
              hizmetler sipariş edebilirler.
            </p>
            <p className="my-[10px]">
              <strong>3.2.</strong>{" "}
              <a href="/" className="text-link underline">
                Ücretli hizmet türleri:
              </a>{" "}
            </p>
            <p className="my-[10px]">
              <strong>3.2.1.</strong>{" "}
              <a href="/" className="text-link underline">
                Arama sonuçlarında öne çıkarma;
              </a>{" "}
            </p>
            <p className="my-[10px]">
              <strong>3.2.2.</strong>{" "}
              <a href="/" className="text-link underline">
                VIP;
              </a>{" "}
            </p>
            <p className="my-[10px]">
              <strong>3.2.3.</strong>{" "}
              <a href="/" className="text-link underline">
                Premium;
              </a>{" "}
            </p>
            <p className="my-[10px]">
              <strong>3.2.4.</strong>{" "}
              <a href="/" className="text-link underline">
                İlan limiti;
              </a>{" "}
            </p>
            <p className="my-[10px]">
              <strong>3.2.5.</strong>{" "}
              <a href="/" className="text-link underline">
                Tekrar ilan;
              </a>{" "}
            </p>
            <p className="my-[10px]">
              <strong>3.2.6.</strong>{" "}
              <a href="/" className="text-link underline">
                SMS PIN;
              </a>{" "}
            </p>
            <p className="my-[10px]">
              <strong>3.2.7.</strong>{" "}
              <a href="/" className="text-link underline">
                İlanın yenilenmesi.
              </a>{" "}
            </p>
            <p className="my-[10px]">
              <strong>3.3.</strong> Ücretli hizmetlerin fiyatları ve sipariş
              prosedürleri, Servisin ilgili sayfalarında gösterilmiştir.
            </p>
            <p className="my-[10px]">
              <strong>3.4.</strong> Servisin ücretli hizmetlerinden yararlanan
              Kullanıcı, ödediği ücretlerin iadesini talep edebilir. İade veya
              reddetme kararı Yönetim tarafından tek taraflı olarak verilir.
            </p>
            <p className="my-[10px]">
              <strong>3.5.</strong> Yönetim, aşağıdaki durumlarda iade yapmama
              hakkına sahiptir:
            </p>
            <p className="my-[10px]">
              <strong>3.5.1.</strong> Kullanıcı, Sözleşmenin şartlarını sürekli
              ihlal ediyorsa;
            </p>
            <p className="my-[10px]">
              <strong>3.5.2.</strong> Hizmet zaten aktive edilmişse veya ilan
              moderasyondan sonra silinmişse;
            </p>
            <p className="my-[10px]">
              <strong>3.5.3.</strong> Ödeme sistemlerinde bir sorun yaşanmışsa.
              Bu durumda Yönetim, bireysel çözüm üretebilir.
            </p>
            <p className="my-[10px]">
              <strong>3.6.</strong> İade edilecek tutar 30 gün içinde
              Kullanıcının hesabına yatırılacaktır.
            </p>
          </section>

          {/* Description */}
          <section className="my-[10px]">
            <h2 className="font-bold my-[10px]">4. Bonuslar</h2>
            <p className="my-[10px]">
              <strong>4.1.</strong> Bonuslar — kibcar.com'daki Kişisel Hesapta
              yer alan ve sadece site içerisinde kullanılmak üzere tahsis
              edilmiş bakiyedir. Bonuslar nakit paraya dönüştürülemez veya
              üçüncü kişilere devredilemez.
            </p>
            <p className="my-[10px]">
              <strong>4.2.</strong> Paket içi bonuslar — Paketin satın
              alınmasıyla birlikte Kullanıcı hesabına aktarılır. Bonusların
              kullanım süresi, paket süresiyle aynıdır.
            </p>
            <p className="my-[10px]">
              <strong>4.3.</strong> Hediye bonuslar — Yönetimin inisiyatifi ile
              Kullanıcı hesabına aktarılır. Kullanım süresi Yönetim tarafından
              belirlenir.
            </p>
            <p className="my-[10px]">
              <strong>4.4.</strong> Ana Bakiye — Kullanıcı tarafından
              artırılabilen, Kişisel Hesapta bulunan bakiyedir. Bu bakiye, banka
              kartı veya ödeme sistemleri ile artırılabilir.
            </p>
            <p className="my-[10px]">
              <strong>4.5.</strong> Bonus bakiyesinin sıfırlanması veya kullanım
              sırasında oluşabilecek kayıplar tazmin edilmez.
            </p>
          </section>

          {/* Means of Communication */}
          <section className="my-[10px]">
            <h2 className="font-bold my-[10px]">5. İletişim</h2>
            <p className="my-[10px]">
              <strong>5.1.</strong> Yönetim, Kullanıcılara e-posta veya SMS
              mesajları gönderebilir. Servis ile ilgili bildirimler Servis
              üzerinde yayımlanabilir.
            </p>
            <p className="my-[10px]">
              <strong>5.2.</strong> Bu mesajlar, teklifler ve reklamlar
              içerebilir. Kullanıcı, bu tür mesajları kabul ettiğini beyan eder.
            </p>
            <p className="my-[10px]">
              <strong>5.3.</strong> Servis üzerinde yayımlanan mesajlar,
              yayımlandığı anda Kullanıcıya ulaşmış sayılır.
            </p>
          </section>
          {/* Amending the ad */}
          <section className="my-[10px]">
            <h2 className="font-bold my-[10px]">6. Yazılım</h2>
            <p className="my-[10px]">
              <strong>6.1.</strong> Yönetim, site, mobil uygulamalar ve Servisin
              tüm yazılımının tek sahibidir.
            </p>
            <p className="my-[10px]">
              <strong>6.2.</strong> Kullanıcı, yazılımı indirerek yalnızca
              kişisel kullanımı için ücretsiz bir lisans alır.
            </p>
            <p className="my-[10px]">
              <strong>6.3.</strong> Yazılımın kopyalanması, satılması,
              değiştirilmesi yasaktır.
            </p>
          </section>
          {/*Black list */}
          <section className="my-[10px]">
            <h2 className="font-bold my-[10px]">
              7. Sorumluluğun Sınırlandırılması
            </h2>
            <p className="my-[10px]">
              <strong>7.1.</strong> Kullanıcı, NV ile ilgili bilgileri sadece
              kendi çıkarları doğrultusunda Servis üzerinde paylaşır.
            </p>
            <p className="my-[10px]">
              <strong>7.2.</strong> Servis, NV satış ve alım işlemlerinin
              düzenleyicisi değildir.
            </p>
            <p className="my-[10px]">
              <strong>7.3.</strong> Servis, Kullanıcıların işlemlerinden doğan
              zararlar, kayıplar veya diğer maddi kayıplardan sorumlu değildir.
            </p>
          </section>
          {/* Car dealerships and other persons engaged in commercial activities */}
          <section className="my-[10px]">
            <h2 className="font-bold my-[10px]">8. Kullanım Süresi</h2>
            <p className="my-[10px]">
              <strong>8.1.</strong> Bu Sözleşme, Kullanıcının Servise erişimi
              ile yürürlüğe girer ve süresiz olarak devam eder.
            </p>
            <p className="my-[10px]">
              <strong>8.2.</strong> Kullanıcı, Servis hizmetlerinden dilediği
              zaman vazgeçme hakkına sahiptir.
            </p>
            <p className="my-[10px]">
              <strong>8.3.</strong> Servis, Kullanıcının erişimini kısıtlama
              hakkına sahiptir.
            </p>
          </section>
          {/* Technical support service */}
          <section className="my-[10px]">
            <h2 className="font-bold my-[10px]">9. Diğer Hükümler</h2>
            <p className="my-[10px]">
              <strong>9.1.</strong> Tüm anlaşmazlıklar müzakere yoluyla
              çözülmeye çalışılacaktır. Yürürlükteki Azerbaycan yasaları geçerli
              olacaktır.
            </p>
            <p className="my-[10px]">
              <strong>9.2.</strong> Bu Sözleşme tek taraflı olarak
              değiştirilebilir. Yeni versiyon, Servis üzerinde yayımlandığı
              tarihten itibaren geçerli olacaktır.
            </p>
            <p className="my-[10px]">
              <strong>9.3.</strong> Mahkeme tarafından bu Sözleşmenin herhangi
              bir hükmünün geçersiz sayılması, diğer hükümlerin geçersiz
              olmasına neden olmaz.
            </p>
            <br />
            <p className="my-[10px]">
              <strong>
                Kullanıcı, bu Sözleşmenin tüm maddelerini okuduğunu ve tamamen
                kabul ettiğini beyan eder.
              </strong>
            </p>
            <br />
            <p className="my-[10px]">Ekler:</p>
            <br />
            <p className="my-[10px]">
              <strong>1.</strong>{" "}
              <a href="/" className="text-link underline">
                https://kibcar.com
              </a>{" "}
              Kullanıcı Sözleşmesine Ek No: 1
            </p>{" "}
            <br />
          </section>
          <p className="my-[10px]">Son Güncelleme Tarihi — 20.11.2024</p>
        </div>
      </div>
    </div>
  );
}

export default Terms;

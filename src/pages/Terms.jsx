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
            Kullanıcı Sözleşmesİ
          </h2>
        </div>
        <div className="px-5 text-[14px] md:text-base leading-[26px]">
          {/* Posting of Advertisements */}
          <section className="my-[10px]">
            <h2 className="font-bold my-[10px]">1. Genel Koşullar</h2>
            <p className="my-[10px]">
              <strong>1.1.</strong> Bu anlaşma,{" "}
              <a href="/" className="text-link underline">
                https://kibcar.com/
              </a>{" "}
              Servisinin Kullanıcıları tarafından kullanım koşullarını belirler.
            </p>
            <p className="my-[10px]">
              <strong>1.2.</strong> Bu Kullanıcı anlaşması'nın amaçları için,
              aşağıdaki terimler ve tanımlamalar aşağıdaki anlamlarda
              kullanılır:
            </p>
            <p className="my-[10px]">
              <strong>1.2.1.</strong> Hizmet - İnternet ağında{" "}
              <a href="/" className="text-link underline">
                https://kibcar.com/
              </a>{" "}
              adresinde yerleştirilen İnternet kaynağı (sitesi), çeşitli işletim
              sistemleri temelinde sitenin eklentileri ve diğer hizmetleri,
              ayrıca yazılım, sitenin, eklentilerin ve diğer hizmetlerin
              tasarımı (grafik düzenlemesi), veri tabanı, hizmetlerin herhangi
              bir bölümü (yarı bölümü), ayrıca hizmetlerde Yönetim ve
              Kullanıcılar tarafından yerleştirilen bilgiler.
            </p>
            <p className="my-[10px]">
              <strong>1.2.2.</strong> Yönetim - Hizmetin idaresini, Kuzey Kıbrıs
              Türk Cumhuriyeti mevzuatına uygun olarak kurulan ve kayıtlı-
              Hizmetin ORUCOV TRADİNG LTD- Şirketi (MŞ: 21739) gerçekleştiriyor.
              Servisle ilgili tüm mülkiyet hakları yalnızca Şirket'e aittir.
            </p>
            <p className="my-[10px]">
              <strong>1.2.3.</strong> Kullanıcı - sözleşme şartlarını kabul eden
              ve Hizmet hizmetlerini kullanan herhangi bir yasal yetkiye sahip
              olan kişidir.
            </p>
            <p className="my-[10px]">
              <strong>1.2.4.</strong> Kurumsal Hesap - Kullanıcıya ait olan ve
              sadece{" "}
              <a href="/" className="text-link underline">
                Kibcar.com
              </a>{" "}
              sitesi çerçevesinde ödemeler için kullanılabilen fonların
              bakiyesinin hesaplanması için bir hesap.
            </p>
            <p className="my-[10px]">
              <strong>1.2.5.</strong> Kullanıcının kişisel bilgileri -
              Kullanıcının kendisi, Kullanıcının kişisel bilgileri, Hizmeti
              kullanma sürecinde Yönetime otomatik olarak aktarılan bilgiler,
              örneğin IP adresi, çerez bilgisi, Kullanıcının tarayıcısı ve
              Kullanıcı hakkındaki diğer bilgiler de dahil olmak üzere, kayıt
              sırasında veya Hizmeti kullanma sürecinde serbestçe sağladığı
              Kullanıcı hakkındaki bilgiler veya bilgi kümeleridir.
            </p>
            <p className="my-[10px]">
              <strong>1.2.6.</strong> Bilgi - Hizmette Kullanıcı veya Yönetim
              tarafından yerleştirilen herhangi bir bilgidir.
            </p>
            <p className="my-[10px]">
              <strong>1.2.7.</strong> Spam - alıcılar tarafından toplu, izinsiz
              ve/veya beklenmedik reklam, bilgi, teşvik veya başka bir karaktere
              sahip e-posta ve diğer gönderilerdir.
            </p>
            <p className="my-[10px]">
              <strong>1.2.8.</strong> Hizmet paketi - Özel olarak ticari
              faaliyetlerde bulunan kullanıcılar için oluşturulmuş, ticari
              açıdan karlı olan, ek hizmetleri de içeren
              hizmetler/bonuslar/indirimler/reklamlar topluluğu. Paketi
              aldığında, kullanıcı belirli avantajlar elde eder. Servis paketi
              için ödediğiniz para, etkinleştirildikten sonra iade edilmez.
            </p>
            <p className="my-[10px]">
              <strong>1.2.9.</strong> İndirim - Reklamların ilerletilmesi için
              uygulanan ücretli Hizmetlerin fiili fiyatlarının düşürülmesi.
            </p>
            <p className="my-[10px]">
              <strong>1.2.10.</strong> Yönetim ve Kullanıcı bu anlaşmanın
              Taraflarıdır.
            </p>
            <p className="my-[10px]">
              <strong>1.3.</strong> Bu Kullanıcı Anlaşmasında kullanılan ve
              "Terimler ve Tanımlamalar" bölümünde yer almayan terimler ve
              kavramlar, Kullanıcı Anlaşması'nın metninde belirtilen anlamlara
              göre yorumlanacaktır. Kullanıcı Anlaşmasında kullanılan bir
              terimin veya tanımın açıklamasıyla ilgili herhangi bir anlaşmazlık
              ortaya çıkarsa, Yönetim tarafından belirlenen açıklama
              uygulanacaktır.
            </p>
            <p className="my-[10px]">
              <strong>1.4.</strong> Servisin hizmetleri ve malzemelerinin
              kullanımı, yürürlükteki mevzuatın normalleri ile aynı zamanda
              mevcut anlaşmayla düzenlenir.
            </p>
            <p className="my-[10px]">
              <strong>1.5.</strong> Bu anlaşma bir kamu teklifi.
            </p>
            <p className="my-[10px]">
              <strong>1.6.</strong> Hizmetleri kullanarak, Kullanıcı bu
              Anlaşmaya katılır ve Hizmetleri kullanma talimatlarına uymak
              şartlarını ve yükümlülüklerini kabul eder.
            </p>
            <p className="my-[10px]">
              <strong>1.7.</strong> Şirket adına Hizmeti kullanırsanız, o şirket
              bu Anlaşmayı ve şartlarını kabul eder.
            </p>
            <p className="my-[10px]">
              <strong>1.8.</strong> Yönetim, herhangi bir zamanda tek taraflı
              olarak bu Anlaşmanın koşullarını değiştirme hakkına sahiptir.
            </p>
            <p className="my-[10px]">
              <strong>1.9.</strong> Kullanıcı, mevcut Anlaşmanın şartlarını veya
              ona yapılan değişiklikleri kabul etmezse, Hizmete erişmeyi
              reddetmeli, Hizmet'in hizmetlerini kullanmayı durdurmalıdır.
            </p>
            <p className="my-[10px]">
              <strong>1.10.</strong> Bu sayede Yönetim, Kullanıcılara Sunucunun
              hizmetlerini kullanarak ilan yerleştirme ve arama hizmetleri
              sunar.
            </p>
            <p className="my-[10px]">
              <strong>1.11.</strong> Ayrı hizmetlerin sağlanması özel kurallar
              ve/veya sözleşmelerle düzenlenebilir.
            </p>
            <p className="my-[10px]">
              <strong>1.12.</strong> Kullanıcı, Hizmet'in tüm malzemelerinin ve
              hizmetlerinin veya bunların herhangi bir bölümünün reklamla eşlik
              edebileceğini kabul eder. Kullanıcı, Yönetim'in herhangi bir
              sorumluluk taşımadığını ve bu tür reklamlarla ilgili herhangi bir
              yükümlülüğü olmadığını kabul eder.
            </p>
            <p className="my-[10px]">
              <strong>1.13.</strong> Hizmete kaydolmak gönüllüdür. Hizmete
              kaydolduğunda, Kullanıcı Hizmetin ek özelliklere erişir. Yönetim,
              Kullanıcıdan kayıt sırasında verdiği bilgilerin doğrulanmasını ve
              onaylayıcı belgeleri istediği herhangi bir zamanda talep etme
              hakkını saklı tutar.
            </p>
            <p className="my-[10px]">
              <strong>1.14.</strong> Kullanıcı, şifresini gizli tutmayı taahhüt
              eder. Kullanıcının kendi e-posta adresi ve şifresini kullanarak
              yaptıkları eylemler, Kullanıcının kişisel dosyasında yapılan
              eylemlerden sorumludur. Kullanıcı, Hizmetleri yalnızca kişisel
              e-posta adresi ve şifresini kullanarak kullanma hakkına sahiptir.
              Kullanıcının, kişisel kabinesine izinsiz giriş yapıldığından
              şüphelenmesi durumunda, parolayı serbestçe değiştirmeyi taahhüt
              eder.
            </p>
            <p className="my-[10px]">
              <strong>1.15.</strong> Yönetim, Kullanıcılar tarafından kayıt
              ve/veya yetkilendirme sırasında verilen bilgilerin doğruluğunu
              denetlemek için özel teknik kararlar kullanma hakkına sahiptir.
            </p>
            <p className="my-[10px]">
              <strong>1.16.</strong> Yönetim, Kullanıcının gerçekten sunulduğu
              kişi olduğunu ve Kullanıcının Hizmette kayıt sırasında verdiği
              bilgilerin doğru olduğunu garanti edemez.
            </p>
            <p className="my-[10px]">
              <strong>1.17.</strong> Bu amaçla, Kullanıcı'ya, Hizmette mevcut
              olan tüm araçları kullanarak olası karşı taraflarla iletişim
              kurması önerilir.
            </p>
            <p className="my-[10px]">
              <strong>1.18.</strong> Yönetim, kişisel takdirine göre, mevcut
              Anlaşmanın koşullarını ihlal eden Kullanıcının hizmetlerine
              erişimi durdurma hakkını saklı tutar.
            </p>
            <p className="my-[10px]">
              <strong>1.19.</strong> Kullanıcı tarafından başka kişilerin
              haklarının veya geçerli mevzuatın ihlal edilmesi durumunda, ayrıca
              diğer nedenlerden dolayı, Hizmet, Kullanıcının erişimini kendi
              isteği doğrultusunda kısıtlama veya durdurma hakkına sahiptir.
            </p>
            <p className="my-[10px]">
              <strong>1.20.</strong> Hizmetlere erişimi kesilen veya verileri
              güvensiz olan bir kullanıcı, Yönetim'in özel izni olmadan yeniden
              kaydolmaya hak kazanmaz. Bu Kullanıcının, Hizmet ve hizmetlerine
              erişmek için başka bir Kullanıcının kayıt bilgilerini kullanma
              hakkı da yoktur.
            </p>
          </section>

          {/* Images */}
          <section className="my-[10px]">
            <h2 className="font-bold my-[10px]">
              2. Hizmet kullanımı. İlanların yerleştirilmesi
            </h2>
            <p className="my-[10px]">
              <strong>2.1.</strong> Yönetim, özel bir form doldurduktan sonra,
              tüm kayıtlı ve kayıtlı olmayan Kullanıcılara Hizmette reklam
              yerleştirme hakkı verir.
            </p>
            <p className="my-[10px]">
              <strong>2.2.</strong> Kullanıcı, yasaların veya uluslararası
              hukukun normlarını ihlal etmek olarak görülebilecek eylemler,
              özellikle de fikri mülkiyet, telif hakları ve/veya yan haklar
              alanında, ayrıca Hizmetin normal işlevini bozacak veya bozabilecek
              herhangi bir eylemde bulunmamayı kabul eder.
            </p>
            <p className="my-[10px]">
              <strong>2.3.</strong> UA (Ulaşım Aracı) ile ilgili tüm anlaşmalar
              doğrudan Kullanıcılar arasında yapılır. Hizmet, Hizmet
              aracılığıyla Kullanıcılar tarafından gerçekleştirilen işlemlerin
              katılımcısı ve/veya aracıcısı değildir. Yönetim bu tür anlaşmaları
              denetlemiyor ve sorumluluk almıyor.
            </p>
            <p className="my-[10px]">
              <strong>2.4.</strong> Kullanıcının Servis'teki yorumları ve diğer
              notları, yasaların gereksinimleri ve genel olarak kabul edilen
              ahlak standartları ile çelişmemelidir.
            </p>
            <p className="my-[10px]">
              <strong>2.5.</strong> Kullanıcı, Yönetimin, Hizmette bulunabilecek
              yabancı kaynaklara erişiminden veya kullanımından sorumlu olmadığı
              konusunda uyarılmıştır. Yönetim, ilanların içeriğinden, diğer
              kaynaklara gönderilmelerinden ve ilanların açıklamalarında yer
              alan diğer bilgilerden sorumlu değildir.
            </p>
            <p className="my-[10px]">
              <strong>2.6.</strong> Kullanıcı, Yönetim'e, Kullanıcı tarafından
              sağlanan ilanları, bilgileri ve bilgileri yayınlama hakkının
              Yönetim tarafından alınması amacıyla, her yerde yürürlükte olan,
              süre tanımayan, iade edilemez, özel olmayan kullanım, yayım,
              yayın, toplama, işleme, gösterme, kopyalama, çoğaltma hakkını,
              verilerin, tasvirlerin, resimlerin, video ve ses materyallerinin,
              veri tabanlarının, yayınların, telif haklarının ve fikri mülkiyet
              haklarının, ayrıca Kullanıcı tarafından tüm bilinen veya
              bilinmeyen bilgi taşıyıcılarında istenen diğer bilgilerin yeniden
              üretilmesini sağlar. Yukarıda listelenen haklar, Yönetime ücretsiz
              olarak verilir. Kullanıcı, Hizmet'in tüm Kullanıcılarına kendi
              tarafından gönderilen bilgilere erişim hakkı verir. Buna ek
              olarak, Kullanıcı, Hizmette yayınladığı materyaller üzerinde
              herhangi bir fikri mülkiyet hakkına sahiptir.
            </p>
            <p className="my-[10px]">
              <strong>2.7.</strong> Hizmet, Kullanıcı tarafından istenen
              herhangi bir bilgi ve bilginin verilmesiyle ilgili olarak üçüncü
              kişilerin haklarının ihlali için sorumlu değildir.
            </p>
            <p className="my-[10px]">
              <strong>2.8.</strong> Servis Kullanıcısı, Servis'in talimatlarına
              uygun olarak ilanlar yerleştirmeyi ve UA ve satış koşulları
              hakkında güvenilir ve tam bilgi vermeyi taahhüt eder. Kullanıcı,
              ilanda belirtilen UA hakkındaki bilgileri kontrol etmeli ve yanlış
              veya eksik bilgiler tespit edildiğinde, gerekli bilgileri
              düzeltmeli veya tamamlamalıdır.
            </p>
            <p className="my-[10px]">
              <strong>2.9.</strong> Kullanıcı, UA ile ilanı yerleştirerek, UA
              ile ilgili olarak ilanda belirtilen eylemleri gerçekleştirme
              hakkına sahip olduğunu onaylar.
            </p>
            <p className="my-[10px]">
              <strong>2.10.</strong> Kullanıcı, Servis'teki ilanlarda bilgi ve
              bilgileri yerleştirmek için gerekli tüm haklara, lisanslara,
              izinlere, tüm patentlere, ticari markalara, ticari sırlara, fikri
              mülkiyet haklarına veya uygun yazılı rızaya, lisanslara veya
              üçüncü kişilerin isimlerinden, tanımlamalarından veya diğer
              nesnelerinden Kullanım izni verilmiş.
            </p>
            <p className="my-[10px]">
              <strong>2.11.</strong> Servis, Kullanıcıdan yayınlanan UA hakkında
              ek bilgi ve/veya Kullanıcı tarafından sağlanan bilgileri
              doğrulayan belgeleri talep etme hakkına sahiptir. Servis, böyle
              bir belge veya bilgi verilene kadar yayınlamaları saklama hakkına
              sahiptir.
            </p>
            <p className="my-[10px]">
              <strong>2.12.</strong> Kullanıcı, özel izinler gerektirmediği ve
              geçerli kullanım kurallarına uyduğu sürece, Servis'te kendisine
              ait herhangi bir UA satma hakkına sahiptir.
            </p>
            <p className="my-[10px]">
              <strong>2.13.</strong> Hizmetlerin yüksek kalitesini desteklemek
              için, Hizmet, Hizmette Kullanıcının aktif ilanlarının miktarını
              sınırlandırma, ayrıca Hizmette Kullanıcının hareketlerini
              sınırlandırma hakkını saklı tutar.
            </p>
            <p className="my-[10px]">
              <strong>2.14.</strong> İlanda UA Kullanıcı tarafından verilen
              tanım bu UA satış koşullarını oluşturur.
            </p>
            <p className="my-[10px]">
              <strong>2.15.</strong> Reklamda belirtilen hizmeti sunma veya
              satış koşulları ve UA tanımı, ayrıca reklamın diğer koşulları hem
              reklamın yerleştirildiği zaman hem de gelecekte yürürlükte olan
              mevzuata ve mevcut Sözleşmeye aykırı olmamalıdır. Geçerli yasalara
              veya mevcut Anlaşmaya yapılan değişiklikler sonucunda yasalara
              ve/veya mevcut Anlaşmaya uygun olmayan herhangi bir ilan şartı
              ortaya çıkarsa veya kabul edilirse, bu tür şartlar veya bu tür
              ilanlar, herhangi bir uyumsuzluğun giderilmesi için Kullanıcı
              tarafından tamamlanmalı veya değiştirilmelidir. Uygun
              değişikliklerin yapılması imkânsız olduğunda, bu ilanlar Kullanıcı
              tarafından silinmelidir. Yönetim, bu maddenin söz konusu olduğu
              durumlarda, Kullanıcı'yı önceden uyarmadan, bu tür ilanları
              düzeltme veya kaldırma işlemlerini gerçekleştirme hakkını saklı
              tutar.
            </p>
            <p className="my-[10px]">
              <strong>2.16.</strong> Hizmette, yayınlamanın yürürlükteki
              yasaları ihlal ettiği, genel olarak kabul edilen ahlak
              standartlarına aykırı olduğu, hakarete yol açtığı veya yersiz
              olduğu, ayrıca üçüncü kişilerin haklarını ihlal ettiği ilanlar
              yasaklanmıştır. Kullanıcı, teklifin geçerli yasaları ve mevcut
              Sözleşmenin şartlarını ihlal etmediğinden emin olmalıdır.
            </p>
            <p className="my-[10px]">
              <strong>2.17.</strong> Ücretli hizmetlerin kullanımı, mevcut
              Sözleşmenin ihlali durumunda ilanın Yönetim tarafından
              engellenmeyeceğini garanti etmez. İlan yerleştirme kuralları ihlal
              edildiğinde, ödenen hizmetler için para iade edilmez.
            </p>
            <p className="my-[10px]">
              <strong>2.18.</strong> İnternet sitelerinin sayfalarına, satış,
              kullanım veya mal ve hizmetlerle ilgili diğer bilgileri içeren
              sitelere bağlantılar yerleştirmek yasaktır.
            </p>
            <p className="my-[10px]">
              <strong>2.19.</strong> Kullanıcı, sağlanan hizmetleri
              desteklememeye ve hakkında bilgi yaymamayı taahhüt eder:
            </p>
            <p className="my-[10px]">
              <strong>2.19.1.</strong> Diğer ticari platformlar, internet açık
              artırmaları ve/veya internet mağazaları tarafından;
            </p>
            <p className="my-[10px]">
              <strong>2.19.2.</strong> Hizmette aynı veya daha az ücretle
              sunulan mal ve hizmetleri sunan diğer hizmetler tarafından;
            </p>
            <p className="my-[10px]">
              <strong>2.19.3.</strong> Servis'te satışa yasaklanmış ürün ve
              hizmetler sunan diğer hizmetler tarafından.
            </p>
            <p className="my-[10px]">
              <strong>2.20.</strong> Kullanıcı, Yönetim'in yazılı izni olmadan
              Hizmete giriş almak için otomatik programlar kullanmamayı taahhüt
              eder. İlanların yerleştirilmesine izin veren bilgisayar
              programlarının kullanımı, Yönetim'nin yazılı izni olmadıkça,
              normal ilan yerleştirme sırasını geçerek yasaktır.
            </p>
            <p className="my-[10px]">
              <strong>2.21.</strong> Ayrıca, Kullanıcı şu yükümlülükleri
              üstlenir:
            </p>
            <p className="my-[10px]">
              <strong>2.21.1.</strong> Servisin altyapısına büyük bir yükleme
              yaratabilecek hiçbir hareketi başlatmamak;
            </p>
            <p className="my-[10px]">
              <strong>2.21.2.</strong> Yönetimin önceden yazılı izni olmadan,
              Servis'teki herhangi bir bilgiyi aktarmaya, çoğaltmaya,
              değiştirmeye, yaymaya veya halka açıklamaya;
            </p>
            <p className="my-[10px]">
              <strong>2.21.3.</strong> Hizmetlere erişimi engellemek veya
              kısıtlamak amacıyla Hizmetin çalışmasına engel olmamak, ayrıca
              otomatik sistemlerin veya süreçlerin hareketini engel olmamak;
            </p>
            <p className="my-[10px]">
              <strong>2.22.</strong> Kullanıcı tarafından sunulan bilgiler ve
              Kullanıcının Servis'teki eylemleri aşağıdakilerden oluşmamalıdır:
            </p>
            <p className="my-[10px]">
              <strong>2.22.1.</strong> Yanlışlık, yanlışlık ya da yanıltıcılık;
            </p>
            <p className="my-[10px]">
              <strong>2.22.2.</strong> Dolandırıcılık, aldatmaca ya da güvenin
              kötüye kullanılmasına izin verme;
            </p>
            <p className="my-[10px]">
              <strong>2.22.3.</strong> Çalıntı veya sahte eşyalarla anlaşmalara
              yol açmak;
            </p>
            <p className="my-[10px]">
              <strong>2.22.4.</strong> Üçüncü bir kişinin mülkiyetini ihlal
              etmek ya da onun ticari sırlarına veya özel hayatına dokunulmazlık
              hakkına tecavüz etmek;
            </p>
            <p className="my-[10px]">
              <strong>2.22.5.</strong> Kimsenin onuruna, itibarına veya işgücü
              itibarına zarar verecek bilgileri içermemek;
            </p>
            <p className="my-[10px]">
              <strong>2.22.6.</strong> Kötü niyetli ya da tehdit edici sözler
              içermemesi;
            </p>
            <p className="my-[10px]">
              <strong>2.22.7.</strong> Suç işlemeye teşvik etmek, milletlerarası
              düşmanlığı körüklemek;
            </p>
            <p className="my-[10px]">
              <strong>2.22.8.</strong> Terörist ve aşırılık yanlısı faaliyetlere
              destek vermek, destek vermek veya teşvik etmek;
            </p>
            <p className="my-[10px]">
              <strong>2.22.9.</strong> Ahlaksızlık ya da pornografik
              niteliktedir;
            </p>
            <p className="my-[10px]">
              <strong>2.22.10.</strong> Bilgisayar virüsleri ve diğer bilgisayar
              programları içeren, özellikle de herhangi bir sistemin bilgilerini
              veya sistemin kendisini veya bir kısmını, kişisel bilgileri veya
              diğer bilgileri (Hizmet verileri de dahil olmak üzere) tahrip
              etmek, tecavüz etmek, gizlice ele geçirmek veya ele geçirmek
              amacıyla hazırlanmış;
            </p>
            <p className="my-[10px]">
              <strong>2.22.11.</strong> Reklam niteliğindeki malzemeleri
              saklamak;
            </p>
            <p className="my-[10px]">
              <strong>2.22.12.</strong> Üçüncü kişilerin fikri haklarını,
              vatandaşın resme hakkını ve üçüncü kişilerin diğer haklarını ihlal
              etmek;
            </p>
            <p className="my-[10px]">
              <strong>2.22.13.</strong> Mevcut yasaları ihlal etmek.
            </p>
            <p className="my-[10px]">
              <strong>2.23.</strong> Kullanıcı, Hizmette ilanlar
              yerleştirmekten, Hizmet ve/veya Kullanıcı tarafından yürürlükteki
              mevzuatın ihlaline yol açabilecek Hizmet ve/veya Hizmet
              hizmetlerinin kullanımıyla ilgili sözleşmeleri bağlamaktan veya
              yerine getirmekten yasaktır.
            </p>
            <p className="my-[10px]">
              <strong>2.24.</strong> Yönetim Servisinde bir ilan yerleştirilen
              bir UA, böyle bir UA hakkında bir ilan yayınlanırken Kullanıcı
              tarafından belirtilen farklı bir şekilde reklam verme hakkına
              sahiptir.
            </p>
            <p className="my-[10px]">
              <strong>2.25.</strong> Yönetim, herhangi bir ilanın gösterim
              sürelerinin yerini değiştirme, durdurma, sona erdirme veya uzatma
              hakkına sahiptir.
            </p>
            <p className="my-[10px]">
              <strong>2.26.</strong> Yönetim, bu Anlaşmada belirtilen kuralları
              ihlal eden, diğer Kullanıcıların haklarını ihlal eden veya
              yürürlükteki yasaları ihlal eden nedenlerle ve diğer nedenlerle
              herhangi bir zamanda herhangi bir reklamın gösterilmesini durdurma
              hakkına sahiptir.
            </p>
            <p className="my-[10px]">
              <strong>2.27.</strong> Yönetim, ilanları düzeltme, başka
              rubrikalara taşımak ve Kullanıcıların ilanlarıyla ilgili herhangi
              bir işlem yapma hakkına sahiptir.
            </p>
            <p className="my-[10px]">
              <strong>2.28.</strong> Yönetim, ilanların yerleştirilmesini
              (yayınlanmasını) reddetme hakkına sahiptir.
            </p>
            <p className="my-[10px]">
              <strong>2.29.</strong> İlanın resmileştirilmesine ilişkin
              gereksinimler, Hizmette ilanların yayınlanması kuralları bölümünün{" "}
              <a href="/rules" className="text-link underline">
                "Genel Kurallar"
              </a>{" "}
              bölümünde belirtilmiştir.
            </p>
            <p className="my-[10px]">
              <strong>2.30.</strong> Kullanıcı, yürürlükteki yasalara göre
              ilanların içeriğine tam ve özel olarak sorumludur.
            </p>
          </section>

          {/* Price */}
          <section className="my-[10px]">
            <h2 className="font-bold my-[10px]">3. Ücretli hizmetler</h2>
            <p className="my-[10px]">
              <strong>3.1.</strong> Kullanıcılar Servis'te ücretli hizmetler
              sipariş edebilirler.
            </p>
            <p className="my-[10px]">
              <strong>3.2.</strong> Ücretli Hizmet Türleri
            </p>
            <p className="my-[10px]">
              <strong>3.2.1.</strong> VIP
            </p>
            <p className="my-[10px]">
              <strong>3.2.2.</strong> Premium
            </p>
            <p className="my-[10px]">
              <strong>3.2.3.</strong> İlan sınırı
            </p>
            <p className="my-[10px]">
              <strong>3.2.4.</strong> Tekrar ilan
            </p>
            <p className="my-[10px]">
              <strong>3.2.5.</strong> SMS PIN numarası
            </p>
            <p className="my-[10px]">
              <strong>3.2.6.</strong> İlan'ın Yenilenmesi
            </p>
            <p className="my-[10px]">
              <strong>3.3.</strong> Hizmetlerin fiyatları ve ayrıca ücretli
              hizmetlerin sipariş prosedürleri Hizmetin ilgili sayfalarında yer
              almaktadır.
            </p>
            <p className="my-[10px]">
              <strong>3.4.</strong> Hizmetin hizmetlerini ödeme yapan Hizmet
              Kullanıcısı, araçların iade edilmesi talebiyle Yönetime başvurma
              hakkına sahiptir. Para birimlerinin iade edilmesi veya iade
              edilmemesiyle ilgili karar tek taraflı bir şekilde Yönetim
              tarafından alınır.
            </p>
            <p className="my-[10px]">
              <strong>3.5.</strong> Yönetim, aşağıdaki durumlarda para
              birimlerinin Kullanıcıya iade edilmesini reddetmeye haklıdır:
            </p>
            <p className="my-[10px]">
              <strong>3.5.1.</strong> Kullanıcı düzenli olarak bu Sözleşmenin
              şartlarını ihlal ediyor.
            </p>
            <p className="my-[10px]">
              <strong>3.5.2.</strong> Hizmet etkinleştirildiyse, ayrıca
              reklamlar denetimden sonra silinmişse.
            </p>
            <p className="my-[10px]">
              <strong>3.5.3.</strong> Ödeme sisteminde herhangi bir arıza olması
              durumunda. Hizmet, Kullanıcılar aracılığıyla Hizmet hizmetleri
              için ödeme yapan ödeme sistemlerinin işleyişinden sorumlu
              değildir. Bu durumda para iadesinin iade edilmesiyle ilgili mesele
              bireysel olarak çözülür.
            </p>
            <p className="my-[10px]">
              <strong>3.5.4.</strong> Diğer durumlarda, yönetimin kararıyla.
            </p>
            <p className="my-[10px]">
              <strong>3.6.</strong> Para iade etme prosedürü, Yönetim ile
              Kullanıcı arasında her durumda belirlenir.
            </p>
            <p className="my-[10px]">
              <strong>3.7.</strong> Geri ödenmesi gereken para, 30 gün içinde
              kullanıcının hesabına aktarılacak.
            </p>
          </section>

          {/* Description */}
          <section className="my-[10px]">
            <h2 className="font-bold my-[10px]">4. Bonuslar</h2>
            <p className="my-[10px]">
              <strong>4.1.</strong> Paket kapsamındaki bonuslar - fatura
              ödendiğinde Paket'in bakiyesine aktarılır. Bonusların etkinlik
              süresi paketin etkinlik süresi ile eşittir.
            </p>
            <p className="my-[10px]">
              <strong>4.2.</strong> Hediye bonusları ?? Yönetim teşebbüsüyle
              Bonus bakiyesine aktarılır. Etkinlik süresi Yönetim tarafından
              belirlenir.
            </p>
          </section>

          {/* Means of Communication */}
          <section className="my-[10px]">
            <h2 className="font-bold my-[10px]">5. İletişim</h2>
            <p className="my-[10px]">
              <strong>5.1.</strong> Yönetim, Kullanıcılara, onlar tarafından
              belirtilen e-posta adreslerine veya telefon numaralarına
              e-postalar ve/veya kısa mesajlar (SMS mesajları) gönderme hakkına
              sahiptir. Servis mesajları Servis'te yayınlanabilir.
            </p>
            <p className="my-[10px]">
              <strong>5.2.</strong> Ayrıca, Kullanıcı, bu tür mektuplar ve
              mesajların, diğer Kullanıcılardan gelen, ancak bunlarla sınırlı
              olmamak üzere, sözleşme kapsamındaki teklifler, teklifler ve diğer
              bilgilendirme ve/veya reklam niteliğindeki mesajlar ve diğer
              mesajlar olabileceğini anlar, kabul eder ve kabul eder. Kullanıcı,
              bu tür mesajların ve/veya bunların ayrı ayrı bölümlerinin reklam
              niteliğinde olabileceğini, ayrıca reklam, bilgi ve diğer ilanları
              içerebileceğini anlar, kabul eder ve kabul eder.
            </p>
            <p className="my-[10px]">
              <strong>5.3.</strong> Hizmette yayınlanan mesajlar,
              yayınlandıkları andan itibaren Kullanıcıya ulaştırılmış sayılır.
            </p>
            <p className="my-[10px]">
              <strong>5.4.</strong> Yönetim, diğer Kullanıcılar tarafından
              kullanımı ve/veya Formu'na yerleştirilmiş otomatik sistemlerle
              (robotlar) Hizmette mesaj gönderilmesinden sorumlu değildir.
            </p>
            <p className="my-[10px]">
              <strong>5.5.</strong> Yönetim, Hizmet sayfalarında Kullanıcı
              tarafından yerleştirilen telefon numaraları ve e-posta
              adreslerinin diğer Kullanıcılar ve/veya robotlar tarafından
              kullanımı için sorumlu değildir.
            </p>
            <p className="my-[10px]">
              <strong>5.6.</strong> Kullanıcı, Yönetimin, e-posta adreslerini ve
              telefon numaralarını, Kullanıcılara mektup ve mesaj gönderme
              amacıyla üçüncü kişilere verme hakkına sahip olduğunu onaylar.
            </p>
            <p className="my-[10px]">
              <strong>5.7.</strong> Kullanıcının Yönetim veya Hizmet
              moderatörleriyle yazışması, Hizmette belirtilen e-posta kutusu
              adresinin yardımıyla gerçekleştirilir.
            </p>
            <p className="my-[10px]">
              <strong>5.8.</strong> Kullanıcı, moderatörlerin ve Yönetim'in
              eylemleri hakkında yorumlar, tartışmalar ve diğer yazılar koymak
              yasaktır.
            </p>
            <p className="my-[10px]">
              <strong>5.9.</strong> Kullanıcı, telefon numarası ya da e-posta
              adresine mesaj almayı istedikleri zaman isteklerini göndererek
              reddedebilirler.
            </p>
          </section>
          {/* Amending the ad */}
          <section className="my-[10px]">
            <h2 className="font-bold my-[10px]">6. Yazılım</h2>
            <p className="my-[10px]">
              <strong>6.1.</strong> Yönetim, sitenin yerleştirildiği alan
              adının, sitenin kendisinin, mobil eklentilerin, ayrıca tüm
              Hizmetin ve Hizmetin tüm yazılımının özel sahibidir.
            </p>
            <p className="my-[10px]">
              <strong>6.2.</strong> Yönetim, yazılımı indirirken, Kullanıcıya
              yazılımı kullanmak için, üçüncü kişilere verilme hakkı olmaksızın,
              kişisel ücretsiz bir normal lisans verir.
            </p>
            <p className="my-[10px]">
              <strong>6.3.</strong> Hizmetin işlevlerine göre, bu tür bir lisans
              istisnasız olarak Kullanıcıya Hizmetin hizmetlerini kullanma ve
              onlardan yararlanma olanağı verilmesi için tasarlanmıştır.
            </p>
            <p className="my-[10px]">
              <strong>6.4.</strong> Yönetim'in fikri mülkiyetinin (uygunlaştırma
              dahil) nesnelerinin kopyasını çıkarmak, değiştirmek, paylaşmak,
              satmak (realize etmek), değiştirmek veya tamamen veya herhangi bir
              kısmını kiralamak, ayrıca Yazılım'ın kaynak kodunu "kırmak" veya
              almaya çalışmak Yönetim'in yazılı izni olmadan yasaktır.
            </p>
          </section>
          {/*Black list */}
          <section className="my-[10px]">
            <h2 className="font-bold my-[10px]">7. Sorumluluk sınırlaması</h2>
            <p className="my-[10px]">
              <strong>7.1.</strong> Hizmette Kullanıcı tarafından sağlanan tüm
              bilgiler (kişisel veriler de dahil olmak üzere), Kullanıcı
              tarafından UA'sinin satılması (realize edilmesi) için
              yerleştirilir.
            </p>
            <p className="my-[10px]">
              <strong>7.2.</strong>Kullanıcı, kendisi hakkında bu veya bu tür
              bilgileri yalnızca kendi çıkarları doğrultusunda, örneğin
              Kullanıcı ile ilişki kurulmasını kolaylaştırmak ve/veya
              Kullanıcıyı tanımlamak için yerleştirir.
            </p>
            <p className="my-[10px]">
              <strong>7.3.</strong> Kullanıcı, kendisiyle ilgili bilgileri
              yerleştirerek, bu tür bilgilerin Hizmette açık erişimde
              yerleştirildiğini, yani herhangi bir müşterinin veya Hizmet
              Kullanıcılarının tanışması için kullanılabileceğini anlar ve kabul
              eder.
            </p>
            <p className="my-[10px]">
              <strong>7.4.</strong> Kullanıcı, bilgilerin bu şekilde
              yerleştirilmesinin tüm risklerini anlar ve kabul eder, buna dahil
              olmak üzere, ancak bunlarla sınırlı olmamak üzere: e-posta
              adresinin spam- mesaj gönderme listesine düşme riski, e-posta
              adresinin çeşitli dolandırıcılara düşme riski, telefon numarasının
              SMS-spamerlere ve/veya SMS dolandırıcılarına düşme riski ve
              bilginin bu şekilde yerleştirilmesinden kaynaklanan diğer riskler.
            </p>
            <p className="my-[10px]">
              <strong>7.5.</strong> Servis UA ile ilgili anlaşmaların
              düzenleyicisi, aracıcısı, alıcısı veya satıcısı değildir.
            </p>
            <p className="my-[10px]">
              <strong>7.6.</strong> Hizmet, Hizmet Kullanıcıları tarafından
              yapılan sözleşmelerin yapılması ve yerine getirilmesi
              (gerçekleştirilmesi), sözleşmelerin yapılması sonucunda meydana
              gelen zararlar, kaybedilen kazançlar, gelirler, mali zararlar veya
              dolaylı, gerçek, dolaylı veya cezai zararlar, ayrıca herhangi bir
              kişinin yasadışı eylemleri sonucunda sorumlu değildir.
            </p>
            <p className="my-[10px]">
              <strong>7.7.</strong> Kullanıcı, Hizmet'in hizmetlerini
              kullanarak, Hizmet'i sorumlulukla kullandığını, Hizmet'te
              yerleştirilen reklamların kullanımıyla ilgili tüm riskleri
              taşıdığını onaylar.
            </p>
            <p className="my-[10px]">
              <strong>7.8.</strong> Hizmet, Kullanıcıların, Yasalar, mevcut
              Anlaşma ve Hizmetin kullanımının diğer kuralları ile
              gerçekleştirilmesine (satılmasına) ve/veya satın alınmasına izin
              verilen Mallar hakkındaki ilanları yerleştirmelerini sağlayan bir
              araçtır.
            </p>
            <p className="my-[10px]">
              <strong>7.9.</strong> Hizmet, Kullanıcılar tarafından
              yerleştirilen ilanları her zaman denetlemez, sonuç olarak, kalite,
              güvenlik, yasallık ve UA'nin onun tanımına uygunluğu, ayrıca
              satıcının UA'yi satması ve alıcının UA'yi elde etmesi, Hizmet'in
              kontrolü dışındadır.
            </p>
            <p className="my-[10px]">
              <strong>7.10.</strong> Hizmet, Kullanıcılar tarafından ilanlarda
              yerleştirilen bilgilerin doğruluğunu denetleyemez.
            </p>
            <p className="my-[10px]">
              <strong>7.11.</strong> Servis, onun Yönetimi, yönetimi ve
              çalışanları, Servis'te yerleştirilen ilanların içeriğine ve
              güvenilirliğine ilişkin herhangi bir sorumluluk taşımamaktadır.
            </p>
            <p className="my-[10px]">
              <strong>7.12.</strong> Yönetim, yönetimi ve çalışanları, herhangi
              bir mesajın içeriğine (Kullanıcılar tarafından posta kutusuna
              ve/veya cep telefonuna alınanlar dahil), ayrıca Kullanıcıların
              iletişim bilgilerini başka bir şekilde kullanma konusunda hiçbir
              sorumluluk taşımamaktadır.
            </p>
            <p className="my-[10px]">
              <strong>7.13.</strong> Kullanıcı, ilanın Hizmette
              yerleştirilmesinin, herhangi bir UA teklifinin, satışının ve/veya
              satın alımının gerçek ve yasal olduğuna dair bir garanti
              olmadığını anlar. Kullanıcı, Anlaşmanın uygulanması ile ilgili
              kararı serbestçe alır.
            </p>
            <p className="my-[10px]">
              <strong>7.14.</strong> Yasalar tarafından izin verilen ölçüde,
              Servis'in herhangi bir iddia hakkındaki genel sorumluluğu,
              Kullanıcı tarafından Servis'in hizmetlerini kullanması veya
              (Servis'in takdirine göre) bu hizmetlerin Kullanıcıya yeniden
              sunulmasıyla ödenen tutar ile sınırlıdır.
            </p>
            <p className="my-[10px]">
              <strong>7.15.</strong> Kullanıcı, Kullanıcı ile diğer Kullanıcılar
              ve/veya Hizmet müşterileri arasındaki tüm anlaşmazlıkları
              (anlaşmanın uygulanması sonucunda da dahil olmak üzere) Yönetimi
              dahil etmeden serbestçe çözeceğini kabul eder.
            </p>
            <p className="my-[10px]">
              <strong>7.16.</strong> Yönetim, üçüncü kişilerin Yönetim'in rızası
              (izin) ve/veya bilgisi olmadan Hizmetin hizmetlerine herhangi bir
              erişiminden ve/veya Kullanıcılar hakkında herhangi bir bilgiye
              (kişisel bilgiler dahil) karşı sorumlu değildir.
            </p>
            <p className="my-[10px]">
              <strong>7.17.</strong> Kullanıcı, Yönetimin, Kullanıcıya, Hizmetin
              herhangi bir içeriğiyle ilgili ve/veya Kullanıcı tarafından
            </p>
          </section>
          {/* Car dealerships and other persons engaged in commercial activities */}
          <section className="my-[10px]">
            <h2 className="font-bold my-[10px]">
              8. Kullanım kurallarının geçerlilik süresi
            </h2>
            <p className="my-[10px]">
              <strong>8.1.</strong> Bu sözleşme, Kullanıcının Hizmetleri'ni
              kullanmaya başladığı andan itibaren, Kullanıcının Hizmette kayıt
              yaptırması veya bir ilan yerleştirmesi gerçeğinden bağımsız olarak
              yürürlüğe girer ve süresiz olarak geçerlidir.
            </p>
            <p className="my-[10px]">
              <strong>8.2.</strong> Kullanıcı, herhangi bir zamanda Hizmet'in
              hizmetlerini kullanma hakkını feshetme hakkına sahiptir. Bundan
              sonra Kullanıcı'nın yeni Reklamlar yerleştirme hakkı yoktur.
            </p>
            <p className="my-[10px]">
              <strong>8.3.</strong> Servis, Kullanıcının erişimini kişisel
              takdirine göre durdurma hakkına sahiptir. Hizmetlere erişimi
              durdurulan veya verileri geçersiz olan Kullanıcı, Yönetim'in özel
              izni olmadan yeniden kaydolma hakkına sahip değildir, ayrıca bu
              Kullanıcı, Hizmetlere erişmek için başka bir Kullanıcının kayıt
              bilgilerini kullanma hakkına sahip değildir.
            </p>
          </section>
          {/* Technical support service */}
          <section className="my-[10px]">
            <h2 className="font-bold my-[10px]">9. Diğer koşullar</h2>
            <p className="my-[10px]">
              <strong>9.1.</strong> Anlaşmanın tarafları, anlaşmazlıklar ortaya
              çıktığında bunları müzakere yoluyla çözmeyi taahhüt ederler. Bu
              Anlaşmanın ve Hizmetlerin sunulması sırasında ortaya çıkan
              anlaşmazlıklar, yürürlükteki yasalara uygun olarak çözülmelidir.
            </p>
            <p className="my-[10px]">
              <strong>9.2.</strong> Tüm anlaşmazlıklarda Kuzey Kıbrıs Türk
              Cumhuriyeti yasaları uygulanır.
            </p>
            <p className="my-[10px]">
              <strong>9.3.</strong> Hizmet, mevcut Anlaşmayı tek taraflı olarak
              ve Kullanıcılara bildirmeden değiştirme hakkına sahiptir.
              Anlaşmanın yeni düzenlemesi, Servis'te yayımlandığı tarihten
              itibaren yürürlüğe girer.
            </p>
            <p className="my-[10px]">
              <strong>9.4.</strong> Bu Anlaşmada hiçbir şey, Kullanıcı ile
              Yönetim arasında bir ajans ilişkisi, bir Ortaklık ilişkisi, bir
              ortaklık ilişkisi, bir kişisel istihdam ilişkisi veya bu Anlaşmada
              doğrudan öngörülen olmayan başka bir ilişki tanımlaması olarak
              anlaşılamaz ve yorumlanamaz.
            </p>
            <p className="my-[10px]">
              <strong>9.5.</strong> Anlaşmanın herhangi bir hükmünün mahkeme
              tarafından geçersiz veya icra edilemez olarak tanınması,
              Anlaşmanın diğer hükümlerinin geçersizliğine yol açmaz.
            </p>
            <p className="my-[10px]">
              <strong>9.6.</strong> Kullanıcılardan herhangi biri tarafından
              Anlaşmanın hükümlerinin ihlal edilmesi durumunda, Yönetim
              tarafından eylemsizlik, Yönetimin kendi çıkarları ve haklarının
              korunması için uygun eylemleri başlatma hakkını sonradan
              kaybetmez.
            </p>
            <p className="my-[10px]">
              <strong>9.7.</strong> Bu Anlaşmada belirtilmeyen diğer tüm şartlar
              ve koşullar, bireysel olarak düzenlenecektir.
            </p>
            <br />
            <p className="my-[10px]">
              <strong>
                Kullanıcı, bu Sözleşmenin tüm hükümleriyle tanıştığını ve sözsüz
                olarak tümünü kabul ettiğini onaylar.
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
              Kullanıcı Sözleşmesine Ek No 1
            </p>{" "}
            <br />
          </section>
          <p className="my-[10px]">Son güncelleştirme tarihi: - 05.12.2024</p>
        </div>
      </div>
    </div>
  );
}

export default Terms;

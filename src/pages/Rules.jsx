import { useState } from "react";

function Rules() {
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
            Kurallar
          </h2>
        </div>
        <div className="px-5 text-[14px] md:text-base leading-[26px]">
          <h1 className="font-bold leading-normal my-5">GENEL KURALLAR</h1>
          <p className="mb-[10px]">
            <a href="/" className="text-link underline">
              Kibcar.com
            </a>
            ’ da reklamların yerleştirilmesi bu{" "}
            <a href="/terms-and-conditions" className="text-link underline">
              Kullanıcı Anlaşması
            </a>{" "}
            (bundan sonra- Anlaşma) ile düzenlenir. Kullanıcıların sayfalarda
            belirtilen Kuralların ihlalleri veya reklamlarla ilgili çok sayıda
            şikayetleri, ilanın ve aynı zamanda sahiplerinin kayıtlı
            hesaplarının bloke edilmesine neden olabilir. Tüm ilanların, ek
            hizmetlerin (Premium, VIP ve diğerleri) uygulanıp uygulanmadığına
            bakılmaksızın kurallara uygun olması gerektiğini unutmayın.
            Kuralları ihlal ederseniz, ücretli ilanlar bile engellenebilir veya
            silinebilir. Ticaret platformunun tüm kullanıcıları için eşit
            koşulların sağlanması amacıyla, herkes bir ilan yerleştirmeden önce{" "}
            <a href="/" className="text-link underline">
              Kibcar.com
            </a>
            ’ da kurallarını tanımalı ve uygulamalıdır.
          </p>

          {/* Posting of Advertisements */}
          <section className="my-[10px]">
            <h2 className="my-[20px]">
              <b>1. İlanların yerleştirilmesi</b>
            </h2>
            <p className="my-[10px]">
              <strong>1.1.</strong> Kullanıcı 90 gün içinde sadece bir ücretsiz
              reklam koyabilir. Her yeni ilan ücretlidir - 450 TL. İlanın süresi
              60 gündür. İlanın süresi dolmuşsa ve araç (bundan sonra UA)
              satılmamışsa, kullanıcı bu ilanı 450 TL ödeyerek 60 günlük veya
              ücretli hizmet sağlayarak hizmet süresiyle eşdeğer bir süre için
              geri yükleyebilir.
            </p>
            <p className="my-[10px]">
              <strong>1.2.</strong> 90 gün içinde bir kullanıcı bir UA (Ulaşım
              Aracı) için yalnızca bir ücretsiz reklam koyabilir. 90 gün içinde
              tekrarlanan veya benzer (marka / model, renk) reklamlar
              yerleştirmek ücretlidir. Tekrar ilan hizmetinin ücreti 450 TL'dir.
              Yeniden yayınlandıktan sonra önceki ilan silinir.
            </p>
            <p className="my-[10px]">
              <strong>1.3.</strong> Site ilanında UA bilgilerini ve resimlerini
              başka bir UA' ya ait bilgi ve resimlerle değiştirmek yasaktır.
            </p>
            <p className="my-[10px]">
              <strong>1.4.</strong> Aynı zamanda aynı UA' nın sitede ayrı
              ilanlarda bulunduğu tespit edilirse, her iki ilan da silinir. İki
              ilandan birini geri yüklemek veya yeni bir ilan yerleştirmek için
              450 TL ödemek gerekir.
            </p>
            <p className="my-[10px]">
              <strong>1.5.</strong> Herhangi bir ilanın yenilenmesi veya
              onarılması ücretlidir. Hizmet ücreti 450 TL.
            </p>
            <p className="my-[10px]">
              <strong>1.6.</strong> Herhangi bir ücretli hizmet ilanı, hizmetin
              geçerlilik süresine eşdeğer şekilde geri döner ve ilanın süresini
              uzatır.
            </p>
          </section>

          {/* Images */}
          <section className="my-[10px]">
            <h2 className="font-bold my-[20px]">2. Resimler</h2>
            <p className="my-[10px]">
              <strong>2.1.</strong> İlandaki en fazla resim sayısı 21'dir.
              İlanın en az üç resmi olmalıdır (kazalı UA için zorunlu değildir):
              UA' nın ön kısmı, arka kısmı ve salonun tam ön kısmı.
            </p>
            <p className="my-[10px]">
              <strong>2.2.</strong> Resimlerin minimum boyutu 1024x768 piksel.
            </p>
            <p className="my-[10px]">
              <strong>2.3.</strong> Resimler kaliteli olmalı.
            </p>
            <p className="my-[10px]">
              <strong>2.4.</strong> Karanlıkta çekilen fotoğraflar, sadece
              UA'nın yeterince aydınlatıldığı takdirde kabul edilebilir.
            </p>
            <p className="my-[10px]">
              <strong>2.5.</strong> Ekran görüntüleri yayınlanmayacak.
              Çerçeveler ya da siyah-beyaz çizgileri olan resimler yayınlanmaz.
            </p>
            <p className="my-[10px]">
              <strong>2.6.</strong> Araç, Kuzey Kıbrıs Türk Cumhuriyeti
              topraklarında çekilmelidir.
            </p>
            <p className="my-[10px]">
              <strong>2.7.</strong> Resimlerde Kibcar.com logosu veya başka bir
              logo olmamalıdır.
            </p>
            <p className="my-[10px]">
              <strong>2.8.</strong> Resimdeki ufuk çizgisi resmin üst/alt
              çizgilerine tam paralel olmalıdır.
            </p>
            <p className="my-[10px]">
              <strong>2.9.</strong> Resimlerde, UA'nın devlet plakasını ve
              insanları gizlemek için etiketler ve emojilerin kullanımı
              yasaktır.
            </p>
            <p className="my-[10px]">
              <strong>2.10.</strong> Resimler reklam niteliğinde bilgi
              içermemelidir.
            </p>
            <p className="my-[10px]">
              <strong>2.11.</strong> Fotoğraflar iletişim araçlarını
              göstermemelidir.
            </p>
            <p className="my-[10px]">
              <strong>2.12.</strong> Salonda çekilen fotoğraflar sadece salonun
              adıyla yayınlanabilir.
            </p>
            <p className="my-[10px]">
              <strong>2.13.</strong> Yabancıların fotoğraflarını veya
              internetten alınan fotoğrafları paylaşmak yasaktır!
            </p>
            <p className="my-[10px]">
              <strong>2.14.</strong> Fotoğrafta, arabanın rengi açıkça
              görülmeli.
            </p>
            <p className="my-[10px]">
              <strong>2.15.</strong> Fotoğraflar, arabanın mevcut haliyle
              gösterilmelidir.
            </p>
            <p className="my-[10px]">
              <strong>2.16.</strong> UA kazalı ise, kullanıcı ilanı
              yerleştirirken bunu kesinlikle belirtmelidir. O zaman İlana
              "Kazalı" işareti konulacak.
            </p>
          </section>

          {/* Price */}
          <section className="my-[10px]">
            <h2 className="font-bold my-[20px]">3. Fiyat</h2>
            <p className="my-[10px]">
              <strong>3.1.</strong> UA' nın tam değeri yazılmalı. Eğer bir UA
              kredide ise, kredi şartları ilanın açıklamasında belirtilmelidir.
            </p>
            <p className="my-[10px]">
              <strong>3.2.</strong> Fiyat araca uygun olarak veya piyasa
              değerine uygun olmalıdır. Sitede fiyat olarak 0 veya 1 rakamlarını
              kullanan fiyatsız ilanlar kabul edilmeyecektir.
            </p>
          </section>

          {/* Description */}
          <section className="my-[10px]">
            <h2 className="font-bold my-[20px]">4. Açıklama</h2>
            <p className="my-[10px]">
              <strong>4.1.</strong> Resimdeki bilgiler hakaret veya reklam
              niteliğinde olmamalıdır.
            </p>
            <p className="my-[10px]">
              <strong>4.2.</strong> Cep telefonu numarası veya diğer iletişim
              bilgileri girmek yasaktır.
            </p>
            <p className="my-[10px]">
              <strong>4.3.</strong> Resimde yazılan bilgiler, alanın içinde
              yazılan bilgilerle uyumlu olmalıdır.
            </p>
          </section>

          {/* Means of Communication */}
          <section className="my-[10px]">
            <h2 className="font-bold my-[20px]">5. İletişim Araçları</h2>
            <p className="my-[10px]">
              <strong>5.1.</strong> Kişisel iletişim araçları doğru
              yazılmalıdır: isim, e-posta adresi, telefon numarası.
            </p>
            <p className="my-[10px]">
              <strong>5.2.</strong> İlan yayınlandıktan sonra telefon
              numarasıyla ilgili herhangi bir değişiklik yapılmamaktadır.
            </p>
            <p className="my-[10px]">
              <strong>5.3.</strong> Reklamda herhangi bir değişiklik yapmak
              için, ilan yayınlandığında e-posta adresinize gelen PIN numaranızı
              girin. Eğer e-posta adresinizi yanlış yazdıysanız veya ilanın PIN
              kodunu kaybettiyseniz, bu durumda şifre telefon numaranıza
              gönderilebilir (bu hizmet ücretlidir 100 TL).
            </p>
            <p className="my-[10px]">
              <strong>5.4.</strong> İlanda telefon numarası yanlış yazılmışsa,
              ilan siteden silinecektir.
            </p>
            <p className="my-[10px]">
              <strong>5.5.</strong> Kullanıcı, yayınladığı ilanın doğruluğu,
              eksiksizliği, onun Kuzey Kıbrıs Türk Cumhuriyeti Kanunlarına
              uygunluğu, yayınlanan bilgilerin üçüncü kişilerin haklarını ihlal
              etmemesi ve onların iddialarından muaf olması konusunda
              sorumludur.
            </p>
          </section>
          {/* Amending the ad */}
          <section className="my-[10px]">
            <h2 className="font-bold my-[20px]">6. İlan düzeltmesi</h2>
            <p className="my-[10px]">
              <strong>6.1.</strong> İlanı düzeltmek için ilana gidin ve ‘İlanı
              Düzenle’ tuşuna basın. Yayınlanmamış ilanlar düzenlenemez.
            </p>
            <p className="my-[10px]">
              <strong>6.2.</strong> Günde sadece iki kez değiştirilebilir.
            </p>
            <p className="my-[10px]">
              <strong>6.3.</strong> Bu bilgilerle ilgili herhangi bir değişiklik
              yapılmamaktadır: iletişim bilgileri, marka, model, imalat yılı.
            </p>
            <p className="my-[10px]">
              <strong>6.4.</strong> Değiştirilmiş ilan kurallara uygun değilse,
              değişiklik kabul edilmez.
            </p>
            <p className="my-[10px]">
              <strong>6.5.</strong> Değişiklik yapıldıktan sonra, ilan bir saat
              içersinde kontrolden geçer.
            </p>
          </section>
          {/*Black list */}
          <section className="my-[10px]">
            <h2 className="font-bold my-[20px]">7. Siyah liste</h2>
            <p className="my-[10px]">
              <strong>7.1.</strong> Operatöre veya moderatöre karşı saygısızlık
              yapan kullanıcıların iletişim araçları engelleniyor ve{" "}
              <a href="/" className="text-link underline">
                Kibcar.com
              </a>
              ' da reklam yayınlayamıyor!
            </p>
            <p className="my-[10px]">
              <strong>7.2.</strong> İlanda fiyatı değiştiren ve sonra telefonda
              başka bir fiyat söyleyen, başka bir UA' nın fotoğrafını
              yerleştiren veya diğer kuralları ihlal eden kullanıcılar kara
              listeye alınacak ve{" "}
              <a href="/" className="text-link underline">
                Kibcar.com
              </a>
              ' da daha fazla reklam yerleştiremeyecekler!
            </p>
            <p className="my-[10px]">
              <strong>7.3.</strong> “Tekrar İlan” hizmetinin kurallarını ihlal
              ettiği takdirde, kullanıcı ilk kez uyarılır, kuralları tekrar
              ihlal ederse kara listeye alınır.
            </p>
            <p className="my-[10px]">
              <strong>7.4.</strong> Özel bir kişi (sıradan bir kullanıcı)
              tarafından yerleştirilen araç ilanlarının bir salon tarafından
              satıldığı tespit edildiğinde, ilan silinecek ve kullanıcının
              iletişim araçları kara listeye eklenecektir. Bu durumda ödediğiniz
              para iade edilmez.
            </p>
            <p className="my-[10px]">
              <strong>7.5.</strong> İletişim bilgilerini kara listeden çıkarmak
              mümkün değil.
            </p>
            <p className="my-[10px]">
              <strong>7.6.</strong> Üçüncü bir kişinin iletişim araçları
              kaydedildiğinde ve şikayet edildiğinde, iletişim bilgileri kara
              listeye alınır.
            </p>
          </section>
          {/* Car dealerships and other persons engaged in commercial activities */}
          <section className="my-[10px]">
            <h2 className="font-bold my-[20px]">
              8. Galeriler ve diğer ticari faaliyetlerle uğraşan kişiler
            </h2>
            <p className="my-[10px]">
              <strong>8.1.</strong> Kullanıcının ticari faaliyetlerde bulunduğu
              tespit edilirse, kişisel hesabı ticari faaliyetlerde bulunan
              kişiler için tasarlanmış bir hesaba kaydedilecektir.
            </p>
            <p className="my-[10px]">
              <strong>8.2.</strong> Yukarıda belirtilen tüm kurallar, otomobil
              salonları ve ticari faaliyetlerle uğraşan diğer kişiler için de
              geçerlidir.
            </p>
            <p className="my-[10px]">
              <strong>8.3.</strong> Otomobil salonları ve diğer ticari
              faaliyetlerle uğraşan kişiler için her bir İlanın fiyatı 600 Tl
              dir.
            </p>
            <p className="my-[10px]">
              <strong>8.4.</strong> İlanın onarımı ücretlidir. Hizmetin ücreti
              600 TL.
            </p>
            <p className="my-[10px]">
              <strong>8.5.</strong> Otomotiv salonuna reklam vermek için ücretli
              paketlerden birini satın almanız gerekir. Her paketin belirli bir
              ilan sayısı (sınırı) vardır. Paket bir ay boyunca aktif. Pakette
              belirtilen ilan limiti bittiğinde, her bir sonraki ilanın fiyatı
              600 TL'dir.
            </p>
            <p className="my-[10px]">
              <strong>8.6.</strong> Resmi temsilciler{" "}
              <a href="/" className="text-link underline">
                Kibcar.com
              </a>
              'da çok marka bir sayfa oluşturamaz. Temsil ettikleri her araç
              markası için ayrı bir sayfa oluşturulmalı. Resmi temsilcisi
              olmayan otomobil salonları için bu kural geçerli değildir.
            </p>
            <p className="my-[10px]">
              <strong>8.7.</strong> Resmi temsilci (bundan sonra distribütör)
              bir veya daha fazla otomobil markasının resmi satıcısı veya
              distribütörü statüsüne sahip bir otomobil salonudur. Bu otomobil
              salonları, otomobil satışını gerçekleştirmek için ana
              üreticilerden veya distribütörlerden resmi izinler alıyor.
              <br />
              <br />
              <a href="/" className="text-link underline">
                Kibcar.com
              </a>
              'da resmi temsilcilerin bulunması, potansiyel alıcıların doğrudan
              üreticiden satılan otomobilleri satın almalarına olanak tanır.
              Resmi temsilcilerden araba satın alırken, alıcı ek bir garanti ve
              servis hizmeti alır. Kibcar.com'da resmi temsilci statüsünü almak
              için otomobil salonu aşağıdaki kriterleri karşılamalıdır:
              <br />
              <b>1.</b> Markanın resmi web sitesindeki temsilcilik bilgisi.
              <br />
              <b>2.</b> Otomobil salonu, otomobil satmak için ilgili üreticiden
              veya distribütörden resmi bir izin almalıdır.
              <br />
              <b>3.</b> Üreticiden ya da dağıtıcıdan gelen resmi bir belge.
              <br />
              <br />
              Resmi olmayan temsilcilerin, entelektüel mülkiyet hakları
              sahiplerinin izni olmadan logolarında sembolik kullanmaları
              yasaktır. Resmi olmayan otomobil salonları, isimlerinde veya
              otomotiv salonları hakkında bilgi vermek için "satıcı", "resmi
              satıcı" ve "distribütör" ifadelerini kullanamazlar.
              <br />
              <br />
              Logo (amblem) Ticari bir varlığı ayırt edebilen bir sembol
              kombinasyonu (kelimeler, harfler, rakamlar, grafik elemanlar vb.).
              <br />
              <br />
              Sembolik Çeşitli ticari işletmeler veya diğer işletmeler
              tarafından farklılaştırmak için kullanılan bir dizi sembol
              (harfler, kelimeler, grafik elemanları vb.).
            </p>
            <p className="my-[10px]">
              <strong>8.8.</strong> Galeri adına yerleştirilen ilanın geri
              kazanılması için ücretli ilanların bakiyesinin kullanılması
              mümkündür. Ücretli ilanların bakiyesini kullanırken, her ilanın
              geri kazanımı için ödeme 600 TL olacaktır.
            </p>
            <p className="my-[10px]">
              <strong>8.9.</strong>{" "}
              <a href="/" className="text-link underline">
                Kibcar.com
              </a>{" "}
              yönetimi, sitenin kurallarını kasıtlı olarak ihlal ettiği
              durumlarda sözleşmeyi iptal etme hakkını saklı tutar. Bu durumda
              ödediğiniz para iade edilmez.
            </p>
          </section>
          {/* Technical support service */}
          <section className="my-[10px]">
            <h2 className="font-bold my-[20px]">9. Teknik destek hizmeti</h2>
            <p className="my-[10px]">
              <strong>9.1.</strong> Teknik destek telefonları, haftanın 5 iş
              günü, saat 09:00'dan 15:00'a kadar çalışır.
            </p>
            <p className="my-[10px]">
              <strong>9.2.</strong> Teknik desteğe başvurduğunuzda ilan
              numarasını belirtmeniz gerekir. İlanın numarası, ilan
              yerleştirildiğinde e-posta adresinize gönderilir.
            </p>
            <p className="my-[10px]">
              Kural ihlalleri varsa, ücretli ilanlar bile iptal edilebilir.
            </p>
            <p className="my-[10px]">
              Hizmet zaten verilmişse, ücretli hizmetler için ödenen ücret geri
              ödenecek değildir. Ayrıca, hizmetin başlama zamanı daha sonra/daha
              önce değiştirilebilir ve hizmet başka bir tarihe aktarılamaz.
            </p>
            <p className="my-[10px]">
              Yayınlanmamış her ilan için, reklamı yayınlarken belirtilen
              e-posta adresine, ilanın neden kaldırıldığını açıklayan otomatik
              bir servis bildirimi (mesaj) gönderilir.
            </p>
            <p className="my-[10px]">
              <a href="/" className="text-link underline">
                Kibcar.com
              </a>{" "}
              Yönetimi, Kuralları önceden bildirmeden (uyarı vermeden) tek
              taraflı olarak herhangi bir zamanda değiştirme hakkını saklı
              tutar.
            </p>
            <p className="my-[10px]">
              Yönetimin yazılı izni olmadan herhangi bir bilgi, malzeme ve
              fotoğrafın kullanılması, yasa dışı sayılacak ve Kuzey Kıbrıs Türk
              Cumhuriyeti Kanunları uyarınca cezalandırılacaktır.
            </p>
          </section>
          <p className="my-[10px]">Son güncellenme: 12.02.2024</p>
        </div>
      </div>
    </div>
  );
}

export default Rules;

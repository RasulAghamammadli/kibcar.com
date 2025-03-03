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
              kibcar.com
            </a>{" "}
            sitesine ilan yerleştirilmesi bu{" "}
            <a href="/terms-and-conditions" className="text-link underline">
              Kullanıcı Sözleşmesi
            </a>{" "}
            (bundan sonra "Sözleşme" olarak anılacaktır) ile düzenlenir. Sitede
            belirtilen Kuralların ihlali veya reklamlarla ilgili çok sayıda
            kullanıcı şikayeti, ilanların ve aynı zamanda sahiplerinin
            hesaplarının bloke edilmesine yol açabilir. Tüm ilanların ek
            hizmetlerin ({" "}
            <a href="/" className="text-link underline">
              Premium
            </a>
            ,{" "}
            <a href="/" className="text-link underline">
              VIP
            </a>{" "}
            ve diğer) uygulanıp uygulanmadığına bakılmaksızın kurallara uygun
            olması gerektiğini unutmayın. Kural ihlali durumunda ödenmiş ilanlar
            bile bloke edilebilir veya silinebilir. Platformun tüm
            kullanıcılarına eşit koşullar sağlanması amacıyla herkes ilan
            yerleştirmeden önce{" "}
            <a href="/" className="text-link underline">
              kibcar.com
            </a>{" "}
            kurallarını okuyup uymalıdır.
          </p>

          {/* Posting of Advertisements */}
          <section className="my-[10px]">
            <h2 className="my-[10px]">1. İlanların Yerleştirilmesi</h2>
            <p className="my-[10px]">
              <strong>1.1.</strong> Kullanıcı, 30 gün içerisinde yalnızca bir
              ücretsiz ilan verebilir. Her yeni ilan ücretlidir - 12 USD. İlan
              süresi 30 gündür. İlan süresi dolmuş ve araç (bundan sonra “Araç”)
              satılmamışsa, kullanıcı bu ilanı 30 günlüğüne ya da hizmet
              süresine eşdeğer süreyle 12 USD ödeyerek veya ücretli bir hizmet
              uygulayarak yenileyebilir.
            </p>
            <p className="my-[10px]">
              <strong>1.2.</strong> Kullanıcı, 90 gün içinde aynı Araç için
              yalnız bir ücretsiz ilan verebilir. 90 gün içinde tekrarlanan veya
              benzer (marka/model, renk) ilan vermek ücretlidir. “Tekrarlanan
              İlan” hizmet ücreti 12 USD’dir. Yeni ilan yayınlandıktan sonra
              önceki ilan silinir.
            </p>
            <p className="my-[10px]">
              <strong>1.3.</strong> Sitedeki bir ilanda, Araç hakkında
              bilgilerin veya görsellerin başka bir Araca ait bilgilerle
              değiştirilmesi yasaktır.
            </p>
            <p className="my-[10px]">
              <strong>1.4.</strong> Aynı Araç birden fazla ilanda görülürse, her
              iki ilan da silinir. İki ilandan birini yeniden yayınlamak veya
              yeni bir ilan vermek için 12 USD ödenmelidir.
            </p>
            <p className="my-[10px]">
              <strong>1.5.</strong> Herhangi bir ilanın yeniden yayınlanması
              ücretlidir. Ücret: 12 USD.
            </p>
            <p className="my-[10px]">
              <strong>1.6.</strong> Ücretli bir hizmet, ilanın süresini uzatarak
              hizmetin uygulama süresince yeniler.
            </p>
            <p className="my-[10px]">
              <strong>1.7.</strong> “Sipariş Üzerine” statüsündeki ilanlar
              stokta olmayan Araçlar için geçerlidir.
            </p>
            <p className="my-[10px]">
              <strong>1.8.</strong> “Sipariş Üzerine” ilan verme imkanı yalnız
              resmi bayiler, otomobil galerileri ve sipariş üzerine araç
              teslimatında uzmanlaşmış şirketlere verilir.
            </p>
            <ol className="list-decimal pl-10 my-[10px]">
              <li className="my-[10px]">
                <a href="/" className="text-link underline">
                  "Sipariş Üzerine" ilanları yayımlamak için gereklilikler
                </a>
              </li>
            </ol>
            <p className="my-[10px]">
              <strong>1.9.</strong> "Sipariş Üzerine" ilanlarının yayımlanması
              ve yenilenmesi yalnız aktif bir iş paketi kapsamında mümkündür.
            </p>
            <p className="my-[10px]">
              <strong>1.10.</strong> Sipariş üzerine araç teslimatında
              uzmanlaşmış şirketlerin yalnızca “Sipariş Üzerine” statüsünde ilan
              vermesine izin verilir; “Satışta” statüsünde verilen ilanlar ise
              silinir.
            </p>
          </section>

          {/* Images */}
          <section className="my-[10px]">
            <h2 className="font-bold my-[10px]">2. Görseller</h2>
            <p className="my-[10px]">
              <strong>2.1.</strong> İlandaki görsellerin maksimum sayısı 21'dir.
              İlanda en az üç görsel bulunmalıdır (hasarlı Araçlar için zorunlu
              değildir): aracın ön kısmı, arka kısmı ve kabinin tam görünümü.
            </p>
            <p className="my-[10px]">
              <strong>2.2.</strong> Görsellerin minimum çözünürlüğü 1024x768
              pikseldir.
            </p>
            <p className="my-[10px]">
              <strong>2.3.</strong> Görseller yüksek kalitede olmalıdır.
            </p>
            <p className="my-[10px]">
              <strong>2.4.</strong> Karanlıkta çekilen görseller yalnızca Araç
              yapay olarak yeterince aydınlatıldığında kabul edilir.
            </p>
            <p className="my-[10px]">
              <strong>2.5.</strong> Ekran görüntüleri kabul edilmez. Çerçeveli
              ya da beyaz/siyah kenarlıklı görseller yayımlanmaz.
            </p>
            <p className="my-[10px]">
              <strong>2.6.</strong> Araç, Kıbrıs Cumhuriyeti topraklarında
              çekilmelidir.
            </p>
            <p className="my-[10px]">
              <strong>2.7.</strong> Görsellerde kibcar.com veya başka bir logo
              olmamalıdır.
            </p>
            <p className="my-[10px]">
              <strong>2.8.</strong> Görsellerdeki ufuk çizgisi, görselin üst ve
              alt çizgilerine paralel olmalıdır.
            </p>
            <p className="my-[10px]">
              <strong>2.9.</strong> Plakayı ve kişileri gizlemek için kullanılan
              çıkartmalar ve ifadeler yasaktır.
            </p>
            <p className="my-[10px]">
              <strong>2.10.</strong> Görsellerde reklam içeren bilgi
              olmamalıdır.
            </p>
            <p className="my-[10px]">
              <strong>2.11.</strong> Görsellerde iletişim bilgileri yer
              almamalıdır.
            </p>
            <p className="my-[10px]">
              <strong>2.12.</strong> Bir galeride çekilen görseller yalnızca o
              galeri adına yayımlanabilir.
            </p>
            <p className="my-[10px]">
              <strong>2.13.</strong> Başka kişilerin araç görsellerinin veya
              internetten alınan görsellerin kullanılması yasaktır.
            </p>
            <p className="my-[10px]">
              <strong>2.14.</strong> Görselde aracın rengi net görünmelidir.
            </p>
            <p className="my-[10px]">
              <strong>2.15.</strong> Araç, mevcut durumu yansıtacak şekilde
              gösterilmelidir.
            </p>
            <p className="my-[10px]">
              <strong>2.16.</strong> Araç hasarlı ise, ilan verilirken bu
              mutlaka belirtilmelidir ve ilanda "Hasarlı" ibaresi görünür.
            </p>
            <p className="my-[10px]">
              <strong>2.17.</strong> "Sipariş Üzerine" ilanları için görseller,
              Kıbrıs Cumhuriyeti içinde, yurt dışında veya yalnızca resmi
              bayiler için kullanılan konfigüratör ile çekilebilir.
            </p>
            <ol className="list-decimal pl-10 my-[10px]">
              <li className="my-[10px]">
                ”Sipariş Üzerine” İlanları için Ek Gereklilikler
              </li>
            </ol>
            <p className="my-[10px]">
              <strong>2.18.</strong> "Sipariş Üzerine" ilanlarında minimum yedi
              görsel bulunmalıdır: Dış görünüm (sol, sağ, ön, arka) ve iç
              görünüm (ön ve arka koltuklar ile ön panel).
            </p>
            <p className="my-[10px]">
              <strong>2.19.</strong> Aynı görselli "Sipariş Üzerine" ilanlarının
              yüklenmesi yasaktır.
            </p>
          </section>

          {/* Price */}
          <section className="my-[10px]">
            <h2 className="font-bold my-[10px]">3. Fiyat</h2>
            <p className="my-[10px]">
              <strong>3.1.</strong> Araç fiyatı tam olarak belirtilmelidir. Araç
              kredi ile alınacaksa, kredi koşulları açıklamada belirtilmelidir.
              Peşinat tutarı "Fiyat" alanında gösterilmemelidir.
            </p>
            <p className="my-[10px]">
              <strong>3.2.</strong> "Sipariş Üzerine" araçların fiyatı, gümrük
              işlemleri, Azerbaycan’a teslimat ve diğer masraflar dahil edilerek
              son fiyatına mümkün olduğunca yakın olmalıdır. Satıcı tarafından
              bilerek yanlış bilgi verildiği veya fiyat manipülasyonu yapıldığı
              tespit edilirse,{" "}
              <a href="/" className="text-link underline">
                kibcar.com
              </a>{" "}
              kısıtlama önlemleri alabilir. Buna,{" "}
              <a href="/" className="text-link underline">
                kibcar.com
              </a>{" "}
              sitesinde ilan vermek için girişin kısıtlanması ve kullanılmamış
              hizmetlerin iade edilmemesi de dahildir.
            </p>
          </section>

          {/* Description */}
          <section className="my-[10px]">
            <h2 className="font-bold my-[10px]">4. Açıklama</h2>
            <p className="my-[10px]">
              <strong>4.1.</strong> Açıklamalarda aşağılayıcı ifadeler ve reklam
              içeren bilgiler olmamalıdır.
            </p>
            <p className="my-[10px]">
              <strong>4.2.</strong> Mobil numara veya diğer iletişim bilgileri
              girilmemelidir.
            </p>
            <p className="my-[10px]">
              <strong>4.3.</strong> Açıklamada yazılan bilgi, belirlenen
              alandaki bilgiyle uyumlu olmalıdır.
            </p>
          </section>

          {/* Means of Communication */}
          <section className="my-[10px]">
            <h2 className="font-bold my-[10px]">5. İletişim Bilgileri</h2>
            <p className="my-[10px]">
              <strong>5.1.</strong> Ad, e-posta adresi ve telefon numarası gibi
              kişisel iletişim bilgileri doğru belirtilmelidir.
            </p>
            <p className="my-[10px]">
              <strong>5.2.</strong> İlan yayımlandıktan sonra telefon
              numarasında değişiklik yapılamaz.
            </p>
            <p className="my-[10px]">
              <strong>5.3.</strong> İlan düzenlemek için, ilan yayımlandığında
              e-posta adresinize gönderilen PIN kodunu girin. E-posta adresinizi
              yanlış yazdıysanız veya PIN kodunu kaybettiyseniz, kod telefon
              numaranıza gönderilebilir (bu hizmet ücretlidir – 1 USD).
            </p>
            <p className="my-[10px]">
              <strong>5.4.</strong> Telefon numarası yanlış ise, ilan siteden
              kaldırılacaktır.
            </p>
            <p className="my-[10px]">
              <strong>5.5.</strong> Kullanıcı, ilanın doğruluğu, tamlığı, Kıbrıs
              Cumhuriyeti yasalarına uygunluğu, üçüncü şahısların haklarını
              ihlal etmemesi ve taleplerden muaf olması konusunda sorumludur.
            </p>
          </section>
          {/* Amending the ad */}
          <section className="my-[10px]">
            <h2 className="font-bold my-[10px]">6. İlanın Düzenlenmesi</h2>
            <p className="my-[10px]">
              <strong>6.1.</strong> İlanı düzenlemek için ilana girin ve
              “Düzenle” düğmesine tıklayın. Yayımlanmamış ilanlar düzenlenemez.
            </p>
            <p className="my-[10px]">
              <strong>6.2.</strong> Bir gün içinde yalnızca iki kez değişiklik
              yapılabilir.
            </p>
            <p className="my-[10px]">
              <strong>6.3.</strong> Bu bilgilerde değişiklik yapılmaz: iletişim
              bilgileri, marka, model, üretim yılı.
            </p>
            <p className="my-[10px]">
              <strong>6.4.</strong> Düzenlenen ilan kurallara uygun değilse,
              değişiklik kabul edilmez.
            </p>
            <p className="my-[10px]">
              <strong>6.5.</strong> Düzenleme yapıldıktan sonra ilan bir saat
              içinde kontrol edilir.
            </p>
          </section>
          {/*Black list */}
          <section className="my-[10px]">
            <h2 className="font-bold my-[10px]">7. Kara Liste</h2>
            <p className="my-[10px]">
              <strong>7.1.</strong> Operatöre veya moderatöre saygısızlık eden
              kullanıcının iletişim bilgileri engellenir ve{" "}
              <a href="/" className="text-link underline">
                kibcar.com
              </a>{" "}
              sitesinde ilan veremez.
            </p>
            <p className="my-[10px]">
              <strong>7.2.</strong> Telefonda farklı fiyat söyleyen, başka
              Araçların görsellerini kullanan veya diğer kuralları ihlal eden
              kullanıcı kara listeye alınır ve{" "}
              <a href="/" className="text-link underline">
                kibcar.com{" "}
              </a>{" "}
              sitesinde ilan veremez.
            </p>
            <p className="my-[10px]">
              <strong>7.3.</strong> “Tekrarlanan ilan” kurallarını ihlal eden
              kullanıcıya ilk ihlalde uyarı yapılır, tekrar ihlal ederse kara
              listeye alınır.
            </p>
          </section>
          {/* Car dealerships and other persons engaged in commercial activities */}
          <section className="my-[10px]">
            <h2 className="font-bold my-[10px]">
              8. Galeriler ve Ticari Faaliyet Yürüten Diğer Kişiler
            </h2>
            <p className="my-[10px]">
              <strong>8.1.</strong> Kullanıcının ticari faaliyet yürüttüğü
              tespit edilirse, hesabı ticari faaliyet için tasarlanmış hesaba
              aktarılır.
            </p>
            <p className="my-[10px]">
              <strong>8.2.</strong> Yukarıda belirtilen tüm kurallar galerilere
              ve diğer ticari faaliyet yürüten kişilere de uygulanır.
            </p>
          </section>
          {/* Technical support service */}
          <section className="my-[10px]">
            <h2 className="font-bold my-[10px]">9. Teknik Destek</h2>
            <p className="my-[10px]">
              <strong>9.1.</strong>Teknik destek hattı haftanın 7 günü 09:00 -
              19:00 saatleri arasında çalışır.
            </p>
            <p className="my-[10px]">
              <strong>9.2.</strong> Destekle iletişime geçerken, ilan numarasını
              belirtmek zorunludur. İlan numarası, ilan yayımlandığında e-posta
              adresinize gönderilir.
            </p>
            <p className="my-[10px]">
              Eğer bir kural ihlali yapılmışsa, ödemesi yapılmış ilanlar bile
              iptal edilebilir.
            </p>
            <p className="my-[10px]">
              Yayımlanmamış her ilan için, ilanın silinme nedenini açıklayan
              otomatik bir bildirim, kullanıcının ilan sırasında belirttiği
              e-posta adresine gönderilir.{" "}
            </p>
            <p className="my-[10px]">
              <a href="/" className="text-link underline">
                kibcar.com
              </a>{" "}
              Yönetimi, Kuralları herhangi bir zamanda tek taraflı olarak ve
              önceden bildirimde bulunmaksızın değiştirme hakkını saklı tutar.
            </p>
            <p className="my-[10px]">
              Herhangi bir bilgi, materyal veya fotoğrafın yönetimin yazılı izni
              olmadan kullanılması yasa dışı kabul edilecek ve Kıbrıs
              Cumhuriyeti Yasalarına göre cezalandırılacaktır.
            </p>
          </section>
          <p className="my-[10px]">Son güncelleme tarihi – 20.11.2024</p>
        </div>
      </div>
    </div>
  );
}

export default Rules;

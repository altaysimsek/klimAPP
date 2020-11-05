
<p align="center">
  <a href="https://github.com/altaysimsek/shortcutIO">
    <img alt="klima" src="./public/img/klimalogo.png" width="150" />
  </a>
</p>
<p align="center">Basitçe size hava durumunu gösterir.</p>

---
## 🔱Amacım

Bu proje geliştirdiğim ilk express projesi diyebilirim , bu projeyi yaparak basitçe internette ulaşabildiğim ücretsiz API leri nasıl kullanabileceğimi ve nasıl kullanmam gerektiğini basitçe öğrenmiş oldum . Adres çubuğundaki query ve parametlere nasıl erişeceğimi ve buradaki değişimlere göre nasıl aksiyon alacağımı ilk bu proje ile deneyimledim.

**Bu projenin son halinin reposu değil!**


Bu projeyi yaparken aynı zamanda **git**'i kullanmayı ve ./node_modules veya saklamam gereken dosyaları(API tokenlar gibi) nasıl saklamam gerektiği ile ilgili temel bilgileri öğrendim.İlk yaptığım sırada bunları tam bilmediğim için farklı bi repoda yayına almıştım fakat o repo gizli durumda.

## 🦄 Çalıştırmak için
Projeyi kullanmak için , önce klonlayıp **darkSky** ve **mapBox** üzerinden api token'i aldıktan sonra
**src/utils/key.js** dosyasında ki değişkenleri değiştirmeniz yeterli.
 

	const  darkSkyKey  =  '<your api key>'
    const  mapBoxKey  =  '<your api key>'
    module.exports  =  {darkSkyKey,mapBoxKey}

Server'ı başlatmak için ;

	node src/app.js



## Ekran Görüntüleri

![thumbnail](/public/img/thumbnail.png)


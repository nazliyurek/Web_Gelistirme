# Modern To-Do Uygulaması (React & Bootstrap)

Bu proje, modern web geliştirme prensipleri ve React (Vite) kullanılarak geliştirilmiş; kullanıcı dostu, estetik ve işlevsel bir **To-Do (Yapılacaklar Listesi)** web uygulamasıdır. 

Proje, temel CRUD (Ekleme, Listeleme, Güncelleme, Silme) operasyonlarını yerine getirirken aynı zamanda modüler bir klasör mimarisine ve yerel depolama (`LocalStorage`) desteğine sahiptir.

---

## Kullanılan Teknolojiler

* **React (Vite):** Bileşen tabanlı modern kullanıcı arayüzü kütüphanesidir.
* **Bootstrap 5 & Bootstrap Icons:** Hızlı, duyarlı (responsive) ve şık tasarım bileşenleri ile modern ikon setidir.
* **JavaScript (ES6+):** Temel mantık ve uygulama işlevselliği için kullanılmıştır.
* **LocalStorage API:** Sayfa yenilense veya tarayıcı kapatılsa dahi verilerin kalıcı olarak saklanmasını sağlar.

---

## Proje Dosya Mimarisi

Proje, sürdürülebilir ve temiz kod standartlarına uygun olarak şu modüler klasör yapısıyla organize edilmiştir:

```text
todo-app/
│
├── public/              # Statik dosyalar
├── src/
│   ├── Components/      # Yeniden kullanılabilir alt bileşenler (TodoForm, TodoList vb.)
│   ├── Interfaces/      # Veri şablonları ve yapıları (todo.js)
│   ├── Pages/           # Sayfa bileşenleri (TodoPage.jsx)
│   ├── App.css          # Özel stiller ve animasyonlar
│   ├── App.jsx          # Ana kök bileşen
│   ├── index.css        # Genel stil sıfırlamaları ve animasyon tanımları
│   └── main.jsx         # Uygulama giriş noktası
│
├── .gitignore
├── package.json
└── README.md
```


### Kurulum ve Çalıştırma Rehberi

Projeyi kendi bilgisayarınızda yerel ortamda çalıştırmak için aşağıdaki adımları sırasıyla takip edebilirsiniz:

Adım 1: Terminal veya komut satırını açarak projenin bulunduğu klasör dizinine geçiş yapın:
cd Web_Gelistirme

Adım 2: Projenin bağımlılıklarını kurmak için şu komutu çalıştırın:
npm install

Adım 3: Projeyi yerel sunucuda ayağa kaldırmak için şu komutu çalıştırın:
npm run dev

Adım 4: Terminalde verilen yerel bağlantıyı (http://localhost:5173) tarayıcınıza kopyalayarak uygulamayı kullanmaya başlayabilirsiniz.
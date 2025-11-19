## 🐦 MERN Twitter Clone

Bu proje, MERN Stack kullanılarak geliştirilmiş modern bir Twitter benzeri sosyal medya uygulamasıdır.
Kullanıcılar tweet paylaşabilir, beğenebilir, yorum yapabilir, takip edebilir, profil düzenleyebilir ve gerçek zamanlı bildirimler alabilir.

🔗 [GitHub Projesi](https://github.com/MuhammedZeki/Twitter-clone)

---

## ✨ Özellikler

- Tweet oluşturma, silme ve görüntüleme
- Postları beğenme / beğeniyi geri alma
- Paylaşımlara yorum yapma
- Kullanıcı takip etme / takipten çıkma sistemi
- Takip edilen kullanıcıların gönderilerini içeren feed
- Profil sayfası (postlar, beğeniler, takip & takipçi listesi)
- Kullanıcı bilgilerini düzenleme (isim, kullanıcı adı, biyografi, link, profil & kapak fotoğrafı)
- Cloudinary ile resim yükleme desteği
- Gerçek zamanlı bildirimler (takip & beğeni bildirimleri)
- Giriş / Kayıt / Çıkış işlemleri (JWT + HTTP Only Cookie)
- Mobil uyumlu modern UI

---

## 🧰 Kullanılan Teknolojiler

Backend
- Express.js – Node.js web uygulama frameworkü
- MongoDB + Mongoose – NoSQL veritabanı ve ODM aracı
- JWT + HTTP Only Cookies – Kimlik doğrulama ve güvenli session yönetimi
- Cloudinary – Resim yükleme ve medya yönetimi
- Bcrypt.js – Şifre hashing işlemleri
- Cookie-parser, CORS, dotenv – Yardımcı middleware’ler

Frontend
- React – UI tasarımı
- React Router DOM – Sayfa yönlendirme
- React Query (TanStack Query) – Server-state yönetimi & cache
- Tailwind CSS + DaisyUI – Modern ve hızlı UI geliştirme
- React Icons – UI ikonları
- React Toastify – Bildirim sistemi

Dev & Build
- Vite – Frontend geliştirme ve build aracı
- Nodemon – Geliştirme sunucusu otomasyonu

---

## ⚙️ Kurulum

1. Bu repoyu klonlayın:

```bash
git clone https://github.com/MuhammedZeki/Twitter-clone.git
cd Twitter-clone
```

2. Frontend paketleri yükleyin:

```bash
cd ./frontend
npm install
```

3. Backend paketleri yükleyin:

```bash
npm install
```

4. Ortam değişkenlerini `.env.local` dosyasında tanımlayın (örnek dosya içinde olabilir):

```env
MONGODB_URI=...
PORT=your_secret=...
JWT_SECRET=...
CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
```

5. Frontend kısmı başlatın:

```bash
cd ./frontend
npm run dev
```

6. Frontend kısmı başlatın:

```bash
npm run dev
```

---

## 🧪 Kullanım

- Ana sayfada takip ettiğiniz kullanıcıların tweetlerini görebilirsiniz.
- Yeni tweet oluşturabilir, var olan tweetleri beğenebilir veya yorum yapabilirsiniz.
- Kullanıcıları takip ederek feed’inizi kişiselleştirebilirsiniz.
- Profil sayfanızdan kişisel bilgilerinizi (isim, kullanıcı adı, biyografi, link, profil ve kapak fotoğrafı) güncelleyebilirsiniz.
- Beğendiğiniz tweetleri ve kendi paylaşımlarınızı görüntüleyebilirsiniz.
- Bildirimler sayesinde sizi takip eden kullanıcıları ve tweet beğenilerini görebilirsiniz.

---

## 🔐 Test Girişi

Teste erişmek için:

🧑 **Kullanıcı Adı:** `MuhammedZeki__`  
🔑 **Şifre:** `123456`

> ⚠️ Bu bilgiler sadece geliştirme ortamı içindir. Üretime geçerken güvenlik için mutlaka değiştirin!

---

## 👨‍💻 Geliştirici

**Muhammed Zeki**  
🔗 [GitHub Profilim](https://github.com/MuhammedZeki)

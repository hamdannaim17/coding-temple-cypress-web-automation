# coding-temple-cypress-web-automation

# Cypress Web Automation — Coding Temple

Repositori ini berisi latihan, *challenge*, dan dokumentasi pengujian otomatis **End-to-End (E2E)** serta **API Testing** menggunakan **Cypress** pada kelas **Coding Temple (Web Automation)**, dengan target praktik utama pada **The Internet (Herokuapp)**, **JSONPlaceholder**, dan **Cypress TodoMVC**.

---

## Ringkasan Materi & Struktur Proyek

* **Lesson 1 — Advanced CSS Selectors & Page Interactions**
  * Latihan *Dynamic Loading* (`timeout`, `.should('be.visible')`, `.and('contain', ...)`).
  * **Challenge 1 (Form Authentication)**: Automasi login (`tomsmith` / `SuperSecretPassword!`), verifikasi area `/secure` dan tombol logout, lalu logout kembali ke `/login`.
  * **Challenge 2 (Hover Over)**: Iterasi elemen `.figure`, menampilkan informasi user saat hover (`.figcaption`), verifikasi nama user, dan navigasi ke profil.
  * **Challenge 3 (Dynamic Controls)**: Penghapusan/penambahan checkbox (`not.exist`, `be.visible`) serta mengaktifkan dan mengisi input field (`be.enabled`).
  * **Challenge 4 (JavaScript Alerts)**: Menangani `window:alert`, menerima/membatalkan `window:confirm`, dan mengisi `window:prompt` dengan `cy.stub`.
  * **Challenge 5 (Drag and Drop)**: Simulasi perpindahan kotak HTML5 dengan `DataTransfer` dan `.trigger('dragstart' / 'drop')`.
  * **Challenge 6 (Floating Menu)**: Verifikasi visibilitas menu saat *scroll* ke bawah (`cy.scrollTo('bottom')`) dan navigasi *anchor* URL.

* **Lesson 2 — Debugging in Cypress**
  * Menggunakan `cy.log()` untuk melacak alur eksekusi di Command Log dan `.debug()` bersama Browser DevTools untuk inspeksi DOM/state.
  * Penanganan masalah umum seperti *element not found*, *flaky test* pada konten dinamis, *timeout error* (`{ timeout: 10000 }`), *AJAX/API interception* (`cy.intercept()` + `cy.wait()`), serta *file upload* (`.selectFile()` pada Cypress modern).
  * Dokumentasi *problem*, *debugging approach*, dan *fix* untuk *Open Class Assignment*.

* **Lesson 3 — API Testing & Application State Setup**
  * Pengujian *endpoint* API langsung memakai `cy.request()` (`GET`, `POST`, `PUT`/`PATCH`, `DELETE`) dan validasi `response.status` serta `response.body`.
  * **Challenge 1 & 2**: Memperbarui data (`PUT`/`PATCH`) dan menghapus data (`DELETE`) melalui API serta memverifikasi responsnya.
  * **Challenge 3**: Menyiapkan data/state awal lewat `cy.request()` pada `beforeEach` sebelum menjalankan skenario interaksi UI.

* **Lesson 4 — Performance & Accessibility Testing**
  * Pengujian aksesibilitas menggunakan **`axe-core` (`cypress-axe`)** (`cy.injectAxe()` dan `cy.checkA11y()`) serta audit performa menggunakan **Lighthouse**.
  * **Temuan & Catatan Perbaikan**:
    * **Accessibility (`/dynamic_controls`)**: Terdeteksi **4 pelanggaran** saat halaman dimuat (`label` pada 2 node, `landmark-contentinfo-is-top-level`, `page-has-heading-one`, dan `region`), serta **5 pelanggaran** setelah tombol **Enable** diklik (bertambah isu `color-contrast` pada 1 node).
    * **Combined Audit (`/login`)**: Elemen `form#login` terverifikasi tampil (`be.visible`), sedangkan `cy.checkA11y()` mendeteksi **3 pelanggaran** (`heading-order`, `page-has-heading-one`, dan `region`).
    * **Rencana / langkah perbaikan**: Menambahkan `<label>` atau `aria-label` yang jelas pada elemen form/kontrol, menyusun heading secara berurutan dengan `<h1>`, membungkus konten utama dalam landmark `<main>`, meningkatkan kontras warna, serta mengoptimalkan aset/resource pada audit performa.

* **Lesson 5 — Cypress Best Practices & Maintainable Tests**
  * Menjaga test tetap *atomic* dan independen (`beforeEach`), menggunakan selector yang stabil, mengelola data uji lewat *fixtures* (`cypress/fixtures/loginUser.json`), menghindari *conditional testing* (`if/else`), membuat *custom command* (`cy.loginToHerokuApp()` di `cypress/support/commands.js`), dan menguji responsivitas layar dengan `cy.viewport()`.

---

## Prasyarat & Cara Menjalankan

1. **Instal dependensi proyek**:
   ```bash
   npm install
   ```
   *(Jika menginstal `cypress-axe` pada Cypress v16 dan muncul konflik peer dependency, gunakan `npm install -D axe-core cypress-axe --legacy-peer-deps`).*

2. **Buka Cypress Test Runner**:
   ```bash
   npx cypress open
   ```

3. Pilih **E2E Testing**, pilih browser yang tersedia, lalu klik file spec di dalam `cypress/e2e/` untuk menjalankan pengujian.

---

## Catatan Lingkungan
* Proyek menggunakan struktur Cypress modern (`cypress/e2e/` dan file spec berekstensi `.cy.js`).
* Pastikan `node_modules/` tercantum di dalam `.gitignore` sebelum melakukan `git add` dan `git push`.
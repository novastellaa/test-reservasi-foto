// pages/index.js
import Link from 'next/link';
import styles from '../styles/Reservasi.css';

export default function Home() {
  return (
    <div class='container'>
      <h1>Selamat Datang di Studio Foto Kami</h1>
      <p>Klik tombol di bawah untuk melakukan reservasi atau lihat riwayat pemesanan Anda.</p>
      <Link href="/reservasi">
        <button class="button">Reservasi Studio Foto</button>
      </Link>
      <Link href="/riwayat">
        <button class="button">Riwayat Pemesanan</button>
      </Link>
    </div>
  );
}

// pages/riwayat.js
export default function RiwayatPemesanan() {
  const reservations = [
    {
      id: 1,
      category: 'Studio Indoor',
      package: 'Paket A - 1 Jam',
      price: 500000,
      date: '2024-09-15 10:00',
      notes: 'Perlu background putih',
    },
    {
      id: 2,
      category: 'Studio Outdoor',
      package: 'Paket C - 1 Jam',
      price: 700000,
      date: '2024-09-20 14:00',
      notes: 'Foto di taman',
    },
  ];

  return (
    <div className="container">
      <h2>Riwayat Pemesanan</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Kategori</th>
            <th>Paket</th>
            <th>Harga</th>
            <th>Jadwal</th>
            <th>Catatan</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((res) => (
            <tr key={res.id}>
              <td>{res.id}</td>
              <td>{res.category}</td>
              <td>{res.package}</td>
              <td>Rp {res.price.toLocaleString()}</td>
              <td>{res.date}</td>
              <td>{res.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
        }
        th, td {
          padding: 10px;
          border: 1px solid #ddd;
          text-align: left;
        }
        th {
          background-color: #f4f4f4;
        }
      `}</style>
    </div>
  );
}

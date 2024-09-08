// pages/reservasi.js
import { useState } from 'react';

export default function Reservasi() {
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('');
  const [formData, setFormData] = useState({
    jadwal: '',
    catatan: '',
  });

  const categories = ['Studio Indoor', 'Studio Outdoor'];
  const packages = {
    'Studio Indoor': [
      { name: 'Paket A - 1 Jam', price: 500000 },
      { name: 'Paket B - 2 Jam', price: 900000 },
    ],
    'Studio Outdoor': [
      { name: 'Paket C - 1 Jam', price: 700000 },
      { name: 'Paket D - 2 Jam', price: 1200000 },
    ],
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setStep(2); // Lanjut ke pemilihan paket
  };

  const handlePackageSelect = (pkg) => {
    setSelectedPackage(pkg);
    setStep(3); // Lanjut ke pengisian jadwal
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logika untuk mengirim data pemesanan ke server
    console.log('Data Pemesanan:', { selectedCategory, selectedPackage, formData });
  };

  return (
    <div class="container">
      {step === 1 && (
        <div class="button h2">
          <h2>Pilih Kategori</h2>
          {categories.map((category) => (
            <button key={category} onClick={() => handleCategorySelect(category)}>
              {category}
            </button>
          ))}
        </div>
      )}

      {step === 2 && (
        <div class='button h2'>
          <h2>Pilih Paket ({selectedCategory})</h2>
          {packages[selectedCategory].map((pkg) => (
            <button key={pkg.name} onClick={() => handlePackageSelect(pkg)}>
              {pkg.name} - Rp {pkg.price.toLocaleString()}
            </button>
          ))}
        </div>
      )}

      {step === 3 && (
        <div class='button h2 label input textarea '>
          <h2>Isi Jadwal dan Catatan</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Jadwal Booking:</label>
              <input
                type="datetime-local"
                name="jadwal"
                value={formData.jadwal}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Catatan:</label>
              <textarea
                name="catatan"
                value={formData.catatan}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit">Pesan</button>
          </form>
        </div>
      )}
    </div>
  );
}

function createRencanaPengadaan(RencanaPengadaanData) {
    fetch('/api/procurement-plans', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(RencanaPengadaanData),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('gagal menambahkan rencana pengadaan');
      }
      return response.json();
    })
    .then(data => {
      console.log('Rencana Pengadaan berhasil ditambahkan:', data);
      
    })
    .catch(error => {
      console.error('Kesalahan menambahkan Rencana Pengadaan:', error);
      
    });
  }
  
  
  const newProcurementPlan = {
    rupCode: 123,
    packageName: 'Package A',
    name: 'Procurement Plan 1',
    ceilingValue: 100000,
    budgetYear: 2024,
    announcementDate: '2024-02-23T12:00:00',
    procurementType: 'Barang',
    procurementMethod: 'Pekerjaan Konstruksi',
    workLocation: 'Location A',
  };
  
  createRencanaPengadaan(newProcurementPlan);
  

  function getProcurementPlans() {
    fetch('/api/procurement-plans')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch Rencana Pengadaan');
      }
      return response.json();
    })
    .then(data => {
      console.log('Rencana Pengadaan:', data);
      
    })
    .catch(error => {
      console.error('Error fetching Rencana Pengadaan:', error);
      
    });
  }
  
  
  getProcurementPlans();
  
  
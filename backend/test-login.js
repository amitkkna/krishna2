const API_URL = 'http://localhost:5000/api';

async function testLogin() {
  console.log('🧪 Testing Login Endpoint\n');
  console.log('API URL:', API_URL);
  console.log('Testing with credentials:');
  console.log('  Email: admin@krishnacare.com');
  console.log('  Password: Admin@123\n');

  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'admin@krishnacare.com',
        password: 'Admin@123',
      }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log('✅ LOGIN SUCCESSFUL!\n');
      console.log('Response Status:', response.status);
      console.log('Token received:', data.token ? 'YES' : 'NO');
      console.log('User data:', {
        name: data.user?.name,
        email: data.user?.email,
        role: data.user?.role,
      });
      console.log('\n🎉 The login API is working correctly!');
      console.log('You can now login to the admin panel.');
    } else {
      console.log('❌ LOGIN FAILED\n');
      console.log('Response Status:', response.status);
      console.log('Error:', data.message || data.error);
      console.log('\n💡 Try running: node check-admin.js');
    }
  } catch (error) {
    console.log('❌ CONNECTION ERROR\n');
    console.log('Error:', error.message);
    console.log('\n💡 Make sure backend server is running:');
    console.log('   cd backend');
    console.log('   npm run dev');
  }
}

testLogin();

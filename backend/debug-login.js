// Complete Login Debug Script
console.log('🔍 Starting Login Debug...\n');

const API_URL = 'http://localhost:5000';

async function testBackend() {
  try {
    // Test 1: Health Check
    console.log('Test 1: Health Check');
    console.log('URL:', `${API_URL}/api/health`);
    
    const healthResponse = await fetch(`${API_URL}/api/health`);
    const healthData = await healthResponse.json();
    
    if (healthResponse.ok) {
      console.log('✅ Backend is running');
      console.log('Response:', healthData);
    } else {
      console.log('❌ Backend health check failed');
      console.log('Status:', healthResponse.status);
    }
  } catch (error) {
    console.log('❌ Cannot connect to backend');
    console.log('Error:', error.message);
    console.log('\n💡 Make sure backend is running:');
    console.log('   cd e:\\testingui\\kk2\\krishna-care-react\\backend');
    console.log('   npm run dev');
    return false;
  }

  console.log('\n' + '='.repeat(50) + '\n');

  try {
    // Test 2: Login Endpoint
    console.log('Test 2: Login Endpoint');
    console.log('URL:', `${API_URL}/api/auth/login`);
    console.log('Credentials:');
    console.log('  Email: admin@krishnacare.com');
    console.log('  Password: Admin@123');
    
    const loginResponse = await fetch(`${API_URL}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'admin@krishnacare.com',
        password: 'Admin@123',
      }),
    });

    const loginData = await loginResponse.json();
    
    console.log('\nResponse Status:', loginResponse.status);
    console.log('Response Data:', JSON.stringify(loginData, null, 2));

    if (loginResponse.ok && loginData.success) {
      console.log('\n✅ LOGIN SUCCESSFUL!');
      console.log('Token:', loginData.data?.token ? 'Received' : 'Missing');
      console.log('User:', loginData.data?.name, `(${loginData.data?.role})`);
      console.log('\n🎉 Backend login is working correctly!');
      console.log('The issue might be in the frontend.');
      return true;
    } else {
      console.log('\n❌ LOGIN FAILED');
      console.log('Message:', loginData.message);
      console.log('\n💡 Possible issues:');
      console.log('  1. Wrong credentials');
      console.log('  2. Admin user not created');
      console.log('  3. Password mismatch');
      console.log('\nRun this to reset admin:');
      console.log('  node check-admin.js');
      return false;
    }
  } catch (error) {
    console.log('\n❌ LOGIN TEST FAILED');
    console.log('Error:', error.message);
    return false;
  }
}

// Run the test
testBackend().then((success) => {
  console.log('\n' + '='.repeat(50));
  if (success) {
    console.log('\n✅ Backend is working correctly!');
    console.log('If frontend login fails, check:');
    console.log('  1. Browser console (F12)');
    console.log('  2. Network tab in DevTools');
    console.log('  3. CORS settings');
    console.log('  4. Frontend .env file (VITE_API_URL)');
  } else {
    console.log('\n❌ Backend has issues. Fix them first.');
  }
  console.log('');
});

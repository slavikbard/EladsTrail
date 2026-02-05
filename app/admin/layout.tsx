'use client';

import { useState, useEffect } from 'react';
import { Shield } from 'lucide-react';

const ADMIN_PASSWORD = 'elad2024';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem('admin_auth');
    if (stored === 'true') setAuthenticated(true);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem('admin_auth', 'true');
      setAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4" dir="rtl">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 w-full max-w-sm">
          <div className="flex items-center justify-center w-14 h-14 bg-[#1B263B] rounded-xl mx-auto mb-6">
            <Shield className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-xl font-bold text-[#1B263B] text-center mb-1">לוח בקרה</h1>
          <p className="text-sm text-gray-500 text-center mb-6">הזינו סיסמה כדי להיכנס</p>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(false); }}
              placeholder="סיסמה"
              className={`w-full px-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 transition-all ${
                error
                  ? 'border-red-300 focus:ring-red-200'
                  : 'border-gray-200 focus:ring-[#E85D04]/20 focus:border-[#E85D04]'
              }`}
              autoFocus
            />
            {error && <p className="text-red-500 text-xs">סיסמה שגויה</p>}
            <button
              type="submit"
              className="w-full bg-[#1B263B] text-white py-3 rounded-xl text-sm font-semibold hover:bg-[#2a3a52] transition-colors"
            >
              כניסה
            </button>
          </form>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}

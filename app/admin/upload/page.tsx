'use client';

import { useState } from 'react';
import { Upload, Check, AlertCircle } from 'lucide-react';

export default function ImageUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState('');
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      setError('בחר תמונה תחילה');
      return;
    }

    setUploading(true);
    setError('');

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('שגיאה בהעלאה');
      }

      const data = await response.json();
      setUploadedUrl(data.url);
      setFile(null);
    } catch (err) {
      setError('שגיאה בהעלאת התמונה');
      console.error(err);
    } finally {
      setUploading(false);
    }
  };

  const copyUrl = () => {
    navigator.clipboard.writeText(uploadedUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
        <h1 className="text-3xl font-bold text-[#1B263B] mb-8">העלאת תמונות</h1>

        <div className="bg-white rounded-lg border border-gray-200 p-8">
          <form onSubmit={handleUpload} className="space-y-6">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <Upload className="w-12 h-12 mx-auto text-gray-400 mb-4" />
              <label className="cursor-pointer">
                <span className="text-blue-600 hover:text-blue-700 font-medium">בחר תמונה</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setFile(e.target.files?.[0] || null)}
                  className="hidden"
                />
              </label>
              {file && (
                <p className="text-sm text-gray-600 mt-2">
                  {file.name}
                </p>
              )}
            </div>

            {error && (
              <div className="flex items-center gap-2 p-4 bg-red-50 text-red-700 rounded-lg">
                <AlertCircle className="w-5 h-5" />
                <span>{error}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={uploading || !file}
              className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition disabled:opacity-50 disabled:cursor-not-allowed font-medium"
            >
              {uploading ? 'מעלה...' : 'העלה'}
            </button>
          </form>

          {uploadedUrl && (
            <div className="mt-8 p-4 bg-green-50 rounded-lg">
              <div className="flex items-center gap-2 text-green-700 mb-4">
                <Check className="w-5 h-5" />
                <span className="font-medium">התמונה הועלתה בהצלחה!</span>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">URL</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={uploadedUrl}
                      readOnly
                      className="flex-1 p-2 border border-gray-300 rounded-lg bg-gray-50 text-sm"
                    />
                    <button
                      onClick={copyUrl}
                      className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                    >
                      {copied ? <Check className="w-5 h-5" /> : 'העתק'}
                    </button>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-2">תצוגה מקדימה:</p>
                  <img
                    src={uploadedUrl}
                    alt="Uploaded"
                    className="max-w-full h-auto rounded-lg border border-gray-300 max-h-96"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

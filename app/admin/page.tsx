"use client";

import { useState, useEffect } from "react";
import {
  getStoredSilifixImages,
  saveStoredSilifixImages,
  SilifixProductImage,
  INITIAL_SILIFIX_IMAGES,
} from "@/data/silifix-products";
import {
  getStoredFounderProfile,
  saveStoredFounderProfile,
  FounderProfile,
  DEFAULT_FOUNDER_PROFILE,
} from "@/data/founder-profile";
import {
  Plus,
  Trash2,
  MoveUp,
  MoveDown,
  Image as ImageIcon,
  ArrowLeft,
  RefreshCw,
  Upload,
  CheckCircle,
  User,
  Save,
} from "lucide-react";
import Link from "next/link";

export default function AdminPage() {
  const [images, setImages] = useState<SilifixProductImage[]>([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [newUrl, setNewUrl] = useState("");
  const [fileInput, setFileInput] = useState<File | null>(null);

  // Founder Profile State
  const [founder, setFounder] = useState<FounderProfile>(DEFAULT_FOUNDER_PROFILE);
  const [founderFile, setFounderFile] = useState<File | null>(null);

  const [savedSuccess, setSavedSuccess] = useState(false);
  const [founderSavedSuccess, setFounderSavedSuccess] = useState(false);

  useEffect(() => {
    setImages(getStoredSilifixImages());
    setFounder(getStoredFounderProfile());
  }, []);

  const saveImages = (updated: SilifixProductImage[]) => {
    setImages(updated);
    saveStoredSilifixImages(updated);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  const handleFounderPhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFounderFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setFounder((prev) => ({ ...prev, photoUrl: reader.result as string }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveFounderProfile = (e: React.FormEvent) => {
    e.preventDefault();
    saveStoredFounderProfile(founder);
    setFounderSavedSuccess(true);
    setTimeout(() => setFounderSavedSuccess(false), 2500);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileInput(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setNewUrl(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddImage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newUrl) return;

    const newItem: SilifixProductImage = {
      id: "silifix-" + Date.now(),
      url: newUrl,
      title: newTitle || "Silifix Silicone Product",
      description: newDesc || "Silicone product photography.",
      order: images.length + 1,
    };

    const updated = [...images, newItem];
    saveImages(updated);

    setNewTitle("");
    setNewDesc("");
    setNewUrl("");
    setFileInput(null);
  };

  const handleDelete = (id: string) => {
    const updated = images.filter((img) => img.id !== id);
    saveImages(updated);
  };

  const handleMove = (index: number, direction: "up" | "down") => {
    const newIdx = direction === "up" ? index - 1 : index + 1;
    if (newIdx < 0 || newIdx >= images.length) return;

    const copy = [...images];
    const temp = copy[index];
    copy[index] = copy[newIdx];
    copy[newIdx] = temp;

    const reordered = copy.map((item, i) => ({ ...item, order: i + 1 }));
    saveImages(reordered);
  };

  const handleUpdateItem = (id: string, field: "title" | "description" | "url", value: string) => {
    const updated = images.map((img) => (img.id === id ? { ...img, [field]: value } : img));
    saveImages(updated);
  };

  const handleResetDefault = () => {
    saveImages(INITIAL_SILIFIX_IMAGES);
    saveStoredFounderProfile(DEFAULT_FOUNDER_PROFILE);
    setFounder(DEFAULT_FOUNDER_PROFILE);
  };

  return (
    <div className="min-h-screen bg-[#F8F7E8] text-[#111615] p-6 sm:p-12 font-sans-body">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-8 border-b border-[#111615]/10 gap-4">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase text-[#00584F] hover:underline mb-2"
            >
              <ArrowLeft className="w-4 h-4" /> Back to ROVEX Studio Website
            </Link>
            <h1 className="text-3xl sm:text-4xl font-serif-heading font-bold text-[#111615]">
              ROVEX Admin Panel
            </h1>
            <p className="text-sm text-[#525C58] font-light mt-1">
              Manage Founder Profile (<strong className="text-[#00584F]">Pramod Raut</strong>) and Silifix product imagery.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleResetDefault}
              className="px-4 py-2 rounded-xl bg-[#F2F0DF] border border-[#E5E1C9] text-xs font-semibold text-[#111615] hover:bg-white transition-colors flex items-center gap-2"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Reset Defaults
            </button>
          </div>
        </div>

        {founderSavedSuccess && (
          <div className="mt-4 p-4 rounded-xl bg-[#00584F] text-[#F8F7E8] text-xs font-semibold flex items-center gap-2 shadow-md">
            <CheckCircle className="w-4 h-4" />
            <span>Founder profile updated! Check the website homepage to see live changes.</span>
          </div>
        )}

        {/* Section 1: Founder Profile Management */}
        <div className="mt-8 bg-[#F2F0DF] p-6 sm:p-8 rounded-3xl border border-[#E5E1C9] shadow-sm">
          <h2 className="text-2xl font-serif-heading font-bold text-[#111615] flex items-center gap-2 mb-2">
            <User className="w-6 h-6 text-[#00584F]" /> Founder Profile Settings (Pramod Raut)
          </h2>
          <p className="text-xs text-[#525C58] mb-6">
            Upload your portrait photo and update your details to display on the ROVEX website.
          </p>

          <form onSubmit={handleSaveFounderProfile} className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Photo Upload Column */}
            <div className="md:col-span-5 flex flex-col items-center text-center space-y-4">
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-[#00584F] shadow-xl bg-[#003832]">
                <img
                  src={founder.photoUrl}
                  alt={founder.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-full">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFounderPhotoUpload}
                  className="hidden"
                  id="founder-photo-upload"
                />
                <label
                  htmlFor="founder-photo-upload"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#00584F] text-[#F8F7E8] text-xs font-semibold uppercase tracking-wider cursor-pointer hover:bg-[#00453E] transition-all shadow-md"
                >
                  <Upload className="w-4 h-4" />
                  <span>Upload My Photo</span>
                </label>
                <p className="text-[10px] text-[#525C58] mt-1.5">
                  PNG, JPG, WEBP formats supported
                </p>
              </div>
            </div>

            {/* Form Fields Column */}
            <div className="md:col-span-7 space-y-4 text-xs">
              <div>
                <label className="font-semibold text-[#111615] block mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={founder.name}
                  onChange={(e) => setFounder({ ...founder, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8F7E8] border border-[#E5E1C9] text-xs font-semibold text-[#111615] focus:outline-none focus:border-[#00584F]"
                />
              </div>

              <div>
                <label className="font-semibold text-[#111615] block mb-1">
                  Title / Designation
                </label>
                <input
                  type="text"
                  value={founder.title}
                  onChange={(e) => setFounder({ ...founder, title: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8F8E8] border border-[#E5E1C9] text-xs text-[#111615] focus:outline-none focus:border-[#00584F]"
                />
              </div>

              <div>
                <label className="font-semibold text-[#111615] block mb-1">
                  Bio / Statement
                </label>
                <textarea
                  rows={3}
                  value={founder.bio}
                  onChange={(e) => setFounder({ ...founder, bio: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8F7E8] border border-[#E5E1C9] text-xs text-[#111615] focus:outline-none focus:border-[#00584F] resize-none"
                />
              </div>

              <div>
                <label className="font-semibold text-[#111615] block mb-1">
                  Or Photo Image URL
                </label>
                <input
                  type="url"
                  placeholder="https://..."
                  value={founder.photoUrl}
                  onChange={(e) => setFounder({ ...founder, photoUrl: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8F7E8] border border-[#E5E1C9] text-xs text-[#111615] focus:outline-none focus:border-[#00584F]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#00584F] text-[#F8F7E8] font-semibold text-xs uppercase tracking-wider hover:bg-[#00453E] transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <Save className="w-4 h-4" />
                <span>Save Founder Profile</span>
              </button>
            </div>
          </form>
        </div>

        {/* Section 2: Silifix Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-10">
          <div className="lg:col-span-5 bg-[#F2F0DF] p-6 sm:p-8 rounded-3xl border border-[#E5E1C9] shadow-sm">
            <h2 className="text-xl font-serif-heading font-bold text-[#111615] flex items-center gap-2 mb-4">
              <Plus className="w-5 h-5 text-[#00584F]" /> Add Silifix Product Image
            </h2>

            <form onSubmit={handleAddImage} className="space-y-4 text-xs">
              <div>
                <label className="font-semibold text-[#111615] block mb-1">
                  Upload Image File
                </label>
                <div className="border-2 border-dashed border-[#E5E1C9] p-4 rounded-2xl bg-[#F8F7E8] text-center">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="admin-file-upload"
                  />
                  <label
                    htmlFor="admin-file-upload"
                    className="cursor-pointer flex flex-col items-center justify-center gap-1.5 text-[#525C58] hover:text-[#00584F]"
                  >
                    <Upload className="w-6 h-6 text-[#00584F]" />
                    <span className="font-semibold text-xs">
                      {fileInput ? fileInput.name : "Click to upload photo from computer"}
                    </span>
                    <span className="text-[10px] text-[#525C58]/70">PNG, JPG, WEBP, SVG</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="font-semibold text-[#111615] block mb-1">
                  Or Image URL
                </label>
                <input
                  type="url"
                  placeholder="https://images.unsplash.com/..."
                  value={newUrl}
                  onChange={(e) => setNewUrl(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8F7E8] border border-[#E5E1C9] text-xs text-[#111615] focus:outline-none focus:border-[#00584F]"
                />
              </div>

              <div>
                <label className="font-semibold text-[#111615] block mb-1">
                  Product Image Title
                </label>
                <input
                  type="text"
                  placeholder="e.g. Silifix Silicone Cartridge"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8F7E8] border border-[#E5E1C9] text-xs text-[#111615] focus:outline-none focus:border-[#00584F]"
                />
              </div>

              <button
                type="submit"
                disabled={!newUrl}
                className="w-full py-3.5 rounded-xl bg-[#00584F] text-[#F8F7E8] font-semibold text-xs uppercase tracking-wider hover:bg-[#00453E] transition-all disabled:opacity-50"
              >
                Save Product Image
              </button>
            </form>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-xl font-serif-heading font-bold text-[#111615] flex items-center justify-between">
              <span className="flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-[#00584F]" /> Current Product Gallery ({images.length})
              </span>
            </h2>

            {images.length === 0 ? (
              <div className="p-12 rounded-3xl bg-[#F2F0DF] border border-dashed border-[#E5E1C9] text-center text-[#525C58]">
                <p className="font-serif-heading text-lg font-medium text-[#111615]">
                  No product images uploaded.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {images.map((img, index) => (
                  <div
                    key={img.id}
                    className="p-4 rounded-2xl bg-[#F2F0DF] border border-[#E5E1C9] shadow-sm flex flex-col sm:flex-row gap-4 items-start sm:items-center"
                  >
                    <img
                      src={img.url}
                      alt={img.title}
                      className="w-full sm:w-28 h-24 object-cover rounded-xl border border-[#E5E1C9] flex-shrink-0"
                    />

                    <div className="flex-1 space-y-2 w-full">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold bg-[#00584F]/10 text-[#00584F] px-2 py-0.5 rounded">
                          Order #{img.order}
                        </span>

                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => handleMove(index, "up")}
                            disabled={index === 0}
                            className="p-1 rounded bg-[#F8F7E8] text-[#111615] disabled:opacity-30 hover:bg-white"
                          >
                            <MoveUp className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => handleMove(index, "down")}
                            disabled={index === images.length - 1}
                            className="p-1 rounded bg-[#F8F7E8] text-[#111615] disabled:opacity-30 hover:bg-white"
                          >
                            <MoveDown className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => handleDelete(img.id)}
                            className="p-1 rounded bg-red-100 text-red-700 hover:bg-red-200 ml-2"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      <input
                        type="text"
                        value={img.title}
                        onChange={(e) => handleUpdateItem(img.id, "title", e.target.value)}
                        className="w-full bg-[#F8F7E8] border border-[#E5E1C9] px-2.5 py-1 text-xs font-semibold text-[#111615] rounded-lg"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

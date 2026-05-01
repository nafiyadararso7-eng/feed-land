import { useEffect, useState } from "react";
import { X, Check, CheckCircle2 } from "lucide-react";
import { PRODUCTS } from "./productsData";

type Step = "product" | "details" | "success";

export function OrderModal({
  open,
  onClose,
  initialProduct,
}: {
  open: boolean;
  onClose: () => void;
  initialProduct?: string;
}) {
  const [step, setStep] = useState<Step>("product");
  const [selected, setSelected] = useState<string | undefined>(initialProduct);
  const [form, setForm] = useState({ name: "", phone: "", location: "", note: "" });

  useEffect(() => {
    if (open) {
      setSelected(initialProduct);
      setStep(initialProduct ? "details" : "product");
      setForm({ name: "", phone: "", location: "", note: "" });
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open, initialProduct]);

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("success");
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brand/60 backdrop-blur-sm"
      style={{ animation: "fade-up 0.3s ease-out" }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
        style={{ animation: "modal-in 0.4s cubic-bezier(0.22, 1, 0.36, 1)" }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 text-slate-500 z-10"
          aria-label="Close"
        >
          <X />
        </button>

        {step === "product" && (
          <div className="p-8 sm:p-10">
            <h3 className="font-display font-bold text-3xl text-brand">Place Your Order</h3>
            <p className="mt-2 text-slate-600">Select a product to continue.</p>

            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              {PRODUCTS.map((p) => {
                const isSel = selected === p.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => setSelected(p.id)}
                    className={`relative text-left rounded-2xl p-5 border-2 transition-all ${
                      isSel
                        ? "border-brand bg-brand-soft shadow-glow"
                        : "border-slate-200 hover:border-brand/40 hover:bg-brand-soft/50"
                    }`}
                  >
                    {isSel && (
                      <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-brand text-white flex items-center justify-center">
                        <Check className="w-4 h-4" />
                      </div>
                    )}
                    <div className="text-3xl">{p.icon}</div>
                    <div className="mt-2 font-display font-bold text-brand">{p.name}</div>
                    <div className="mt-1 text-sm text-slate-600">{p.desc}</div>
                  </button>
                );
              })}
            </div>

            <button
              disabled={!selected}
              onClick={() => setStep("details")}
              className="mt-8 w-full rounded-full bg-brand text-white py-3.5 font-semibold disabled:opacity-40 disabled:cursor-not-allowed hover:scale-[1.01] transition-all"
            >
              Continue
            </button>
          </div>
        )}

        {step === "details" && (
          <form onSubmit={handleSubmit} className="p-8 sm:p-10">
            <h3 className="font-display font-bold text-3xl text-brand">Your Details</h3>
            <p className="mt-2 text-slate-600">
              Ordering: <span className="font-semibold text-brand">{PRODUCTS.find((p) => p.id === selected)?.name}</span>
            </p>

            <div className="mt-6 space-y-4">
              <Field label="Full name" required>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="input"
                  placeholder="e.g. Abebe Bekele"
                />
              </Field>
              <Field label="Phone number" required>
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="input"
                  placeholder="09XX-XXXXXX"
                />
              </Field>
              <Field label="Location / delivery address" required>
                <input
                  required
                  value={form.location}
                  onChange={(e) => setForm({ ...form, location: e.target.value })}
                  className="input"
                  placeholder="City, sub-city, woreda"
                />
              </Field>
              <Field label="Note (optional)">
                <textarea
                  value={form.note}
                  onChange={(e) => setForm({ ...form, note: e.target.value })}
                  className="input min-h-24 resize-none"
                  placeholder="Any special instructions? (Optional)"
                />
              </Field>
            </div>

            <div className="mt-8 flex gap-3">
              <button
                type="button"
                onClick={() => setStep("product")}
                className="rounded-full border border-slate-300 text-slate-700 px-6 py-3 font-semibold hover:bg-slate-50"
              >
                Back
              </button>
              <button
                type="submit"
                className="flex-1 rounded-full bg-brand text-white py-3 font-semibold hover:scale-[1.01] hover:shadow-glow transition-all"
              >
                Place Order
              </button>
            </div>
          </form>
        )}

        {step === "success" && (
          <div className="p-10 sm:p-14 text-center">
            <div
              className="mx-auto w-24 h-24 rounded-full bg-green-100 flex items-center justify-center"
              style={{ animation: "check-pop 0.6s cubic-bezier(0.22, 1, 0.36, 1)" }}
            >
              <CheckCircle2 className="w-14 h-14 text-green-600" />
            </div>
            <h3 className="mt-6 font-display font-bold text-3xl text-brand">Order Placed Successfully!</h3>
            <p className="mt-3 text-slate-600 text-lg max-w-md mx-auto">
              Thank you! We have received your order and will reach out to you shortly.
            </p>
            <button
              onClick={onClose}
              className="mt-8 rounded-full bg-brand text-white px-10 py-3 font-semibold hover:scale-105 transition-all"
            >
              Close
            </button>
          </div>
        )}
      </div>

      <style>{`
        .input {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid rgb(226 232 240);
          padding: 0.75rem 1rem;
          background: white;
          color: #1A3D6E;
          outline: none;
          transition: all 0.2s;
        }
        .input:focus {
          border-color: #1A3D6E;
          box-shadow: 0 0 0 4px rgba(26, 61, 110, 0.1);
        }
      `}</style>
    </div>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-brand">
        {label} {required && <span className="text-gold">*</span>}
      </span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}
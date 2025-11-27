'use client';

import { useCallback, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { Sparkles, Wand2 } from "lucide-react";
import SectionHeader from "../components/SectionHeader";

type ToneOption = "Inspiring" | "Educational" | "Entertaining" | "Bold";
type LengthOption = "30s" | "45s" | "60s";

interface ScriptFormValues {
  trend: string;
  tone: ToneOption;
  length: LengthOption;
  audience: string;
  callToAction: string;
}

const tones: ToneOption[] = ["Inspiring", "Educational", "Entertaining", "Bold"];
const lengths: LengthOption[] = ["30s", "45s", "60s"];

const ContentCreation = () => {
  const { register, handleSubmit, watch, reset } = useForm<ScriptFormValues>({
    defaultValues: {
      trend: "AI Productivity Hacks",
      tone: "Educational",
      length: "45s",
      audience: "Busy creators looking to automate their workflows",
      callToAction: "Subscribe for the full automation playbook"
    }
  });

  const [isGenerating, setIsGenerating] = useState(false);
  const [script, setScript] = useState<string>("");

  const highlightedScript = useMemo(() => {
    if (!script) return "";
    const keywords = /(AI|automation|hook|cta|scene|beat|visual|voice)/gi;
    return script.replace(
      keywords,
      (match) => `<span class="text-primary font-semibold">${match}</span>`
    );
  }, [script]);

  const onSubmit = useCallback(
    (values: ScriptFormValues) => {
      setIsGenerating(true);
      setTimeout(() => {
        const lines = [
          `HOOK: "What if your ${values.trend.toLowerCase()} took 60 seconds to produce?"`,
          `SCENE 1 (${values.length}): Rapid montage of creators overwhelmed with tabs.`,
          `VOICE: ${values.tone} narrator introduces the pain-point for ${values.audience.toLowerCase()}.`,
          "SCENE 2: Split screen showing manual vs automated workflow charts.",
          `VISUAL: Dynamic overlays from LovoArt templates highlighting key metrics, color graded in primary hues.`,
          `SCENE 3: On-screen walkthrough of the automation steps, with supertitles auto-captioned.`,
          `CTA: "${values.callToAction}"`,
          "END CARD: Showcase cross-platform posting schedule + social handles."
        ];
        setScript(lines.join("\n\n"));
        setIsGenerating(false);
      }, 600);
    },
    []
  );

  return (
    <section
      aria-labelledby="content-creation"
      className="flex flex-col gap-10"
    >
      <SectionHeader
        id="content-creation"
        title="Content Creation"
        description="Generate high-impact scripts, preview auto-produced visuals, and tune delivery parameters before production."
        actions={
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => reset()}
              className="rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-500 transition hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              Reset
            </button>
            <button
              type="submit"
              form="script-form"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              Generate Script
            </button>
          </div>
        }
      />

      <div className="grid gap-6 xl:grid-cols-[1.2fr_1fr]">
        <form
          id="script-form"
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-6 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm"
        >
          <div>
            <label
              htmlFor="trend-input"
              className="text-sm font-medium text-neutral-700"
            >
              Selected Trend
            </label>
            <input
              id="trend-input"
              {...register("trend", { required: true })}
              className="mt-2 w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <fieldset className="flex flex-col gap-3">
              <legend className="text-sm font-medium text-neutral-700">
                Tone
              </legend>
              <div className="grid gap-2 sm:grid-cols-2">
                {tones.map((tone) => (
                  <label
                    key={tone}
                    className="flex cursor-pointer items-center gap-2 rounded-xl border border-neutral-200 bg-neutral-50/60 px-4 py-3 text-sm shadow-sm transition hover:border-primary/60 has-[:checked]:border-primary has-[:checked]:bg-primary/10 has-[:checked]:text-primary"
                  >
                    <input
                      {...register("tone")}
                      type="radio"
                      value={tone}
                      className="sr-only"
                    />
                    {tone}
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset className="flex flex-col gap-3">
              <legend className="text-sm font-medium text-neutral-700">
                Desired Length
              </legend>
              <div className="grid grid-cols-3 gap-2">
                {lengths.map((length) => (
                  <label
                    key={length}
                    className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-neutral-200 bg-neutral-50/60 px-4 py-3 text-sm shadow-sm transition hover:border-primary/60 has-[:checked]:border-primary has-[:checked]:bg-primary/10 has-[:checked]:text-primary"
                  >
                    <input
                      {...register("length")}
                      type="radio"
                      value={length}
                      className="sr-only"
                    />
                    {length}
                  </label>
                ))}
              </div>
            </fieldset>
          </div>

          <div>
            <label
              htmlFor="audience-input"
              className="text-sm font-medium text-neutral-700"
            >
              Target Audience
            </label>
            <textarea
              id="audience-input"
              rows={3}
              {...register("audience")}
              className="mt-2 w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>

          <div>
            <label
              htmlFor="cta-input"
              className="text-sm font-medium text-neutral-700"
            >
              Call to Action
            </label>
            <input
              id="cta-input"
              {...register("callToAction")}
              className="mt-2 w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-xs text-neutral-500">
            <p>
              GPT prompt ready. Inputs are streamed to the agency&apos;s secure GPT
              workspace with compliance filters applied automatically.
            </p>
          </div>
        </form>

        <div className="flex flex-col gap-6">
          <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-neutral-800">
                Script Draft
              </h2>
              <div className="flex items-center gap-2 text-xs text-neutral-500">
                <span className="inline-flex items-center gap-1 rounded-full bg-secondary/10 px-3 py-1 text-secondary">
                  <Wand2 className="h-3.5 w-3.5" aria-hidden="true" />
                  GPT v5 Studio
                </span>
                {isGenerating ? (
                  <span className="animate-pulse text-primary">Generating…</span>
                ) : null}
              </div>
            </div>
            <div className="mt-4 max-h-72 overflow-auto rounded-2xl border border-neutral-200 bg-neutral-900/95 p-5 text-sm text-neutral-100">
              {script ? (
                <pre
                  className="whitespace-pre-wrap font-mono text-[0.84rem] leading-6"
                  dangerouslySetInnerHTML={{ __html: highlightedScript }}
                  aria-live="polite"
                />
              ) : (
                <p className="text-neutral-400">
                  Submit the form to generate a script tailored to your trend
                  and tonality preferences.
                </p>
              )}
            </div>
          </div>

          <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-neutral-800">
              Video Blueprint Preview
            </h2>
            <p className="mt-1 text-sm text-neutral-500">
              Map the script segments into scenes and visual automations powered
              by LovoArt.
            </p>
            <div className="mt-4 grid gap-3">
              {[
                {
                  title: "Scene 01 – Hook",
                  visual: "Dynamic text-on-screen, b-roll of cluttered workspace",
                  audio: "Energetic synth rise, narrator hook"
                },
                {
                  title: "Scene 02 – Contrast",
                  visual: "Split screen workflow comparison, animated metrics",
                  audio: "Ambient pulse, subtle whoosh transitions"
                },
                {
                  title: "Scene 03 – How-To",
                  visual:
                    "Macro shots of automation dashboard, highlight primary blue accent states",
                  audio: "Narrator walkthrough, soft clicks"
                },
                {
                  title: "Scene 04 – CTA",
                  visual: "End card with schedule preview & CTA overlay",
                  audio: "Music resolve, CTA emphasis"
                }
              ].map((scene) => (
                <div
                  key={scene.title}
                  className="flex flex-col gap-1 rounded-2xl border border-neutral-100 bg-neutral-50/80 p-4 text-sm text-neutral-600"
                >
                  <p className="font-semibold text-neutral-800">{scene.title}</p>
                  <p>{scene.visual}</p>
                  <p className="text-xs text-neutral-500">Audio: {scene.audio}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-primary/30 bg-primary/5 p-6 shadow-sm">
            <div className="flex items-center justify-between text-sm text-neutral-600">
              <div>
                <p className="text-sm font-semibold text-primary">
                  LovoArt Automation Pipeline
                </p>
                <p className="text-xs text-neutral-500">
                  Rendering with voice preset “Nova Spark” • Visual template
                  “Pulse”
                </p>
              </div>
              <span className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">
                In Sync
              </span>
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between text-xs uppercase text-neutral-400">
                <span>Processing</span>
                <span>84%</span>
              </div>
              <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white">
                <div
                  className="h-full rounded-full bg-primary transition-all"
                  style={{ width: "84%" }}
                  aria-hidden="true"
                />
              </div>
            </div>
            <div className="mt-4 grid gap-3 text-xs text-neutral-500 md:grid-cols-3">
              <div>
                <p className="text-neutral-400">Voice Model</p>
                <p className="text-neutral-700">Nova Spark (English)</p>
              </div>
              <div>
                <p className="text-neutral-400">Visual Style</p>
                <p className="text-neutral-700">Motion Pack • Gradient Pulse</p>
              </div>
              <div>
                <p className="text-neutral-400">Delivery ETA</p>
                <p className="text-neutral-700">~2 minutes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentCreation;

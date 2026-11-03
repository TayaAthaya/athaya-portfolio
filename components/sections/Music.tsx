"use client";

import { useState, useRef, useEffect } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealWrapper from "@/components/ui/RevealWrapper";
import { Play, Pause, Volume2, VolumeX, Music as MusicIcon, Disc } from "lucide-react";

export default function Music() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(229); // 3:49 default fallback
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => {
      if (audio.duration && !isNaN(audio.duration)) {
        setDuration(audio.duration);
      }
    };
    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("durationchange", updateDuration);
    audio.addEventListener("canplay", updateDuration);
    audio.addEventListener("ended", handleEnded);

    if (audio.readyState >= 1 && audio.duration && !isNaN(audio.duration)) {
      setDuration(audio.duration);
    }

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("durationchange", updateDuration);
      audio.removeEventListener("canplay", updateDuration);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.error("Playback failed:", err);
        });
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    const time = parseFloat(e.target.value);
    audio.currentTime = time;
    setCurrentTime(time);
  };

  const formatTime = (sec: number) => {
    if (isNaN(sec) || sec < 0) return "0:00";
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  return (
    <section id="music" className="py-[clamp(5rem,10vw,9rem)]">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionLabel>Soundtrack &amp; Focus</SectionLabel>

        <RevealWrapper>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <h2
                className="font-semibold tracking-tight text-white mb-2 select-none"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
              >
                On Repeat.
              </h2>
              <p className="text-zinc-400 text-sm max-w-[540px]">
                The soundtrack that accompanies my study, data exploration, coding, and creative thinking sessions. Press play to listen.
              </p>
            </div>

            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-indigo-500/25 bg-indigo-500/10 text-indigo-400 text-xs font-mono uppercase tracking-wider select-none">
              <span className={`w-2 h-2 rounded-full ${isPlaying ? "bg-emerald-400 animate-ping" : "bg-indigo-400"}`} />
              <span>{isPlaying ? "Now Playing" : "Audio Player"}</span>
            </div>
          </div>
        </RevealWrapper>

        {/* Audio Element with preload */}
        <audio
          ref={audioRef}
          src="/audio/shape-of-my-heart.mp3"
          preload="auto"
        />

        <RevealWrapper delay={100}>
          <div className="relative border border-white/[0.08] rounded-[28px] bg-gradient-to-br from-[#16161a] via-[#121215] to-[#0d0d0f] p-8 md:p-12 overflow-hidden shadow-2xl">
            <div
              className={`absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl pointer-events-none transition-opacity duration-1000 ${
                isPlaying ? "bg-indigo-500/[0.12] opacity-100" : "bg-indigo-500/[0.03] opacity-50"
              }`}
            />

            <div className="grid md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-center">
              {/* ── VINYL RECORD DISC ── */}
              <div className="flex justify-center">
                <div className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 flex items-center justify-center">
                  <div
                    className={`w-full h-full rounded-full border-4 border-zinc-800 shadow-[0_10px_35px_rgba(0,0,0,0.8)] relative flex items-center justify-center transition-all duration-300 ${
                      isPlaying ? "animate-spin-slow ring-2 ring-indigo-500/30" : ""
                    }`}
                    style={{
                      background:
                        "radial-gradient(circle, #09090b 20%, #18181b 40%, #09090b 60%, #18181b 80%, #09090b 100%)",
                      animationPlayState: isPlaying ? "running" : "paused",
                    }}
                  >
                    <div className="absolute inset-3 rounded-full border border-white/[0.04]" />
                    <div className="absolute inset-6 rounded-full border border-white/[0.03]" />
                    <div className="absolute inset-9 rounded-full border border-white/[0.04]" />
                    <div className="absolute inset-12 rounded-full border border-white/[0.03]" />
                    <div className="absolute inset-16 rounded-full border border-white/[0.04]" />

                    {/* Vinyl Center Label */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-indigo-600 via-indigo-800 to-zinc-900 border-2 border-zinc-900 flex flex-col items-center justify-center text-center shadow-inner relative z-10">
                      <MusicIcon className="w-4 h-4 text-white/90 mb-0.5" />
                      <span className="text-[0.55rem] font-bold text-white tracking-widest uppercase">
                        BSB
                      </span>
                    </div>

                    <div className="absolute w-3 h-3 rounded-full bg-[#090909] border border-zinc-700 z-20" />
                  </div>
                </div>
              </div>

              {/* ── TRACK INFO & CONTROLS ── */}
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-2 font-mono text-xs text-indigo-400 uppercase tracking-widest mb-2">
                  <Disc className={`w-3.5 h-3.5 ${isPlaying ? "animate-spin" : ""}`} />
                  <span>Favorite Soundtrack</span>
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-2">
                  Shape of My Heart
                </h3>

                <p className="text-sm md:text-base text-zinc-400 mb-8 flex items-center gap-2">
                  <span>Backstreet Boys</span>
                  <span className="text-zinc-600">•</span>
                  <span className="text-zinc-500">Black &amp; Blue (2000)</span>
                </p>

                {/* Progress Bar & Seek */}
                <div className="space-y-2 mb-6">
                  {(() => {
                    const totalDur = duration || 229;
                    const progressPercent = Math.min(100, Math.max(0, (currentTime / totalDur) * 100));
                    return (
                      <input
                        type="range"
                        min="0"
                        max={totalDur}
                        step="0.1"
                        value={currentTime}
                        onChange={handleSeek}
                        style={{
                          background: `linear-gradient(to right, #6366f1 0%, #6366f1 ${progressPercent}%, rgba(255, 255, 255, 0.12) ${progressPercent}%, rgba(255, 255, 255, 0.12) 100%)`,
                        }}
                        className="w-full h-1.5 rounded-lg appearance-none cursor-pointer accent-indigo-500 hover:accent-indigo-400 transition-all"
                      />
                    );
                  })()}
                  <div className="flex justify-between text-xs font-mono text-zinc-400">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                </div>

                {/* Playback Controls */}
                <div className="flex items-center gap-4">
                  <button
                    onClick={togglePlay}
                    className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-indigo-500 hover:bg-indigo-400 text-white font-semibold text-sm transition-all hover:scale-105 active:scale-95 shadow-[0_8px_24px_rgba(99,102,241,0.3)] cursor-pointer"
                    aria-label={isPlaying ? "Pause music" : "Play music"}
                  >
                    {isPlaying ? (
                      <>
                        <Pause className="w-4 h-4 fill-current" />
                        <span>Pause</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 fill-current translate-x-0.5" />
                        <span>Play Song</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={toggleMute}
                    className="p-3.5 rounded-full border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.08] text-zinc-400 hover:text-white transition-colors cursor-pointer"
                    aria-label={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}

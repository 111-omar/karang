import { useState, useRef, useCallback, useEffect } from 'react';

interface Channel {
  id: string;
  name: string;
  nameAr: string;
  logo: string;
  servers: { name: string; url: string }[];
  category: string;
}

const BASE = 'https://8.kooralive360.com/albaplayer';

const channels: Channel[] = [
  {
    id: 'bein1',
    name: 'beIN Sports HD 1',
    nameAr: 'بي إن سبورتس 1',
    logo: '⚽',
    servers: [
      { name: 'سيرفر 1', url: `${BASE}/bein-sports-hd-1/?serv=0` },
      { name: 'سيرفر 2', url: `${BASE}/bein-sports-hd-1/?serv=1` },
      { name: 'سيرفر 3', url: `${BASE}/bein-sports-hd-1/?serv=2` },
    ],
    category: 'sports',
  },
  {
    id: 'bein2',
    name: 'beIN Sports HD 2',
    nameAr: 'بي إن سبورتس 2',
    logo: '⚽',
    servers: [
      { name: 'سيرفر 1', url: `${BASE}/bein-sports-hd-2/?serv=0` },
      { name: 'سيرفر 2', url: `${BASE}/bein-sports-hd-2/?serv=1` },
      { name: 'سيرفر 3', url: `${BASE}/bein-sports-hd-2/?serv=2` },
    ],
    category: 'sports',
  },
  {
    id: 'bein3',
    name: 'beIN Sports HD 3',
    nameAr: 'بي إن سبورتس 3',
    logo: '⚽',
    servers: [
      { name: 'سيرفر 1', url: `${BASE}/bein-sports-hd-3/?serv=0` },
      { name: 'سيرفر 2', url: `${BASE}/bein-sports-hd-3/?serv=1` },
      { name: 'سيرفر 3', url: `${BASE}/bein-sports-hd-3/?serv=2` },
    ],
    category: 'sports',
  },
  {
    id: 'bein4',
    name: 'beIN Sports HD 4',
    nameAr: 'بي إن سبورتس 4',
    logo: '⚽',
    servers: [
      { name: 'سيرفر 1', url: `${BASE}/bein-sports-hd-4/?serv=0` },
      { name: 'سيرفر 2', url: `${BASE}/bein-sports-hd-4/?serv=1` },
      { name: 'سيرفر 3', url: `${BASE}/bein-sports-hd-4/?serv=2` },
    ],
    category: 'sports',
  },
  {
    id: 'bein5',
    name: 'beIN Sports HD 5',
    nameAr: 'بي إن سبورتس 5',
    logo: '⚽',
    servers: [
      { name: 'سيرفر 1', url: `${BASE}/bein-sports-hd-5/?serv=0` },
      { name: 'سيرفر 2', url: `${BASE}/bein-sports-hd-5/?serv=1` },
      { name: 'سيرفر 3', url: `${BASE}/bein-sports-hd-5/?serv=2` },
    ],
    category: 'sports',
  },
  {
    id: 'bein6',
    name: 'beIN Sports HD 6',
    nameAr: 'بي إن سبورتس 6',
    logo: '⚽',
    servers: [
      { name: 'سيرفر 1', url: `${BASE}/bein-sports-hd-6/?serv=0` },
      { name: 'سيرفر 2', url: `${BASE}/bein-sports-hd-6/?serv=1` },
      { name: 'سيرفر 3', url: `${BASE}/bein-sports-hd-6/?serv=2` },
    ],
    category: 'sports',
  },
  {
    id: 'bein7',
    name: 'beIN Sports HD 7',
    nameAr: 'بي إن سبورتس 7',
    logo: '⚽',
    servers: [
      { name: 'سيرفر 1', url: `${BASE}/bein-sports-hd-7/?serv=0` },
      { name: 'سيرفر 2', url: `${BASE}/bein-sports-hd-7/?serv=1` },
      { name: 'سيرفر 3', url: `${BASE}/bein-sports-hd-7/?serv=2` },
    ],
    category: 'sports',
  },
  {
    id: 'bein8',
    name: 'beIN Sports HD 8',
    nameAr: 'بي إن سبورتس 8',
    logo: '⚽',
    servers: [
      { name: 'سيرفر 1', url: `${BASE}/bein-sports-hd-8/?serv=0` },
      { name: 'سيرفر 2', url: `${BASE}/bein-sports-hd-8/?serv=1` },
      { name: 'سيرفر 3', url: `${BASE}/bein-sports-hd-8/?serv=2` },
    ],
    category: 'sports',
  },
  {
    id: 'beinpremium1',
    name: 'beIN Premium 1',
    nameAr: 'بي إن بريميوم 1',
    logo: '🏆',
    servers: [
      { name: 'سيرفر 1', url: `${BASE}/bein-sports-premium-1/?serv=0` },
      { name: 'سيرفر 2', url: `${BASE}/bein-sports-premium-1/?serv=1` },
      { name: 'سيرفر 3', url: `${BASE}/bein-sports-premium-1/?serv=2` },
    ],
    category: 'sports',
  },
  {
    id: 'beinpremium2',
    name: 'beIN Premium 2',
    nameAr: 'بي إن بريميوم 2',
    logo: '🏆',
    servers: [
      { name: 'سيرفر 1', url: `${BASE}/bein-sports-premium-2/?serv=0` },
      { name: 'سيرفر 2', url: `${BASE}/bein-sports-premium-2/?serv=1` },
      { name: 'سيرفر 3', url: `${BASE}/bein-sports-premium-2/?serv=2` },
    ],
    category: 'sports',
  },
  {
    id: 'beinpremium3',
    name: 'beIN Premium 3',
    nameAr: 'بي إن بريميوم 3',
    logo: '🏆',
    servers: [
      { name: 'سيرفر 1', url: `${BASE}/bein-sports-premium-3/?serv=0` },
      { name: 'سيرفر 2', url: `${BASE}/bein-sports-premium-3/?serv=1` },
      { name: 'سيرفر 3', url: `${BASE}/bein-sports-premium-3/?serv=2` },
    ],
    category: 'sports',
  },
  {
    id: 'ssc1',
    name: 'SSC Sport 1',
    nameAr: 'SSC سبورت 1',
    logo: '🏟️',
    servers: [
      { name: 'سيرفر 1', url: `${BASE}/ssc-sport-1/?serv=0` },
      { name: 'سيرفر 2', url: `${BASE}/ssc-sport-1/?serv=1` },
    ],
    category: 'sports',
  },
  {
    id: 'ssc2',
    name: 'SSC Sport 2',
    nameAr: 'SSC سبورت 2',
    logo: '🏟️',
    servers: [
      { name: 'سيرفر 1', url: `${BASE}/ssc-sport-2/?serv=0` },
      { name: 'سيرفر 2', url: `${BASE}/ssc-sport-2/?serv=1` },
    ],
    category: 'sports',
  },
];

function LiveBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 bg-red-600/90 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full shadow-lg shadow-red-500/30">
      <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
      LIVE
    </span>
  );
}

function App() {
  const [selectedChannel, setSelectedChannel] = useState<Channel | null>(null);
  const [activeServer, setActiveServer] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLandscape, setIsLandscape] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [customUrl, setCustomUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const playerContainerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const filteredChannels = channels.filter(
    (ch) =>
      ch.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ch.nameAr.includes(searchQuery)
  );

  const handleChannelSelect = useCallback((channel: Channel) => {
    setSelectedChannel(channel);
    setActiveServer(0);
    setIsLoading(true);
    setShowSidebar(false);
    setTimeout(() => setIsLoading(false), 2500);
  }, []);

  const handleServerChange = useCallback((index: number) => {
    setActiveServer(index);
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2500);
  }, []);

  const handleCustomUrl = useCallback(() => {
    if (customUrl.trim()) {
      const custom: Channel = {
        id: 'custom',
        name: 'Custom Stream',
        nameAr: 'بث مخصص',
        logo: '📺',
        servers: [{ name: 'سيرفر 1', url: customUrl.trim() }],
        category: 'custom',
      };
      setSelectedChannel(custom);
      setActiveServer(0);
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 2500);
    }
  }, [customUrl]);

  const toggleFullscreen = useCallback(() => {
    if (!playerContainerRef.current) return;
    if (!document.fullscreenElement) {
      playerContainerRef.current.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  }, []);

  const toggleLandscape = useCallback(() => {
    setIsLandscape((prev) => !prev);
    if (!isLandscape && playerContainerRef.current) {
      playerContainerRef.current.requestFullscreen?.().catch(() => {});
    }
  }, [isLandscape]);

  useEffect(() => {
    const handler = () => {
      if (!document.fullscreenElement) {
        setIsFullscreen(false);
        setIsLandscape(false);
      }
    };
    document.addEventListener('fullscreenchange', handler);
    return () => document.removeEventListener('fullscreenchange', handler);
  }, []);

  const currentUrl = selectedChannel?.servers[activeServer]?.url;

  return (
    <div className="min-h-screen bg-[#060a13] text-white font-[Cairo]" dir="rtl">
      {/* Gradient background accents */}
      <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-orange-600/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-amber-600/5 rounded-full blur-[150px] pointer-events-none"></div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0a0f1a]/90 backdrop-blur-2xl border-b border-white/[0.04]">
        <div className="max-w-[1400px] mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowSidebar(!showSidebar)}
              className="lg:hidden p-2 hover:bg-white/10 rounded-xl transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/20">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.55 12.65l1.45-1.45L8.55 9.75 7.1 11.2l1.45 1.45zM21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zm-7.55-6.35l1.45-1.45-1.45-1.45-1.45 1.45 1.45 1.45zM10 17l6-6-6-6v12z"/>
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-black bg-gradient-to-l from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent leading-tight">
                  عمر لايف
                </h1>
                <p className="text-[10px] text-gray-500 font-semibold leading-tight tracking-wide">OMAR LIVE</p>
              </div>
            </div>
          </div>

          {/* Search */}
          <div className="hidden sm:flex items-center gap-2 bg-white/[0.04] border border-white/[0.06] rounded-2xl px-4 py-2.5 w-80 focus-within:border-orange-500/30 transition-colors">
            <svg className="w-4 h-4 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="ابحث عن قناة..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent outline-none text-sm w-full placeholder-gray-600"
            />
          </div>

          <div className="flex items-center gap-3">
            <LiveBadge />
          </div>
        </div>
      </header>

      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-5 p-4 pt-5">
        {/* Sidebar */}
        <aside
          className={`
            ${showSidebar ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}
            fixed lg:static inset-y-0 right-0 z-40 w-[300px] lg:w-[280px] xl:w-[300px]
            bg-[#0a0f1a]/98 lg:bg-transparent backdrop-blur-2xl lg:backdrop-blur-none
            border-l border-white/[0.04] lg:border-0
            transition-transform duration-300
            overflow-y-auto
            lg:flex-shrink-0
          `}
        >
          {showSidebar && (
            <div
              className="fixed inset-0 bg-black/70 z-[-1] lg:hidden"
              onClick={() => setShowSidebar(false)}
            />
          )}

          <div className="p-4 lg:p-0">
            <div className="flex items-center justify-between mb-5 lg:hidden">
              <h2 className="text-lg font-extrabold">القنوات</h2>
              <button onClick={() => setShowSidebar(false)} className="p-2 hover:bg-white/10 rounded-xl">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Mobile search */}
            <div className="sm:hidden mb-4">
              <div className="flex items-center gap-2 bg-white/[0.04] border border-white/[0.06] rounded-2xl px-3 py-2.5">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="ابحث عن قناة..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent outline-none text-sm w-full placeholder-gray-600"
                />
              </div>
            </div>

            {/* Custom URL input */}
            <div className="mb-5 p-3.5 bg-gradient-to-br from-orange-500/[0.07] to-amber-500/[0.05] rounded-2xl border border-orange-500/10">
              <p className="text-xs text-orange-400 font-bold mb-2.5 flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                تشغيل رابط مخصص
              </p>
              <div className="flex gap-2">
                <input
                  type="url"
                  placeholder="أدخل رابط البث..."
                  value={customUrl}
                  onChange={(e) => setCustomUrl(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleCustomUrl()}
                  className="flex-1 bg-black/40 rounded-xl px-3 py-2.5 text-xs outline-none border border-white/[0.06] focus:border-orange-500/40 transition-colors"
                  dir="ltr"
                />
                <button
                  onClick={handleCustomUrl}
                  className="bg-gradient-to-l from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 px-4 py-2.5 rounded-xl text-xs font-bold transition-all shadow-lg shadow-orange-500/10 hover:shadow-orange-500/20"
                >
                  تشغيل
                </button>
              </div>
            </div>

            {/* Channel list */}
            <h3 className="text-[11px] text-gray-600 font-bold mb-3 flex items-center gap-2 uppercase tracking-wider">
              <span className="w-4 h-[1px] bg-gray-800"></span>
              القنوات الرياضية
              <span className="flex-1 h-[1px] bg-gray-800"></span>
            </h3>
            <div className="space-y-1">
              {filteredChannels.map((channel) => (
                <button
                  key={channel.id}
                  onClick={() => handleChannelSelect(channel)}
                  className={`
                    w-full flex items-center gap-3 p-2.5 rounded-xl transition-all duration-200 group
                    ${
                      selectedChannel?.id === channel.id
                        ? 'bg-gradient-to-l from-orange-600/15 to-amber-600/10 border border-orange-500/20 shadow-lg shadow-orange-500/5'
                        : 'hover:bg-white/[0.03] border border-transparent'
                    }
                  `}
                >
                  <div
                    className={`
                      w-10 h-10 rounded-xl flex items-center justify-center text-lg transition-colors
                      ${selectedChannel?.id === channel.id ? 'bg-orange-500/20' : 'bg-white/[0.03] group-hover:bg-white/[0.06]'}
                    `}
                  >
                    {channel.logo}
                  </div>
                  <div className="flex-1 text-right">
                    <p className={`text-[13px] font-bold leading-tight ${selectedChannel?.id === channel.id ? 'text-orange-300' : 'text-gray-300'}`}>
                      {channel.nameAr}
                    </p>
                    <p className="text-[10px] text-gray-600">{channel.name}</p>
                  </div>
                  {selectedChannel?.id === channel.id && (
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse shadow-lg shadow-orange-500/50"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          {selectedChannel ? (
            <>
              {/* Player container */}
              <div
                ref={playerContainerRef}
                className={`
                  relative bg-black rounded-2xl overflow-hidden shadow-2xl shadow-black/60 group
                  ${isLandscape && isFullscreen ? 'fixed inset-0 z-[9999] rounded-none' : ''}
                `}
              >
                {/* Top bar overlay */}
                <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/70 via-black/30 to-transparent p-3 sm:p-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-2.5">
                    <LiveBadge />
                    <span className="text-sm font-bold drop-shadow-lg">{selectedChannel.nameAr}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={toggleLandscape}
                      className="p-2 hover:bg-white/20 rounded-xl transition-colors"
                      title="الوضع الأفقي"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <rect x="2" y="6" width="20" height="12" rx="2" strokeWidth={2} />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12l-3-3m0 0l-3 3m3-3v6" />
                      </svg>
                    </button>
                    <button
                      onClick={toggleFullscreen}
                      className="p-2 hover:bg-white/20 rounded-xl transition-colors"
                      title="ملء الشاشة"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Loading overlay */}
                {isLoading && (
                  <div className="absolute inset-0 z-10 bg-[#060a13]/95 flex flex-col items-center justify-center">
                    <div className="relative w-20 h-20 mb-5">
                      <div className="absolute inset-0 border-[3px] border-orange-500/10 rounded-full"></div>
                      <div className="absolute inset-0 border-[3px] border-transparent border-t-orange-500 rounded-full animate-spin"></div>
                      <div className="absolute inset-2 border-[3px] border-transparent border-b-amber-500 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '0.8s' }}></div>
                    </div>
                    <p className="text-sm text-gray-400 font-bold animate-pulse">جاري تحميل البث...</p>
                    <p className="text-xs text-gray-600 mt-1">{selectedChannel.nameAr}</p>
                  </div>
                )}

                {/* Iframe Player */}
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    ref={iframeRef}
                    src={currentUrl}
                    className="absolute inset-0 w-full h-full"
                    allowFullScreen={true}
                    allow="autoplay; fullscreen; encrypted-media"
                    scrolling="1"
                    style={{ border: 'none' }}
                    title={selectedChannel.name}
                  />
                </div>
              </div>

              {/* Controls */}
              <div className="mt-4 space-y-4">
                {/* Channel info + servers */}
                <div className="bg-[#0c1120] rounded-2xl p-4 sm:p-5 border border-white/[0.04]">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-13 h-13 bg-gradient-to-br from-orange-500/20 to-amber-500/15 rounded-2xl flex items-center justify-center text-2xl border border-orange-500/10">
                        {selectedChannel.logo}
                      </div>
                      <div>
                        <h2 className="text-lg font-extrabold text-white">{selectedChannel.nameAr}</h2>
                        <p className="text-xs text-gray-500 font-semibold">{selectedChannel.name} • بث مباشر</p>
                      </div>
                    </div>
                    <LiveBadge />
                  </div>

                  {/* Server buttons */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs text-gray-600 font-bold ml-1">السيرفرات:</span>
                    {selectedChannel.servers.map((server, index) => (
                      <button
                        key={index}
                        onClick={() => handleServerChange(index)}
                        className={`
                          px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300
                          ${
                            activeServer === index
                              ? 'bg-gradient-to-l from-orange-600 to-amber-500 text-white shadow-lg shadow-orange-500/20 scale-105'
                              : 'bg-white/[0.04] hover:bg-white/[0.08] text-gray-400 border border-white/[0.04]'
                          }
                        `}
                      >
                        {server.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <button
                    onClick={toggleFullscreen}
                    className="flex items-center justify-center gap-2 bg-[#0c1120] hover:bg-white/[0.06] border border-white/[0.04] rounded-2xl p-3.5 transition-all group"
                  >
                    <svg className="w-5 h-5 text-orange-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                    <span className="text-xs font-bold text-gray-400">ملء الشاشة</span>
                  </button>
                  <button
                    onClick={toggleLandscape}
                    className="flex items-center justify-center gap-2 bg-[#0c1120] hover:bg-white/[0.06] border border-white/[0.04] rounded-2xl p-3.5 transition-all group"
                  >
                    <svg className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect x="2" y="6" width="20" height="12" rx="2" strokeWidth={2} />
                    </svg>
                    <span className="text-xs font-bold text-gray-400">الوضع الأفقي</span>
                  </button>
                  <button
                    onClick={() => {
                      setIsLoading(true);
                      const iframe = iframeRef.current;
                      if (iframe) iframe.src = iframe.src;
                      setTimeout(() => setIsLoading(false), 2500);
                    }}
                    className="flex items-center justify-center gap-2 bg-[#0c1120] hover:bg-white/[0.06] border border-white/[0.04] rounded-2xl p-3.5 transition-all group"
                  >
                    <svg className="w-5 h-5 text-yellow-400 group-hover:rotate-180 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <span className="text-xs font-bold text-gray-400">تحديث البث</span>
                  </button>
                  <button
                    onClick={() => currentUrl && window.open(currentUrl, '_blank')}
                    className="flex items-center justify-center gap-2 bg-[#0c1120] hover:bg-white/[0.06] border border-white/[0.04] rounded-2xl p-3.5 transition-all group"
                  >
                    <svg className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span className="text-xs font-bold text-gray-400">فتح في نافذة</span>
                  </button>
                </div>
              </div>
            </>
          ) : (
            /* Welcome Screen */
            <div className="flex flex-col items-center justify-center min-h-[75vh]">
              <div className="text-center max-w-xl">
                {/* Hero */}
                <div className="relative w-52 h-52 mx-auto mb-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/15 to-amber-500/10 rounded-full blur-[80px]"></div>
                  <div className="relative w-full h-full bg-gradient-to-br from-[#0c1120] to-[#0a0f1a] rounded-[2rem] border border-white/[0.04] flex items-center justify-center shadow-2xl">
                    <div className="text-8xl drop-shadow-2xl">📺</div>
                  </div>
                  <div className="absolute -top-2 -right-2 bg-red-500 rounded-full p-1.5 shadow-lg shadow-red-500/40 animate-pulse">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="absolute -bottom-1 -left-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full px-3 py-1 text-[10px] font-black shadow-lg shadow-orange-500/30">
                    HD
                  </div>
                </div>

                <h2 className="text-4xl font-black mb-4 bg-gradient-to-l from-orange-400 via-amber-400 to-yellow-300 bg-clip-text text-transparent">
                  عمر لايف
                </h2>
                <p className="text-sm text-gray-500 mb-10 leading-relaxed max-w-sm mx-auto">
                  اختر قناة من القائمة الجانبية لبدء المشاهدة المباشرة بجودة عالية HD
                  <br />
                  يدعم المشغل الوضع الأفقي وملء الشاشة
                </p>

                {/* Features */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                  {[
                    { icon: '🖥️', text: 'ملء الشاشة', color: 'from-orange-500/10 to-orange-500/5 border-orange-500/10' },
                    { icon: '📱', text: 'الوضع الأفقي', color: 'from-blue-500/10 to-blue-500/5 border-blue-500/10' },
                    { icon: '🔄', text: 'سيرفرات متعددة', color: 'from-amber-500/10 to-amber-500/5 border-amber-500/10' },
                    { icon: '⚡', text: 'بدون تقطيع', color: 'from-yellow-500/10 to-yellow-500/5 border-yellow-500/10' },
                  ].map((feat) => (
                    <span
                      key={feat.text}
                      className={`flex items-center gap-2 bg-gradient-to-br ${feat.color} px-4 py-2 rounded-2xl text-xs text-gray-400 border font-bold`}
                    >
                      {feat.icon} {feat.text}
                    </span>
                  ))}
                </div>

                {/* Quick start */}
                <p className="text-[11px] text-gray-700 font-bold mb-4 uppercase tracking-widest">⚡ ابدأ سريعاً</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {channels.slice(0, 5).map((ch) => (
                    <button
                      key={ch.id}
                      onClick={() => handleChannelSelect(ch)}
                      className="bg-[#0c1120] border border-white/[0.04] hover:border-orange-500/30 px-4 py-2.5 rounded-xl text-sm font-bold transition-all hover:scale-105 hover:bg-orange-500/[0.06] hover:shadow-lg hover:shadow-orange-500/5"
                    >
                      {ch.logo} {ch.nameAr}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Footer */}
      <footer className="mt-20 border-t border-white/[0.03] py-8">
        <div className="max-w-[1400px] mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 17l6-6-6-6v12z"/>
              </svg>
            </div>
            <span className="text-sm font-extrabold bg-gradient-to-l from-orange-400 to-amber-400 bg-clip-text text-transparent">عمر لايف</span>
          </div>
          <p className="text-[11px] text-gray-700">
            عمر لايف - Omar Live © {new Date().getFullYear()} • جميع الحقوق محفوظة
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

const IMAGES = {

  // EXAM 1 — Q1: girl with red ball
  'girl-red-ball': `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="220" fill="#E8F4FD"/>
    <!-- sky/ground -->
    <rect x="0" y="140" width="400" height="80" fill="#A8D5A2" rx="0"/>
    <!-- sun -->
    <circle cx="350" cy="40" r="28" fill="#FFD700" opacity=".9"/>
    <!-- girl body -->
    <ellipse cx="200" cy="155" rx="28" ry="18" fill="#F48FB1"/>
    <!-- dress -->
    <path d="M172 145 Q200 170 228 145" fill="#E91E8C"/>
    <!-- legs -->
    <rect x="188" y="170" width="10" height="28" fill="#FFCCBC" rx="4"/>
    <rect x="202" y="170" width="10" height="28" fill="#FFCCBC" rx="4"/>
    <!-- shoes -->
    <ellipse cx="193" cy="199" rx="9" ry="5" fill="#5D4037"/>
    <ellipse cx="207" cy="199" rx="9" ry="5" fill="#5D4037"/>
    <!-- torso -->
    <rect x="178" y="120" width="44" height="30" fill="#E91E8C" rx="8"/>
    <!-- head -->
    <circle cx="200" cy="103" r="22" fill="#FFCCBC"/>
    <!-- hair -->
    <path d="M178 103 Q178 78 200 75 Q222 78 222 103" fill="#4E342E"/>
    <!-- pigtails -->
    <path d="M178 95 Q165 85 163 75" stroke="#4E342E" stroke-width="6" fill="none" stroke-linecap="round"/>
    <path d="M222 95 Q235 85 237 75" stroke="#4E342E" stroke-width="6" fill="none" stroke-linecap="round"/>
    <!-- eyes -->
    <circle cx="193" cy="104" r="3" fill="#333"/>
    <circle cx="207" cy="104" r="3" fill="#333"/>
    <!-- smile -->
    <path d="M193 112 Q200 118 207 112" stroke="#333" stroke-width="2" fill="none" stroke-linecap="round"/>
    <!-- arm holding ball -->
    <path d="M222 130 Q245 125 258 118" stroke="#FFCCBC" stroke-width="10" fill="none" stroke-linecap="round"/>
    <!-- RED BALL -->
    <circle cx="268" cy="112" r="22" fill="#E53935"/>
    <path d="M252 102 Q268 90 284 102" stroke="#C62828" stroke-width="2" fill="none"/>
    <path d="M248 118 Q268 128 288 118" stroke="#C62828" stroke-width="2" fill="none"/>
    <!-- label -->
    <rect x="140" y="185" width="120" height="24" rx="12" fill="rgba(0,0,0,.12)"/>
    <text x="200" y="201" text-anchor="middle" font-family="Arial,sans-serif" font-size="12" fill="#fff" font-weight="bold">What color is the ball?</text>
  </svg>`,

  // EXAM 1 — Q6–10: Ben reading (boy with toy cars)
  'boy-toy-cars': `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="220" fill="#FFF8E1"/>
    <!-- floor -->
    <rect x="0" y="160" width="400" height="60" fill="#F5E6C8"/>
    <!-- rug -->
    <ellipse cx="200" cy="168" rx="120" ry="20" fill="#FFB74D" opacity=".5"/>
    <!-- boy sitting -->
    <!-- legs crossed on floor -->
    <ellipse cx="200" cy="175" rx="35" ry="12" fill="#5C6BC0"/>
    <!-- body -->
    <rect x="180" y="125" width="40" height="42" fill="#5C6BC0" rx="8"/>
    <!-- head -->
    <circle cx="200" cy="112" r="20" fill="#FFCCBC"/>
    <!-- hair -->
    <path d="M181 112 Q181 90 200 87 Q219 90 219 112" fill="#4E342E"/>
    <!-- eyes -->
    <circle cx="194" cy="113" r="2.5" fill="#333"/>
    <circle cx="206" cy="113" r="2.5" fill="#333"/>
    <!-- smile -->
    <path d="M194 120 Q200 125 206 120" stroke="#333" stroke-width="1.8" fill="none" stroke-linecap="round"/>
    <!-- arms -->
    <path d="M180 135 Q158 148 148 155" stroke="#FFCCBC" stroke-width="9" fill="none" stroke-linecap="round"/>
    <path d="M220 135 Q242 148 252 155" stroke="#FFCCBC" stroke-width="9" fill="none" stroke-linecap="round"/>
    <!-- TOY CAR 1 (red) -->
    <rect x="130" y="150" width="44" height="18" fill="#E53935" rx="5"/>
    <rect x="136" y="143" width="28" height="12" fill="#EF9A9A" rx="4"/>
    <circle cx="138" cy="170" r="6" fill="#333"/><circle cx="138" cy="170" r="3" fill="#888"/>
    <circle cx="166" cy="170" r="6" fill="#333"/><circle cx="166" cy="170" r="3" fill="#888"/>
    <!-- TOY CAR 2 (blue) -->
    <rect x="228" y="150" width="44" height="18" fill="#1565C0" rx="5"/>
    <rect x="234" y="143" width="28" height="12" fill="#90CAF9" rx="4"/>
    <circle cx="236" cy="170" r="6" fill="#333"/><circle cx="236" cy="170" r="3" fill="#888"/>
    <circle cx="264" cy="170" r="6" fill="#333"/><circle cx="264" cy="170" r="3" fill="#888"/>
    <!-- name tag -->
    <rect x="160" y="80" width="80" height="22" rx="11" fill="#FFF176" stroke="#FBC02D" stroke-width="1.5"/>
    <text x="200" y="95" text-anchor="middle" font-family="Arial,sans-serif" font-size="13" fill="#5D4037" font-weight="bold">Ben 🚗</text>
  </svg>`,

  // EXAM 1 — Q26 writing: family dinner
  'family-dinner': `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="220" fill="#FFF3E0"/>
    <!-- wall -->
    <rect x="0" y="0" width="400" height="130" fill="#FFCCBC" opacity=".4"/>
    <!-- window -->
    <rect x="310" y="15" width="70" height="55" rx="4" fill="#90CAF9" stroke="#5D4037" stroke-width="3"/>
    <line x1="345" y1="15" x2="345" y2="70" stroke="#5D4037" stroke-width="2"/>
    <line x1="310" y1="42" x2="380" y2="42" stroke="#5D4037" stroke-width="2"/>
    <!-- moon outside window (night dinner scene) -->
    <circle cx="362" cy="32" r="11" fill="#FFF9C4"/>
    <!-- TABLE -->
    <rect x="60" y="138" width="280" height="18" fill="#8D6E63" rx="4"/>
    <rect x="80" y="156" width="16" height="50" fill="#6D4C41" rx="4"/>
    <rect x="304" y="156" width="16" height="50" fill="#6D4C41" rx="4"/>
    <!-- tablecloth -->
    <rect x="60" y="128" width="280" height="14" fill="#E57373" rx="3"/>
    <!-- plates & food -->
    <ellipse cx="140" cy="130" rx="28" ry="8" fill="#fff" stroke="#ddd" stroke-width="1"/>
    <ellipse cx="140" cy="128" rx="18" ry="6" fill="#A5D6A7"/>
    <ellipse cx="200" cy="130" rx="28" ry="8" fill="#fff" stroke="#ddd" stroke-width="1"/>
    <ellipse cx="200" cy="128" rx="18" ry="6" fill="#FFCC80"/>
    <ellipse cx="260" cy="130" rx="28" ry="8" fill="#fff" stroke="#ddd" stroke-width="1"/>
    <ellipse cx="260" cy="128" rx="18" ry="6" fill="#EF9A9A"/>
    <!-- glasses -->
    <rect x="105" y="122" width="8" height="14" fill="#90CAF9" rx="2" opacity=".8"/>
    <rect x="172" y="122" width="8" height="14" fill="#90CAF9" rx="2" opacity=".8"/>
    <rect x="232" y="122" width="8" height="14" fill="#90CAF9" rx="2" opacity=".8"/>
    <!-- PERSON 1 — Dad (left) -->
    <circle cx="100" cy="95" r="18" fill="#FFCCBC"/>
    <path d="M83 95 Q83 74 100 71 Q117 74 117 95" fill="#4E342E"/>
    <rect x="82" y="108" width="36" height="30" fill="#1565C0" rx="7"/>
    <circle cx="95" cy="95" r="2" fill="#333"/><circle cx="105" cy="95" r="2" fill="#333"/>
    <path d="M95 102 Q100 106 105 102" stroke="#333" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <!-- PERSON 2 — Mom (center) -->
    <circle cx="200" cy="92" r="18" fill="#FFCCBC"/>
    <path d="M183 100 Q183 72 200 68 Q217 72 217 100" fill="#6D4C41"/>
    <rect x="182" y="105" width="36" height="30" fill="#E91E8C" rx="7"/>
    <circle cx="195" cy="92" r="2" fill="#333"/><circle cx="205" cy="92" r="2" fill="#333"/>
    <path d="M195 99 Q200 103 205 99" stroke="#333" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <!-- PERSON 3 — Child (right) -->
    <circle cx="300" cy="97" r="16" fill="#FFCCBC"/>
    <path d="M285 97 Q285 78 300 75 Q315 78 315 97" fill="#4E342E"/>
    <rect x="284" y="109" width="32" height="28" fill="#4CAF50" rx="7"/>
    <circle cx="295" cy="97" r="2" fill="#333"/><circle cx="305" cy="97" r="2" fill="#333"/>
    <path d="M295 104 Q300 108 305 104" stroke="#333" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <!-- speech bubbles -->
    <rect x="50" y="55" width="65" height="22" rx="11" fill="#fff" stroke="#ddd" stroke-width="1"/>
    <text x="82" y="70" text-anchor="middle" font-family="Arial,sans-serif" font-size="10" fill="#555">Delicious!</text>
    <rect x="170" y="50" width="60" height="22" rx="11" fill="#fff" stroke="#ddd" stroke-width="1"/>
    <text x="200" y="65" text-anchor="middle" font-family="Arial,sans-serif" font-size="10" fill="#555">Thank you!</text>
  </svg>`,

  // EXAM 2 — Q1–5: Sofia with dog (park/garden scene)
  'sofia-dog': `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="220" fill="#E8F5E9"/>
    <!-- sky -->
    <rect x="0" y="0" width="400" height="130" fill="#BBDEFB"/>
    <!-- sun -->
    <circle cx="60" cy="45" r="30" fill="#FFD700"/>
    <!-- clouds -->
    <ellipse cx="200" cy="35" rx="45" ry="20" fill="white" opacity=".9"/>
    <ellipse cx="240" cy="30" rx="35" ry="18" fill="white" opacity=".9"/>
    <ellipse cx="310" cy="50" rx="35" ry="18" fill="white" opacity=".8"/>
    <!-- ground / garden -->
    <rect x="0" y="130" width="400" height="90" fill="#81C784"/>
    <!-- path -->
    <ellipse cx="200" cy="175" rx="90" ry="22" fill="#A1887F" opacity=".4"/>
    <!-- flowers -->
    <circle cx="50" cy="128" r="6" fill="#E91E8C"/>
    <circle cx="65" cy="122" r="6" fill="#FF9800"/>
    <circle cx="80" cy="128" r="5" fill="#9C27B0"/>
    <circle cx="320" cy="125" r="6" fill="#E53935"/>
    <circle cx="340" cy="130" r="5" fill="#FFEB3B"/>
    <circle cx="355" cy="123" r="6" fill="#F06292"/>
    <!-- tree -->
    <rect x="360" y="110" width="12" height="60" fill="#5D4037"/>
    <circle cx="366" cy="95" r="35" fill="#388E3C"/>
    <!-- SOFIA -->
    <circle cx="185" cy="100" r="20" fill="#FFCCBC"/>
    <path d="M166 100 Q166 76 185 73 Q204 76 204 100" fill="#6D4C41"/>
    <!-- pigtails -->
    <path d="M167 92 Q155 82 153 72" stroke="#6D4C41" stroke-width="5" fill="none" stroke-linecap="round"/>
    <path d="M203 92 Q215 82 217 72" stroke="#6D4C41" stroke-width="5" fill="none" stroke-linecap="round"/>
    <circle cx="180" cy="101" r="2.5" fill="#333"/>
    <circle cx="190" cy="101" r="2.5" fill="#333"/>
    <path d="M180 108 Q185 113 190 108" stroke="#333" stroke-width="1.8" fill="none" stroke-linecap="round"/>
    <!-- body / dress -->
    <rect x="167" y="116" width="36" height="40" fill="#F06292" rx="8"/>
    <path d="M165 145 Q185 165 205 145" fill="#F06292"/>
    <!-- legs -->
    <rect x="173" y="154" width="10" height="30" fill="#FFCCBC" rx="4"/>
    <rect x="185" y="154" width="10" height="30" fill="#FFCCBC" rx="4"/>
    <ellipse cx="178" cy="186" rx="9" ry="5" fill="#5D4037"/>
    <ellipse cx="190" cy="186" rx="9" ry="5" fill="#5D4037"/>
    <!-- leash -->
    <path d="M200 140 Q230 138 245 135" stroke="#795548" stroke-width="3" fill="none"/>
    <!-- DOG ROCKY (brown) -->
    <ellipse cx="265" cy="148" rx="28" ry="16" fill="#A1887F"/>
    <circle cx="288" cy="138" r="14" fill="#8D6E63"/>
    <!-- dog ears -->
    <ellipse cx="282" cy="128" rx="7" ry="10" fill="#6D4C41" transform="rotate(-15,282,128)"/>
    <ellipse cx="296" cy="130" rx="7" ry="10" fill="#6D4C41" transform="rotate(15,296,130)"/>
    <!-- dog eyes/nose -->
    <circle cx="292" cy="136" r="2.5" fill="#333"/>
    <circle cx="300" cy="138" r="2" fill="#333"/>
    <ellipse cx="298" cy="143" rx="4" ry="3" fill="#333"/>
    <!-- dog tail -->
    <path d="M238 148 Q222 135 218 122" stroke="#A1887F" stroke-width="7" fill="none" stroke-linecap="round"/>
    <!-- dog legs -->
    <rect x="248" y="160" width="9" height="18" fill="#8D6E63" rx="4"/>
    <rect x="262" y="160" width="9" height="18" fill="#8D6E63" rx="4"/>
    <rect x="274" y="160" width="9" height="18" fill="#8D6E63" rx="4"/>
    <rect x="285" y="157" width="9" height="18" fill="#8D6E63" rx="4"/>
    <!-- name label -->
    <rect x="240" y="98" width="70" height="22" rx="11" fill="#FFF9C4" stroke="#FBC02D" stroke-width="1.5"/>
    <text x="275" y="113" text-anchor="middle" font-family="Arial,sans-serif" font-size="12" fill="#5D4037" font-weight="bold">Rocky 🐾</text>
  </svg>`,

  // EXAM 2 — Q26 writing: children in park
  'children-park': `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="220" fill="#E3F2FD"/>
    <rect x="0" y="0" width="400" height="130" fill="#87CEEB"/>
    <!-- sun -->
    <circle cx="340" cy="40" r="26" fill="#FFD700"/>
    <!-- clouds -->
    <ellipse cx="100" cy="30" rx="50" ry="22" fill="#fff" opacity=".9"/>
    <ellipse cx="140" cy="25" rx="38" ry="18" fill="#fff" opacity=".9"/>
    <ellipse cx="230" cy="45" rx="40" ry="18" fill="#fff" opacity=".8"/>
    <!-- ground -->
    <rect x="0" y="130" width="400" height="90" fill="#66BB6A"/>
    <!-- path -->
    <ellipse cx="200" cy="185" rx="110" ry="20" fill="#A1887F" opacity=".3"/>
    <!-- trees -->
    <rect x="20" y="105" width="12" height="55" fill="#5D4037"/><circle cx="26" cy="90" r="30" fill="#2E7D32"/>
    <rect x="365" y="110" width="11" height="50" fill="#5D4037"/><circle cx="370" cy="95" r="26" fill="#388E3C"/>
    <!-- SWING SET -->
    <line x1="270" y1="60" x2="270" y2="130" stroke="#795548" stroke-width="5"/>
    <line x1="310" y1="60" x2="310" y2="130" stroke="#795548" stroke-width="5"/>
    <line x1="268" y1="60" x2="312" y2="60" stroke="#795548" stroke-width="5"/>
    <!-- swing chains -->
    <line x1="282" y1="62" x2="282" y2="108" stroke="#9E9E9E" stroke-width="2"/>
    <line x1="298" y1="62" x2="298" y2="108" stroke="#9E9E9E" stroke-width="2"/>
    <!-- swing seat + girl swinging -->
    <rect x="274" y="108" width="30" height="6" fill="#EF5350" rx="3"/>
    <circle cx="290" cy="97" r="13" fill="#FFCCBC"/>
    <path d="M278 97 Q278 82 290 79 Q302 82 302 97" fill="#6D4C41"/>
    <rect x="278" y="108" width="22" height="24" fill="#7B1FA2" rx="6"/>
    <!-- child 1 running (left) -->
    <circle cx="100" cy="125" r="16" fill="#FFCCBC"/>
    <path d="M85 125 Q85 107 100 104 Q115 107 115 125" fill="#FF8A65"/>
    <rect x="84" y="137" width="32" height="26" fill="#FF5722" rx="6"/>
    <path d="M84 150 Q76 162 70 170" stroke="#FFCCBC" stroke-width="8" fill="none" stroke-linecap="round"/>
    <path d="M116 150 Q124 162 130 170" stroke="#FFCCBC" stroke-width="8" fill="none" stroke-linecap="round"/>
    <circle cx="95" cy="125" r="2" fill="#333"/><circle cx="105" cy="125" r="2" fill="#333"/>
    <path d="M95 131 Q100 135 105 131" stroke="#333" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <!-- child 2 (center, waving) -->
    <circle cx="200" cy="118" r="16" fill="#FFCCBC"/>
    <path d="M185 118 Q185 100 200 97 Q215 100 215 118" fill="#4E342E"/>
    <rect x="184" y="130" width="32" height="26" fill="#1565C0" rx="6"/>
    <path d="M184 143 Q175 132 168 127" stroke="#FFCCBC" stroke-width="8" fill="none" stroke-linecap="round"/>
    <path d="M216 143 Q226 136 230 130" stroke="#FFCCBC" stroke-width="8" fill="none" stroke-linecap="round"/>
    <circle cx="195" cy="118" r="2" fill="#333"/><circle cx="205" cy="118" r="2" fill="#333"/>
    <path d="M195 125 Q200 129 205 125" stroke="#333" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <!-- ball on ground -->
    <circle cx="155" cy="175" r="12" fill="#E53935"/>
    <path d="M144 170 Q155 162 166 170" stroke="#B71C1C" stroke-width="1.5" fill="none"/>
  </svg>`,

  // EXAM 3 — Q5 / writing: city vs countryside
  'city-countryside': `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
    <!-- LEFT: CITY -->
    <rect x="0" y="0" width="200" height="220" fill="#78909C"/>
    <!-- sky city -->
    <rect x="0" y="0" width="200" height="90" fill="#90A4AE"/>
    <!-- buildings -->
    <rect x="10" y="60" width="40" height="130" fill="#546E7A"/>
    <rect x="20" y="50" width="20" height="14" fill="#4A6572"/>
    <!-- windows -->
    <rect x="15" y="70" width="8" height="8" fill="#FFD54F" opacity=".8"/>
    <rect x="28" y="70" width="8" height="8" fill="#FFD54F" opacity=".8"/>
    <rect x="15" y="85" width="8" height="8" fill="#90CAF9" opacity=".8"/>
    <rect x="28" y="85" width="8" height="8" fill="#FFD54F" opacity=".8"/>
    <rect x="15" y="100" width="8" height="8" fill="#FFD54F" opacity=".8"/>
    <rect x="28" y="100" width="8" height="8" fill="#90CAF9" opacity=".8"/>
    <rect x="15" y="115" width="8" height="8" fill="#90CAF9" opacity=".8"/>
    <rect x="28" y="115" width="8" height="8" fill="#FFD54F" opacity=".8"/>
    <rect x="55" y="80" width="50" height="110" fill="#607D8B"/>
    <rect x="60" y="90" width="10" height="10" fill="#FFD54F" opacity=".8"/>
    <rect x="76" y="90" width="10" height="10" fill="#90CAF9" opacity=".8"/>
    <rect x="86" y="90" width="10" height="10" fill="#FFD54F" opacity=".8"/>
    <rect x="60" y="107" width="10" height="10" fill="#90CAF9" opacity=".8"/>
    <rect x="76" y="107" width="10" height="10" fill="#FFD54F" opacity=".8"/>
    <rect x="86" y="107" width="10" height="10" fill="#90CAF9" opacity=".8"/>
    <rect x="60" y="124" width="10" height="10" fill="#FFD54F" opacity=".8"/>
    <rect x="76" y="124" width="10" height="10" fill="#90CAF9" opacity=".8"/>
    <rect x="86" y="124" width="10" height="10" fill="#FFD54F" opacity=".8"/>
    <rect x="115" y="50" width="45" height="140" fill="#455A64"/>
    <rect x="130" y="38" width="16" height="16" fill="#B0BEC5"/>
    <rect x="120" y="60" width="10" height="10" fill="#FFD54F" opacity=".8"/>
    <rect x="136" y="60" width="10" height="10" fill="#90CAF9" opacity=".8"/>
    <rect x="148" y="60" width="8" height="10" fill="#FFD54F" opacity=".8"/>
    <rect x="120" y="77" width="10" height="10" fill="#90CAF9" opacity=".8"/>
    <rect x="136" y="77" width="10" height="10" fill="#FFD54F" opacity=".8"/>
    <rect x="148" y="77" width="8" height="10" fill="#90CAF9" opacity=".8"/>
    <rect x="120" y="94" width="10" height="10" fill="#FFD54F" opacity=".8"/>
    <rect x="136" y="94" width="10" height="10" fill="#90CAF9" opacity=".8"/>
    <!-- city road/cars -->
    <rect x="0" y="185" width="200" height="35" fill="#37474F"/>
    <rect x="0" y="200" width="200" height="4" fill="#FFD700" opacity=".6"/>
    <rect x="10" y="195" width="35" height="18" fill="#E53935" rx="3"/>
    <rect x="130" y="197" width="40" height="16" fill="#1565C0" rx="3"/>
    <!-- label -->
    <rect x="0" y="0" width="80" height="22" rx="0" fill="rgba(0,0,0,.35)"/>
    <text x="40" y="15" text-anchor="middle" font-family="Arial,sans-serif" font-size="11" fill="#fff" font-weight="bold">🏙️ CITY</text>
    <!-- divider -->
    <line x1="200" y1="0" x2="200" y2="220" stroke="#FFF" stroke-width="3" stroke-dasharray="8,4"/>
    <!-- RIGHT: COUNTRYSIDE -->
    <rect x="200" y="0" width="200" height="220" fill="#A5D6A7"/>
    <rect x="200" y="0" width="200" height="100" fill="#B3E5FC"/>
    <!-- sun -->
    <circle cx="360" cy="35" r="25" fill="#FFD700"/>
    <!-- clouds -->
    <ellipse cx="250" cy="28" rx="38" ry="16" fill="#fff" opacity=".9"/>
    <ellipse cx="282" cy="22" rx="28" ry="13" fill="#fff" opacity=".9"/>
    <!-- hills -->
    <ellipse cx="270" cy="130" rx="100" ry="55" fill="#81C784"/>
    <ellipse cx="380" cy="140" rx="80" ry="50" fill="#66BB6A"/>
    <!-- house -->
    <rect x="235" y="125" width="65" height="50" fill="#FFECB3" stroke="#FFA000" stroke-width="2"/>
    <polygon points="200,125 268,85 335,125" fill="#E53935"/>
    <rect x="258" y="143" width="18" height="32" fill="#795548"/>
    <!-- windows house -->
    <rect x="238" y="132" width="16" height="14" fill="#90CAF9" stroke="#81D4FA" stroke-width="1"/>
    <rect x="278" y="132" width="16" height="14" fill="#90CAF9" stroke="#81D4FA" stroke-width="1"/>
    <!-- chimney/smoke -->
    <rect x="312" y="92" width="12" height="26" fill="#BDBDBD"/>
    <circle cx="316" cy="85" r="8" fill="#fff" opacity=".6"/>
    <circle cx="322" cy="78" r="7" fill="#fff" opacity=".4"/>
    <!-- tree -->
    <rect x="348" y="125" width="10" height="50" fill="#5D4037"/>
    <circle cx="353" cy="110" r="26" fill="#2E7D32"/>
    <!-- flowers/field -->
    <circle cx="210" cy="168" r="5" fill="#FFEB3B"/>
    <circle cx="222" cy="172" r="4" fill="#F06292"/>
    <circle cx="236" cy="165" r="4" fill="#FF5722"/>
    <circle cx="390" cy="162" r="5" fill="#FFEB3B"/>
    <circle cx="375" cy="170" r="4" fill="#F06292"/>
    <!-- fence -->
    <line x1="200" y1="175" x2="370" y2="175" stroke="#795548" stroke-width="2"/>
    <line x1="215" y1="165" x2="215" y2="185" stroke="#795548" stroke-width="2"/>
    <line x1="235" y1="165" x2="235" y2="185" stroke="#795548" stroke-width="2"/>
    <line x1="255" y1="165" x2="255" y2="185" stroke="#795548" stroke-width="2"/>
    <line x1="275" y1="165" x2="275" y2="185" stroke="#795548" stroke-width="2"/>
    <line x1="295" y1="165" x2="295" y2="185" stroke="#795548" stroke-width="2"/>
    <!-- label -->
    <rect x="200" y="0" width="110" height="22" rx="0" fill="rgba(0,0,0,.25)"/>
    <text x="255" y="15" text-anchor="middle" font-family="Arial,sans-serif" font-size="11" fill="#fff" font-weight="bold">🌿 COUNTRYSIDE</text>
  </svg>`,

  // EXAM 4 — Q26 writing: teen on phone at dinner
  'teen-phone-dinner': `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="220" fill="#ECEFF1"/>
    <!-- wall with wallpaper hint -->
    <rect x="0" y="0" width="400" height="140" fill="#F5F5F5"/>
    <rect x="0" y="0" width="400" height="4" fill="#CFD8DC"/>
    <!-- painting on wall -->
    <rect x="155" y="15" width="90" height="60" rx="3" fill="#90A4AE" stroke="#78909C" stroke-width="2"/>
    <rect x="162" y="22" width="76" height="46" rx="2" fill="#B3E5FC"/>
    <ellipse cx="200" cy="45" rx="20" ry="25" fill="#FFD54F" opacity=".7"/>
    <!-- TABLE -->
    <rect x="40" y="148" width="320" height="16" fill="#6D4C41" rx="4"/>
    <rect x="60" y="164" width="14" height="50" fill="#5D4037" rx="3"/>
    <rect x="326" y="164" width="14" height="50" fill="#5D4037" rx="3"/>
    <!-- tablecloth -->
    <rect x="40" y="136" width="320" height="16" fill="#EF9A9A" rx="3"/>
    <!-- PLATES -->
    <ellipse cx="120" cy="138" rx="30" ry="9" fill="#fff" stroke="#E0E0E0" stroke-width="1.5"/>
    <ellipse cx="120" cy="136" rx="20" ry="6" fill="#A5D6A7"/>
    <ellipse cx="200" cy="138" rx="30" ry="9" fill="#fff" stroke="#E0E0E0" stroke-width="1.5"/>
    <ellipse cx="200" cy="136" rx="20" ry="6" fill="#FFCC80"/>
    <ellipse cx="280" cy="138" rx="30" ry="9" fill="#fff" stroke="#E0E0E0" stroke-width="1.5"/>
    <ellipse cx="280" cy="136" rx="20" ry="6" fill="#EF9A9A"/>
    <!-- glasses -->
    <rect x="92" y="128" width="7" height="14" fill="#90CAF9" rx="2" opacity=".8"/>
    <rect x="172" y="128" width="7" height="14" fill="#90CAF9" rx="2" opacity=".8"/>
    <rect x="248" y="128" width="7" height="14" fill="#90CAF9" rx="2" opacity=".8"/>
    <!-- PARENT LEFT — looking concerned -->
    <circle cx="90" cy="95" r="19" fill="#FFCCBC"/>
    <path d="M72 95 Q72 72 90 69 Q108 72 108 95" fill="#5D4037"/>
    <circle cx="85" cy="95" r="2.5" fill="#333"/>
    <circle cx="95" cy="95" r="2.5" fill="#333"/>
    <!-- concerned expression -->
    <path d="M85 103 Q90 100 95 103" stroke="#333" stroke-width="1.8" fill="none" stroke-linecap="round"/>
    <!-- eyebrows raised -->
    <path d="M82 90 Q85 87 89 90" stroke="#5D4037" stroke-width="2" fill="none"/>
    <path d="M91 90 Q95 87 99 90" stroke="#5D4037" stroke-width="2" fill="none"/>
    <rect x="72" y="110" width="36" height="32" fill="#37474F" rx="7"/>
    <!-- TEEN CENTER — looking at phone -->
    <circle cx="200" cy="90" r="19" fill="#FFCCBC"/>
    <path d="M182 90 Q182 68 200 65 Q218 68 218 90" fill="#212121"/>
    <circle cx="195" cy="91" r="2.5" fill="#333"/>
    <circle cx="205" cy="91" r="2.5" fill="#333"/>
    <!-- teen smiling at phone -->
    <path d="M194 98 Q200 104 206 98" stroke="#333" stroke-width="1.8" fill="none" stroke-linecap="round"/>
    <rect x="182" y="105" width="36" height="32" fill="#7B1FA2" rx="7"/>
    <!-- head tilted down slightly -->
    <!-- PHONE in teen's hands -->
    <rect x="186" y="105" width="24" height="40" fill="#1A1A1A" rx="5"/>
    <rect x="189" y="108" width="18" height="32" fill="#42A5F5" rx="3"/>
    <!-- phone glow on face -->
    <ellipse cx="200" cy="95" rx="18" ry="14" fill="#42A5F5" opacity=".12"/>
    <!-- phone screen content (app icons) -->
    <rect x="191" y="111" width="6" height="6" fill="#E53935" rx="1"/>
    <rect x="200" y="111" width="6" height="6" fill="#66BB6A" rx="1"/>
    <rect x="191" y="119" width="6" height="6" fill="#FFD700" rx="1"/>
    <rect x="200" y="119" width="6" height="6" fill="#FF7043" rx="1"/>
    <!-- PARENT RIGHT — talking, ignored -->
    <circle cx="310" cy="95" r="19" fill="#FFCCBC"/>
    <path d="M292 95 Q292 72 310 69 Q328 72 328 95" fill="#6D4C41"/>
    <circle cx="305" cy="95" r="2.5" fill="#333"/>
    <circle cx="315" cy="95" r="2.5" fill="#333"/>
    <path d="M305 102 Q310 107 315 102" stroke="#333" stroke-width="1.8" fill="none" stroke-linecap="round"/>
    <rect x="292" y="110" width="36" height="32" fill="#E91E8C" rx="7"/>
    <!-- speech bubble (talking, ignored) -->
    <rect x="316" y="60" width="72" height="26" rx="13" fill="#fff" stroke="#CFD8DC" stroke-width="1.5"/>
    <text x="352" y="77" text-anchor="middle" font-family="Arial,sans-serif" font-size="10" fill="#607D8B">How was school?</text>
    <polygon points="316,76 308,82 318,82" fill="#fff" stroke="#CFD8DC" stroke-width="1"/>
    <!-- notification on teen's side — no response -->
    <rect x="10" y="68" width="55" height="22" rx="11" fill="#FFE0B2" stroke="#FFA000" stroke-width="1"/>
    <text x="37" y="83" text-anchor="middle" font-family="Arial,sans-serif" font-size="9" fill="#E65100">... 😶</text>
  </svg>`,
};
const state={token:localStorage.getItem('ibsl_exam_token')||'',profile:null,data:null,section:'home',exam:null,qIndex:0,answers:{}};
async function rpc(action,payload={}) {
  if(!API_URL || API_URL.includes('PEGA_AQUI')) throw new Error('Falta configurar API_URL en config.js');
  const res = await fetch(API_URL, {
    method:'POST',
    headers:{'Content-Type':'text/plain;charset=utf-8'},
    body:JSON.stringify({action,payload:{...payload,token:state.token}})
  });
  if(!res.ok) throw new Error('No se pudo conectar con el servidor.');
  const r = await res.json();
  if(r && r.ok===false) throw new Error(r.error||'Error del servidor');
  return r;
}
function esc(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function byId(id){return document.getElementById(id)}
function showMsg(id,msg,ok=false){byId(id).innerHTML='<div class="msg '+(ok?'ok':'err')+'">'+esc(msg)+'</div>'}
async function login(){try{const r=await rpc('login',{username:byId('loginUser').value,password:byId('loginPass').value});state.token=r.token;state.profile=r.profile;localStorage.setItem('ibsl_exam_token',state.token);await boot()}catch(e){showMsg('loginMsg',e.message)}}
async function boot(){try{if(!state.token)return showLogin();const r=await rpc('bootstrap');state.profile=r.profile;state.data=r;byId('who').textContent=r.profile.name+' · '+roleName(r.profile.role);byId('who').classList.remove('hidden');byId('logoutBtn').classList.remove('hidden');byId('loginView').classList.add('hidden');if(r.profile.role==='STUDENT'){byId('staffView').classList.add('hidden');byId('studentView').classList.remove('hidden');renderStudentHome()}else{byId('studentView').classList.add('hidden');byId('staffView').classList.remove('hidden');renderSidebar();renderStaff('home')}}catch(e){localStorage.removeItem('ibsl_exam_token');state.token='';showLogin();}}
function showLogin(){byId('loginView').classList.remove('hidden');byId('staffView').classList.add('hidden');byId('studentView').classList.add('hidden');byId('who').classList.add('hidden');byId('logoutBtn').classList.add('hidden')}
async function logout(){try{await rpc('logout')}catch(e){}localStorage.removeItem('ibsl_exam_token');state.token='';state.profile=null;showLogin()}
function roleName(r){return r==='COORDINATOR'?'Coordinación':r==='TEACHER'?'Maestro':'Alumno'}
function renderSidebar(){const c=state.profile.role==='COORDINATOR';const items=[['home','Inicio'],['students','Alumnos'],['exams',c?'Exámenes y preguntas':'Control de exámenes'],['results','Resultados']];if(c)items.splice(1,0,['groups','Grados y grupos'],['teachers','Maestros']);byId('sidebar').innerHTML=items.map(x=>`<button class="navbtn ${state.section===x[0]?'active':''}" onclick="renderStaff('${x[0]}')">${x[1]}</button>`).join('')}
function renderStaff(sec){state.section=sec;renderSidebar();if(sec==='home')return renderHome();if(sec==='groups')return renderGroups();if(sec==='teachers')return renderTeachers();if(sec==='students')return renderStudents();if(sec==='exams')return renderExams();if(sec==='results')return renderResults();}
function renderHome(){const d=state.data, students=d.students||[],groups=d.groups||[],exams=d.exams||[];byId('staffContent').innerHTML=`<h2>Panel ${roleName(state.profile.role)}</h2><div class="stats"><div class="stat"><span>Alumnos</span><b>${students.length}</b></div><div class="stat"><span>Grupos</span><b>${groups.length}</b></div><div class="stat"><span>Exámenes activos</span><b>${exams.length}</b></div><div class="stat"><span>Rol</span><b style="font-size:18px">${roleName(state.profile.role)}</b></div></div><div class="card"><h3>Plataforma de evaluación</h3><p>Desde aquí puedes consultar alumnos y resultados. Coordinación además administra grados, grupos, maestros, exámenes y preguntas.</p></div>`}
function gradeName(id){return (state.data.grades.find(x=>x.id===id)||{}).name||''} function groupName(id){const g=state.data.groups.find(x=>x.id===id)||{};return gradeName(g.gradeId)+' '+(g.name||'')}
function renderGroups(){const gs=state.data.grades||[],groups=state.data.groups||[],teachers=state.data.users||[];byId('staffContent').innerHTML=`<h2>Grados y grupos</h2><div class="grid2"><div class="card"><h3>Agregar grado</h3><label>Nombre</label><input id="gradeName" placeholder="Ej. 7° Primaria"><label>Orden</label><input id="gradeSort" type="number" value="7"><button class="btn primary" style="margin-top:10px" onclick="addGrade()">Agregar grado</button></div><div class="card"><h3>Agregar grupo</h3><label>Grado</label><select id="groupGrade">${gs.map(g=>`<option value="${g.id}">${esc(g.name)}</option>`).join('')}</select><label>Grupo</label><input id="groupName" placeholder="A"><label>Maestro (opcional)</label><select id="groupTeacher"><option value="">Sin asignar</option>${teachers.map(t=>`<option value="${t.teacherId||t.id}">${esc(t.name)}</option>`).join('')}</select><button class="btn primary" style="margin-top:10px" onclick="addGroup()">Agregar grupo</button></div></div><div class="card" style="margin-top:14px"><h3>Grupos actuales</h3><div class="tablewrap"><table><tr><th>Grado</th><th>Grupo</th><th>Maestro ID</th></tr>${groups.map(g=>`<tr><td>${esc(gradeName(g.gradeId))}</td><td>${esc(g.name)}</td><td>${esc(g.teacherId||'Sin asignar')}</td></tr>`).join('')}</table></div></div>`}
async function addGrade(){try{await rpc('createGrade',{name:byId('gradeName').value,sort:byId('gradeSort').value});await refresh('groups')}catch(e){alert(e.message)}} async function addGroup(){try{await rpc('createGroup',{gradeId:byId('groupGrade').value,name:byId('groupName').value,teacherId:byId('groupTeacher').value});await refresh('groups')}catch(e){alert(e.message)}}
function renderTeachers(){const teachers=state.data.users||[],groups=state.data.groups||[];byId('staffContent').innerHTML=`<h2>Maestros</h2><div class="grid2"><div class="card"><h3>Crear maestro</h3><label>Nombre</label><input id="tName"><label>Usuario</label><input id="tUser"><label>Contraseña inicial</label><input id="tPass" type="password"><label>Grupos</label><div>${groups.map(g=>`<label style="font-weight:400"><input style="width:auto" type="checkbox" name="tGroups" value="${g.id}"> ${esc(groupName(g.id))}</label>`).join('')}</div><button class="btn primary" onclick="addTeacher()">Crear maestro</button></div><div class="card"><h3>Maestros existentes</h3><div class="tablewrap"><table><tr><th>Nombre</th><th>Usuario</th><th>Acción</th></tr>${teachers.map(t=>`<tr><td>${esc(t.name)}</td><td>${esc(t.username)}</td><td><button class="btn" onclick="resetTeacher('${t.id}')">Nueva contraseña</button></td></tr>`).join('')}</table></div></div></div>`}
async function addTeacher(){try{const groupIds=[...document.querySelectorAll('[name=tGroups]:checked')].map(x=>x.value);await rpc('createTeacher',{name:byId('tName').value,username:byId('tUser').value,password:byId('tPass').value,groupIds});await refresh('teachers')}catch(e){alert(e.message)}} async function resetTeacher(id){const p=prompt('Escribe la nueva contraseña:');if(!p)return;try{await rpc('resetTeacherPassword',{userId:id,password:p});alert('Contraseña actualizada.')}catch(e){alert(e.message)}}
function renderStudents(){const st=state.data.students||[],groups=state.data.groups||[],grades=state.data.grades||[];const can=state.profile.role==='COORDINATOR';byId('staffContent').innerHTML=`<h2>Alumnos</h2>${can?`<div class="card"><h3>Agregar alumno</h3><div class="row"><div><label>Nombre completo</label><input id="sName"></div><div><label>Grado</label><select id="sGrade" onchange="filterStudentGroups()">${grades.map(g=>`<option value="${g.id}">${esc(g.name)}</option>`).join('')}</select></div><div><label>Grupo</label><select id="sGroup"></select></div></div><div class="row"><div><label>Usuario (opcional)</label><input id="sUser" placeholder="Se genera automáticamente"></div><div><label>PIN (opcional)</label><input id="sPin" placeholder="4 dígitos"></div></div><button class="btn primary" onclick="addStudent()">Crear alumno</button></div>`:''}<div class="card" style="margin-top:14px"><div class="tablewrap"><table><tr><th>Alumno</th><th>Grado/Grupo</th><th>Usuario</th><th>Estado</th>${can?'<th>QR</th>':''}</tr>${st.map(s=>`<tr><td>${esc(s.name)}</td><td>${esc(groupName(s.groupId))}</td><td>${esc(s.username)}</td><td>${s.active===false?'Inactivo':'Activo'}</td>${can?`<td><button class="btn" onclick="showQR('${s.id}')">QR</button></td>`:''}</tr>`).join('')}</table></div></div>`;if(can)filterStudentGroups()}
function filterStudentGroups(){const el=byId('sGroup');if(!el)return;const gid=byId('sGrade').value;el.innerHTML=(state.data.groups||[]).filter(g=>g.gradeId===gid).map(g=>`<option value="${g.id}">${esc(g.name)}</option>`).join('')}
async function addStudent(){try{const r=await rpc('createStudent',{name:byId('sName').value,gradeId:byId('sGrade').value,groupId:byId('sGroup').value,username:byId('sUser').value,pin:byId('sPin').value});alert(`Alumno creado
Usuario: ${r.username}
PIN: ${r.pin}`);await refresh('students')}catch(e){alert(e.message)}}
function showQR(id){const s=state.data.students.find(x=>x.id===id);if(!s)return;byId('modalBody').innerHTML=`<h3>${esc(s.name)}</h3><p>Usuario: <b>${esc(s.username)}</b></p><p class="small">El QR abre la plataforma con el usuario listo. El alumno todavía escribe su PIN.</p><div id="qr"></div>`;byId('modal').classList.remove('hidden');setTimeout(()=>new QRCode(byId('qr'),{text:(PUBLIC_APP_URL||location.href.split('?')[0])+'?u='+encodeURIComponent(s.username),width:190,height:190}),30)}
function closeModal(){byId('modal').classList.add('hidden')}
function renderExams(){
  const ex=state.data.exams||[];
  if(state.profile.role==='TEACHER') return renderTeacherExamControl();
  byId('staffContent').innerHTML=`<h2>Exámenes y preguntas</h2><div class="card"><h3>Crear examen</h3><label>Título</label><input id="eTitle"><label>Materia</label><input id="eSubject" value="English"><label>Grados</label><div>${state.data.grades.map(g=>`<label style="font-weight:400"><input style="width:auto" type="checkbox" name="eGrades" value="${g.id}"> ${esc(g.name)}</label>`).join('')}</div><div class="row"><div><label>Intentos</label><input id="eAttempts" type="number" min="1" value="1"></div><div><label>Mostrar calificación</label><select id="eShow"><option value="1">Sí</option><option value="0">No</option></select></div></div><button class="btn primary" onclick="addExam()">Crear examen</button></div><div style="margin-top:14px">${ex.map(e=>examAdminCard(e)).join('')}</div>`
}
function examAdminCard(e){const qs=(state.data.questions||[]).filter(q=>q.examId===e.id);return `<div class="exam-card"><div class="row"><div><h3>${esc(e.title)}</h3><div class="small">${esc(e.subject)} · ${qs.length} preguntas · ${e.active===false?'Inactivo':'Activo'}</div></div><button class="btn" onclick="questionManager('${e.id}')">Preguntas</button></div></div>`}
async function addExam(){try{const gradeIds=[...document.querySelectorAll('[name=eGrades]:checked')].map(x=>x.value);await rpc('createExam',{title:byId('eTitle').value,subject:byId('eSubject').value,gradeIds,maxAttempts:byId('eAttempts').value,showScore:byId('eShow').value==='1'});await refresh('exams')}catch(e){alert(e.message)}}
function examAccessActive(examId,groupId){return (state.data.examAccess||[]).some(a=>a.examId===examId&&a.groupId===groupId&&a.active!==false)}
function renderTeacherExamControl(){
  const exams=state.data.exams||[], groups=state.data.groups||[];
  const cards=[];
  groups.forEach(g=>{
    const gradeExams=exams.filter(e=>String(e.gradeIds||'').split(',').includes(g.gradeId));
    cards.push(`<div class="card" style="margin-bottom:14px"><h3>${esc(groupName(g.id))}</h3><div class="small" style="margin-bottom:10px">Activa el examen únicamente durante el tiempo en que tus alumnos podrán contestarlo.</div>${gradeExams.length?gradeExams.map(e=>{const on=examAccessActive(e.id,g.id);return `<div class="exam-toggle-row"><div><b>${esc(e.title)}</b><div class="small">${esc(e.subject)} · ${on?'Disponible para alumnos':'Cerrado'}</div></div><label class="switch" title="${on?'Desactivar':'Activar'} examen"><input type="checkbox" ${on?'checked':''} onchange="toggleTeacherExam('${e.id}','${g.id}',this.checked,this)"><span class="slider"></span></label></div>`}).join(''):'<div class="small">No hay exámenes asignados al grado de este grupo.</div>'}</div>`)
  });
  byId('staffContent').innerHTML=`<h2>Control de exámenes</h2><div class="card" style="margin-bottom:14px"><b>Disponibilidad para alumnos</b><p class="small">Cuando el interruptor está apagado, los alumnos del grupo no verán ni podrán abrir ese examen. El cambio es inmediato.</p></div>${cards.join('')||'<div class="card">No tienes grupos asignados.</div>'}`;
}
async function toggleTeacherExam(examId,groupId,active,el){
  el.disabled=true;
  try{await rpc('toggleExamAvailability',{examId,groupId,active});await refresh('exams')}
  catch(e){el.checked=!active;el.disabled=false;alert(e.message)}
}
function questionManager(examId){const e=state.data.exams.find(x=>x.id===examId),qs=(state.data.questions||[]).filter(q=>q.examId===examId).sort((a,b)=>a.order-b.order);byId('staffContent').innerHTML=`<button class="btn" onclick="renderStaff('exams')">← Volver</button><h2 style="margin-top:12px">${esc(e.title)}</h2><div class="grid2"><div class="card"><h3>Agregar pregunta</h3><label>Sección</label><select id="qSection"><option>Reading</option><option>Language</option><option>Oral</option></select><label>Tipo</label><select id="qType" onchange="toggleQType()"><option value="choice">Opción múltiple</option><option value="writing">Respuesta escrita</option></select><label>Pregunta</label><textarea id="qText"></textarea><label>Texto/pasaje opcional</label><textarea id="qPassage"></textarea><div id="choiceFields"><label>Opciones (una por línea)</label><textarea id="qOpts"></textarea><label>Respuesta correcta (1, 2, 3...)</label><input id="qAns" type="number" min="1" value="1"></div><label>Audio opcional</label><textarea id="qAudio"></textarea><label>URL de imagen opcional</label><input id="qImage"><button class="btn primary" style="margin-top:10px" onclick="addQuestion('${examId}')">Agregar</button></div><div class="card"><h3>Preguntas actuales</h3>${qs.map(q=>`<div style="padding:10px 0;border-bottom:1px solid #e5e7eb"><b>${q.order}. ${esc(q.text)}</b><div class="small">${esc(q.section)} · ${esc(q.type)}</div><button class="btn danger" onclick="removeQuestion('${q.id}','${examId}')">Quitar</button></div>`).join('')}</div></div>`}
function toggleQType(){const c=byId('choiceFields');if(c)c.style.display=byId('qType').value==='choice'?'block':'none'} async function addQuestion(examId){try{const opts=byId('qOpts').value.split('\n').map(x=>x.trim()).filter(Boolean);await rpc('addQuestion',{examId,section:byId('qSection').value,type:byId('qType').value,text:byId('qText').value,passage:byId('qPassage').value,options:opts,answer:Math.max(0,Number(byId('qAns').value)-1),audioText:byId('qAudio').value,imageUrl:byId('qImage').value});await refresh();questionManager(examId)}catch(e){alert(e.message)}} async function removeQuestion(id,examId){if(!confirm('¿Quitar esta pregunta?'))return;try{await rpc('deleteQuestion',{questionId:id});await refresh();questionManager(examId)}catch(e){alert(e.message)}}
function renderResults(){const grades=state.data.grades||[],groups=state.data.groups||[],ex=state.data.exams||[];byId('staffContent').innerHTML=`<h2>Resultados</h2><div class="card"><div class="row"><div><label>Grado</label><select id="rGrade"><option value="">Todos</option>${grades.map(g=>`<option value="${g.id}">${esc(g.name)}</option>`).join('')}</select></div><div><label>Grupo</label><select id="rGroup"><option value="">Todos</option>${groups.map(g=>`<option value="${g.id}">${esc(groupName(g.id))}</option>`).join('')}</select></div><div><label>Examen</label><select id="rExam"><option value="">Todos</option>${ex.map(e=>`<option value="${e.id}">${esc(e.title)}</option>`).join('')}</select></div></div><button class="btn primary" onclick="loadResults()">Ver resultados</button></div><div id="resultsBox" style="margin-top:14px"></div>`;loadResults()}
async function loadResults(){try{const r=await rpc('results',{gradeId:byId('rGrade')?.value||'',groupId:byId('rGroup')?.value||'',examId:byId('rExam')?.value||''});const rows=r.rows||[];const avg=rows.length?Math.round(rows.reduce((a,x)=>a+Number(x.percent||0),0)/rows.length*10)/10:0;byId('resultsBox').innerHTML=`<div class="stats"><div class="stat"><span>Presentados</span><b>${rows.length}</b></div><div class="stat"><span>Promedio</span><b>${avg}%</b></div></div><div class="tablewrap"><table><tr><th>Alumno</th><th>Examen</th><th>Grupo</th><th>Resultado</th><th>Reading</th><th>Language</th><th>Oral</th><th>Fecha</th></tr>${rows.map(x=>`<tr><td>${esc(x.studentName)}</td><td>${esc(x.examTitle)}</td><td>${esc(x.groupName)}</td><td><b>${x.score}/${x.total} (${x.percent}%)</b></td><td>${x.reading}</td><td>${x.language}</td><td>${x.oral}</td><td>${new Date(x.submittedAt).toLocaleString()}</td></tr>`).join('')}</table></div>`}catch(e){byId('resultsBox').innerHTML='<div class="msg err">'+esc(e.message)+'</div>'}}
async function refresh(sec){const r=await rpc('bootstrap');state.data=r;if(sec)renderStaff(sec)}
function renderStudentHome(){const ex=state.data.exams||[];byId('studentContent').innerHTML=`<h2>Hola, ${esc(state.profile.name)}</h2><p>Selecciona tu examen.</p>${ex.length?ex.map(e=>`<div class="exam-card"><h3>${esc(e.title)}</h3><div class="small">${esc(e.subject)} · Máximo ${e.maxAttempts} intento(s)</div><button class="btn primary" style="margin-top:10px" onclick="startStudentExam('${e.id}')">Comenzar</button></div>`).join(''):'<div class="card">No tienes exámenes activos en este momento.</div>'}`}
async function startStudentExam(id){try{const r=await rpc('getExamForStudent',{examId:id});state.exam=r;state.qIndex=0;state.answers={};renderQuestion()}catch(e){alert(e.message)}}
function renderQuestion(){const q=state.exam.questions[state.qIndex],n=state.exam.questions.length;let media='';if(q.imageKey&&IMAGES[q.imageKey])media=`<div class="imgwrap">${IMAGES[q.imageKey]}</div>`;else if(q.imageUrl)media=`<div class="imgwrap"><img src="${esc(q.imageUrl)}"></div>`;const opts=q.type==='choice'?q.options.map((o,i)=>`<button class="option ${state.answers[q.id]===i?'sel':''}" onclick="pick('${q.id}',${i})">${String.fromCharCode(65+i)}. ${esc(o)}</button>`).join(''):`<textarea id="writeAns" oninput="state.answers['${q.id}']=this.value">${esc(state.answers[q.id]||'')}</textarea>`;byId('studentContent').innerHTML=`<div style="max-width:780px;margin:auto"><div class="progress"><div style="width:${((state.qIndex+1)/n)*100}%"></div></div><div class="small">Pregunta ${state.qIndex+1} de ${n} · ${esc(q.section)}</div>${media}${q.audioText?`<button class="btn audio" onclick="speak(${JSON.stringify(q.audioText)})">🔊 Escuchar pregunta</button>`:''}<div class="qcard">${q.passage?`<div class="passage">${esc(q.passage)}</div>`:''}<h3>${state.qIndex+1}. ${esc(q.text)}</h3>${opts}<div class="row" style="margin-top:14px"><button class="btn" onclick="prevQ()" ${state.qIndex===0?'disabled':''}>← Anterior</button><button class="btn primary" onclick="nextQ()">${state.qIndex===n-1?'Terminar':'Siguiente →'}</button></div></div></div>`}
function pick(id,i){state.answers[id]=i;renderQuestion()} function prevQ(){if(state.qIndex>0){state.qIndex--;renderQuestion()}} function nextQ(){const q=state.exam.questions[state.qIndex];if(q.type==='choice'&&state.answers[q.id]===undefined)return alert('Selecciona una respuesta.');if(q.type==='writing'&&!String(state.answers[q.id]||'').trim())return alert('Escribe tu respuesta.');if(state.qIndex<state.exam.questions.length-1){state.qIndex++;renderQuestion()}else submitStudentExam()}
async function submitStudentExam(){if(!confirm('¿Entregar examen?'))return;try{const r=await rpc('submitExam',{examId:state.exam.exam.id,answers:state.answers});byId('studentContent').innerHTML=`<div class="card" style="max-width:560px;margin:40px auto;text-align:center"><h2>Examen entregado</h2>${r.showScore?`<div style="font-size:52px;font-weight:800;color:#1565c0">${r.percent}%</div><p>${r.score} de ${r.total} puntos</p>`:'<p>Tu examen fue enviado correctamente.</p>'}<button class="btn primary" onclick="refreshStudent()">Volver</button></div>`}catch(e){alert(e.message)}}
async function refreshStudent(){state.data=await rpc('bootstrap');renderStudentHome()} function speak(t){if(!speechSynthesis)return alert('Audio no disponible.');speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(t);u.lang='en-US';u.rate=.88;speechSynthesis.speak(u)}
(function init(){const p=new URLSearchParams(location.search);if(p.get('u'))byId('loginUser').value=p.get('u');boot()})();
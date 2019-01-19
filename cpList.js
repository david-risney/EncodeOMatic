const codepageList = [
    {
        "CodepageNumber":  37,
        "Source":  "unicode.org",
        "Description":  "IBM EBCDIC US-Canada"
    },
    {
        "CodepageNumber":  437,
        "Source":  "unicode.org",
        "Description":  "OEM United States"
    },
    {
        "CodepageNumber":  500,
        "Source":  "unicode.org",
        "Description":  "IBM EBCDIC International"
    },
    {
        "CodepageNumber":  620,
        "Source":  "NLS",
        "Description":  "Mazovia (Polish) MS-DOS"
    },
    {
        "CodepageNumber":  708,
        "Source":  "Windows 7",
        "Description":  "Arabic (ASMO 708)"
    },
    {
        "CodepageNumber":  720,
        "Source":  "Windows 7",
        "Description":  "Arabic (Transparent ASMO); Arabic (DOS)"
    },
    {
        "CodepageNumber":  737,
        "Source":  "unicode.org",
        "Description":  "OEM Greek (formerly 437G); Greek (DOS)"
    },
    {
        "CodepageNumber":  775,
        "Source":  "unicode.org",
        "Description":  "OEM Baltic; Baltic (DOS)"
    },
    {
        "CodepageNumber":  808,
        "Source":  "unicode.org",
        "Description":  "OEM Russian; Cyrillic + Euro symbol"
    },
    {
        "CodepageNumber":  850,
        "Source":  "unicode.org",
        "Description":  "OEM Multilingual Latin 1; Western European (DOS)"
    },
    {
        "CodepageNumber":  852,
        "Source":  "unicode.org",
        "Description":  "OEM Latin 2; Central European (DOS)"
    },
    {
        "CodepageNumber":  855,
        "Source":  "unicode.org",
        "Description":  "OEM Cyrillic (primarily Russian)"
    },
    {
        "CodepageNumber":  857,
        "Source":  "unicode.org",
        "Description":  "OEM Turkish; Turkish (DOS)"
    },
    {
        "CodepageNumber":  858,
        "Source":  "Windows 7",
        "Description":  "OEM Multilingual Latin 1 + Euro symbol"
    },
    {
        "CodepageNumber":  860,
        "Source":  "unicode.org",
        "Description":  "OEM Portuguese; Portuguese (DOS)"
    },
    {
        "CodepageNumber":  861,
        "Source":  "unicode.org",
        "Description":  "OEM Icelandic; Icelandic (DOS)"
    },
    {
        "CodepageNumber":  862,
        "Source":  "unicode.org",
        "Description":  "OEM Hebrew; Hebrew (DOS)"
    },
    {
        "CodepageNumber":  863,
        "Source":  "unicode.org",
        "Description":  "OEM French Canadian; French Canadian (DOS)"
    },
    {
        "CodepageNumber":  864,
        "Source":  "unicode.org",
        "Description":  "OEM Arabic; Arabic (864)"
    },
    {
        "CodepageNumber":  865,
        "Source":  "unicode.org",
        "Description":  "OEM Nordic; Nordic (DOS)"
    },
    {
        "CodepageNumber":  866,
        "Source":  "unicode.org",
        "Description":  "OEM Russian; Cyrillic (DOS)"
    },
    {
        "CodepageNumber":  869,
        "Source":  "unicode.org",
        "Description":  "OEM Modern Greek; Greek, Modern (DOS)"
    },
    {
        "CodepageNumber":  870,
        "Source":  "Windows 7",
        "Description":  "IBM EBCDIC Multilingual/ROECE (Latin 2)"
    },
    {
        "CodepageNumber":  872,
        "Source":  "unicode.org",
        "Description":  "OEM Cyrillic (primarily Russian) + Euro Symbol"
    },
    {
        "CodepageNumber":  874,
        "Source":  "unicode.org",
        "Description":  "Windows Thai"
    },
    {
        "CodepageNumber":  875,
        "Source":  "unicode.org",
        "Description":  "IBM EBCDIC Greek Modern"
    },
    {
        "CodepageNumber":  895,
        "Source":  "NLS",
        "Description":  "Kamenick? (Czech) MS-DOS"
    },
    {
        "CodepageNumber":  932,
        "Source":  "unicode.org",
        "Description":  "Japanese Shift-JIS"
    },
    {
        "CodepageNumber":  936,
        "Source":  "unicode.org",
        "Description":  "Simplified Chinese GBK"
    },
    {
        "CodepageNumber":  949,
        "Source":  "unicode.org",
        "Description":  "Korean"
    },
    {
        "CodepageNumber":  950,
        "Source":  "unicode.org",
        "Description":  "Traditional Chinese Big5"
    },
    {
        "CodepageNumber":  1010,
        "Source":  "IBM",
        "Description":  "IBM EBCDIC French"
    },
    {
        "CodepageNumber":  1026,
        "Source":  "unicode.org",
        "Description":  "IBM EBCDIC Turkish (Latin 5)"
    },
    {
        "CodepageNumber":  1047,
        "Source":  "Windows 7",
        "Description":  "IBM EBCDIC Latin 1/Open System"
    },
    {
        "CodepageNumber":  1132,
        "Source":  "IBM",
        "Description":  "IBM EBCDIC Lao (1132 / 1133 / 1341)"
    },
    {
        "CodepageNumber":  1140,
        "Source":  "Windows 7",
        "Description":  "IBM EBCDIC US-Canada (037 + Euro symbol)"
    },
    {
        "CodepageNumber":  1141,
        "Source":  "Windows 7",
        "Description":  "IBM EBCDIC Germany (20273 + Euro symbol)"
    },
    {
        "CodepageNumber":  1142,
        "Source":  "Windows 7",
        "Description":  "IBM EBCDIC Denmark-Norway (20277 + Euro symbol)"
    },
    {
        "CodepageNumber":  1143,
        "Source":  "Windows 7",
        "Description":  "IBM EBCDIC Finland-Sweden (20278 + Euro symbol)"
    },
    {
        "CodepageNumber":  1144,
        "Source":  "Windows 7",
        "Description":  "IBM EBCDIC Italy (20280 + Euro symbol)"
    },
    {
        "CodepageNumber":  1145,
        "Source":  "Windows 7",
        "Description":  "IBM EBCDIC Latin America-Spain (20284 + Euro symbol)"
    },
    {
        "CodepageNumber":  1146,
        "Source":  "Windows 7",
        "Description":  "IBM EBCDIC United Kingdom (20285 + Euro symbol)"
    },
    {
        "CodepageNumber":  1147,
        "Source":  "Windows 7",
        "Description":  "IBM EBCDIC France (20297 + Euro symbol)"
    },
    {
        "CodepageNumber":  1148,
        "Source":  "Windows 7",
        "Description":  "IBM EBCDIC International (500 + Euro symbol)"
    },
    {
        "CodepageNumber":  1149,
        "Source":  "Windows 7",
        "Description":  "IBM EBCDIC Icelandic (20871 + Euro symbol)"
    },
    {
        "CodepageNumber":  1200,
        "Source":  "magic",
        "Description":  "Unicode UTF-16, little endian (BMP of ISO 10646)"
    },
    {
        "CodepageNumber":  1201,
        "Source":  "magic",
        "Description":  "Unicode UTF-16, big endian"
    },
    {
        "CodepageNumber":  1250,
        "Source":  "unicode.org",
        "Description":  "Windows Central Europe"
    },
    {
        "CodepageNumber":  1251,
        "Source":  "unicode.org",
        "Description":  "Windows Cyrillic"
    },
    {
        "CodepageNumber":  1252,
        "Source":  "unicode.org",
        "Description":  "Windows Latin I"
    },
    {
        "CodepageNumber":  1253,
        "Source":  "unicode.org",
        "Description":  "Windows Greek"
    },
    {
        "CodepageNumber":  1254,
        "Source":  "unicode.org",
        "Description":  "Windows Turkish"
    },
    {
        "CodepageNumber":  1255,
        "Source":  "unicode.org",
        "Description":  "Windows Hebrew"
    },
    {
        "CodepageNumber":  1256,
        "Source":  "unicode.org",
        "Description":  "Windows Arabic"
    },
    {
        "CodepageNumber":  1257,
        "Source":  "unicode.org",
        "Description":  "Windows Baltic"
    },
    {
        "CodepageNumber":  1258,
        "Source":  "unicode.org",
        "Description":  "Windows Vietnam"
    },
    {
        "CodepageNumber":  1361,
        "Source":  "Windows 7",
        "Description":  "Korean (Johab)"
    },
    {
        "CodepageNumber":  10000,
        "Source":  "unicode.org",
        "Description":  "MAC Roman"
    },
    {
        "CodepageNumber":  10001,
        "Source":  "Windows 7",
        "Description":  "Japanese (Mac)"
    },
    {
        "CodepageNumber":  10002,
        "Source":  "Windows 7",
        "Description":  "MAC Traditional Chinese (Big5)"
    },
    {
        "CodepageNumber":  10003,
        "Source":  "Windows 7",
        "Description":  "Korean (Mac)"
    },
    {
        "CodepageNumber":  10004,
        "Source":  "Windows 7",
        "Description":  "Arabic (Mac)"
    },
    {
        "CodepageNumber":  10005,
        "Source":  "Windows 7",
        "Description":  "Hebrew (Mac)"
    },
    {
        "CodepageNumber":  10006,
        "Source":  "unicode.org",
        "Description":  "Greek (Mac)"
    },
    {
        "CodepageNumber":  10007,
        "Source":  "unicode.org",
        "Description":  "Cyrillic (Mac)"
    },
    {
        "CodepageNumber":  10008,
        "Source":  "Windows 7",
        "Description":  "MAC Simplified Chinese (GB 2312)"
    },
    {
        "CodepageNumber":  10010,
        "Source":  "Windows 7",
        "Description":  "Romanian (Mac)"
    },
    {
        "CodepageNumber":  10017,
        "Source":  "Windows 7",
        "Description":  "Ukrainian (Mac)"
    },
    {
        "CodepageNumber":  10021,
        "Source":  "Windows 7",
        "Description":  "Thai (Mac)"
    },
    {
        "CodepageNumber":  10029,
        "Source":  "unicode.org",
        "Description":  "MAC Latin 2 (Central European)"
    },
    {
        "CodepageNumber":  10079,
        "Source":  "unicode.org",
        "Description":  "Icelandic (Mac)"
    },
    {
        "CodepageNumber":  10081,
        "Source":  "unicode.org",
        "Description":  "Turkish (Mac)"
    },
    {
        "CodepageNumber":  10082,
        "Source":  "Windows 7",
        "Description":  "Croatian (Mac)"
    },
    {
        "CodepageNumber":  12000,
        "Source":  "magic",
        "Description":  "Unicode UTF-32, little endian byte order"
    },
    {
        "CodepageNumber":  12001,
        "Source":  "magic",
        "Description":  "Unicode UTF-32, big endian byte order"
    },
    {
        "CodepageNumber":  20000,
        "Source":  "Windows 7",
        "Description":  "CNS Taiwan (Chinese Traditional)"
    },
    {
        "CodepageNumber":  20001,
        "Source":  "Windows 7",
        "Description":  "TCA Taiwan"
    },
    {
        "CodepageNumber":  20002,
        "Source":  "Windows 7",
        "Description":  "ETEN Taiwan (Chinese Traditional)"
    },
    {
        "CodepageNumber":  20003,
        "Source":  "Windows 7",
        "Description":  "IBM5550 Taiwan"
    },
    {
        "CodepageNumber":  20004,
        "Source":  "Windows 7",
        "Description":  "TeleText Taiwan"
    },
    {
        "CodepageNumber":  20005,
        "Source":  "Windows 7",
        "Description":  "Wang Taiwan"
    },
    {
        "CodepageNumber":  20105,
        "Source":  "Windows 7",
        "Description":  "Western European IA5 (IRV International Alphabet 5)"
    },
    {
        "CodepageNumber":  20106,
        "Source":  "Windows 7",
        "Description":  "IA5 German (7-bit)"
    },
    {
        "CodepageNumber":  20107,
        "Source":  "Windows 7",
        "Description":  "IA5 Swedish (7-bit)"
    },
    {
        "CodepageNumber":  20108,
        "Source":  "Windows 7",
        "Description":  "IA5 Norwegian (7-bit)"
    },
    {
        "CodepageNumber":  20127,
        "Source":  "magic",
        "Description":  "US-ASCII (7-bit)"
    },
    {
        "CodepageNumber":  20261,
        "Source":  "Windows 7",
        "Description":  "T.61"
    },
    {
        "CodepageNumber":  20269,
        "Source":  "Windows 7",
        "Description":  "ISO 6937 Non-Spacing Accent"
    },
    {
        "CodepageNumber":  20273,
        "Source":  "Windows 7",
        "Description":  "IBM EBCDIC Germany"
    },
    {
        "CodepageNumber":  20277,
        "Source":  "Windows 7",
        "Description":  "IBM EBCDIC Denmark-Norway"
    },
    {
        "CodepageNumber":  20278,
        "Source":  "Windows 7",
        "Description":  "IBM EBCDIC Finland-Sweden"
    },
    {
        "CodepageNumber":  20280,
        "Source":  "Windows 7",
        "Description":  "IBM EBCDIC Italy"
    },
    {
        "CodepageNumber":  20284,
        "Source":  "Windows 7",
        "Description":  "IBM EBCDIC Latin America-Spain"
    },
    {
        "CodepageNumber":  20285,
        "Source":  "Windows 7",
        "Description":  "IBM EBCDIC United Kingdom"
    },
    {
        "CodepageNumber":  20290,
        "Source":  "Windows 7",
        "Description":  "IBM EBCDIC Japanese Katakana Extended"
    },
    {
        "CodepageNumber":  20297,
        "Source":  "Windows 7",
        "Description":  "IBM EBCDIC France"
    },
    {
        "CodepageNumber":  20420,
        "Source":  "Windows 7",
        "Description":  "IBM EBCDIC Arabic"
    },
    {
        "CodepageNumber":  20423,
        "Source":  "Windows 7",
        "Description":  "IBM EBCDIC Greek"
    },
    {
        "CodepageNumber":  20424,
        "Source":  "Windows 7",
        "Description":  "IBM EBCDIC Hebrew"
    },
    {
        "CodepageNumber":  20833,
        "Source":  "Windows 7",
        "Description":  "IBM EBCDIC Korean Extended"
    },
    {
        "CodepageNumber":  20838,
        "Source":  "Windows 7",
        "Description":  "IBM EBCDIC Thai"
    },
    {
        "CodepageNumber":  20866,
        "Source":  "Windows 7",
        "Description":  "Russian Cyrillic (KOI8-R)"
    },
    {
        "CodepageNumber":  20871,
        "Source":  "Windows 7",
        "Description":  "IBM EBCDIC Icelandic"
    },
    {
        "CodepageNumber":  20880,
        "Source":  "Windows 7",
        "Description":  "IBM EBCDIC Cyrillic Russian"
    },
    {
        "CodepageNumber":  20905,
        "Source":  "Windows 7",
        "Description":  "IBM EBCDIC Turkish"
    },
    {
        "CodepageNumber":  20924,
        "Source":  "Windows 7",
        "Description":  "IBM EBCDIC Latin 1/Open System (1047 + Euro symbol)"
    },
    {
        "CodepageNumber":  20932,
        "Source":  "Windows 7",
        "Description":  "Japanese (JIS 0208-1990 and 0212-1990)"
    },
    {
        "CodepageNumber":  20936,
        "Source":  "Windows 7",
        "Description":  "Simplified Chinese (GB2312-80)"
    },
    {
        "CodepageNumber":  20949,
        "Source":  "Windows 7",
        "Description":  "Korean Wansung"
    },
    {
        "CodepageNumber":  21025,
        "Source":  "Windows 7",
        "Description":  "IBM EBCDIC Cyrillic Serbian-Bulgarian"
    },
    {
        "CodepageNumber":  21027,
        "Source":  "NLS",
        "Description":  "Extended/Ext Alpha Lowercase"
    },
    {
        "CodepageNumber":  21866,
        "Source":  "Windows 7",
        "Description":  "Ukrainian Cyrillic (KOI8-U)"
    },
    {
        "CodepageNumber":  28591,
        "Source":  "unicode.org",
        "Description":  "ISO 8859-1 Latin 1 (Western European)"
    },
    {
        "CodepageNumber":  28592,
        "Source":  "unicode.org",
        "Description":  "ISO 8859-2 Latin 2 (Central European)"
    },
    {
        "CodepageNumber":  28593,
        "Source":  "unicode.org",
        "Description":  "ISO 8859-3 Latin 3"
    },
    {
        "CodepageNumber":  28594,
        "Source":  "unicode.org",
        "Description":  "ISO 8859-4 Baltic"
    },
    {
        "CodepageNumber":  28595,
        "Source":  "unicode.org",
        "Description":  "ISO 8859-5 Cyrillic"
    },
    {
        "CodepageNumber":  28596,
        "Source":  "unicode.org",
        "Description":  "ISO 8859-6 Arabic"
    },
    {
        "CodepageNumber":  28597,
        "Source":  "unicode.org",
        "Description":  "ISO 8859-7 Greek"
    },
    {
        "CodepageNumber":  28598,
        "Source":  "unicode.org",
        "Description":  "ISO 8859-8 Hebrew (ISO-Visual)"
    },
    {
        "CodepageNumber":  28599,
        "Source":  "unicode.org",
        "Description":  "ISO 8859-9 Turkish"
    },
    {
        "CodepageNumber":  28600,
        "Source":  "unicode.org",
        "Description":  "ISO 8859-10 Latin 6"
    },
    {
        "CodepageNumber":  28601,
        "Source":  "unicode.org",
        "Description":  "ISO 8859-11 Latin (Thai)"
    },
    {
        "CodepageNumber":  28603,
        "Source":  "unicode.org",
        "Description":  "ISO 8859-13 Latin 7 (Estonian)"
    },
    {
        "CodepageNumber":  28604,
        "Source":  "unicode.org",
        "Description":  "ISO 8859-14 Latin 8 (Celtic)"
    },
    {
        "CodepageNumber":  28605,
        "Source":  "unicode.org",
        "Description":  "ISO 8859-15 Latin 9"
    },
    {
        "CodepageNumber":  28606,
        "Source":  "unicode.org",
        "Description":  "ISO 8859-15 Latin 10"
    },
    {
        "CodepageNumber":  29001,
        "Source":  "Windows 7",
        "Description":  "Europa 3"
    },
    {
        "CodepageNumber":  38598,
        "Source":  "Windows 7",
        "Description":  "ISO 8859-8 Hebrew (ISO-Logical)"
    },
    {
        "CodepageNumber":  47451,
        "Source":  "unicode.org",
        "Description":  "Atari ST/TT"
    },
    {
        "CodepageNumber":  50220,
        "Source":  "Windows 7",
        "Description":  "ISO 2022 JIS Japanese with no halfwidth Katakana"
    },
    {
        "CodepageNumber":  50221,
        "Source":  "Windows 7",
        "Description":  "ISO 2022 JIS Japanese with halfwidth Katakana"
    },
    {
        "CodepageNumber":  50222,
        "Source":  "Windows 7",
        "Description":  "ISO 2022 Japanese JIS X 0201-1989 (1 byte Kana-SO/SI)"
    },
    {
        "CodepageNumber":  50225,
        "Source":  "Windows 7",
        "Description":  "ISO 2022 Korean"
    },
    {
        "CodepageNumber":  50227,
        "Source":  "Windows 7",
        "Description":  "ISO 2022 Simplified Chinese"
    },
    {
        "CodepageNumber":  51932,
        "Source":  "Windows 7",
        "Description":  "EUC Japanese"
    },
    {
        "CodepageNumber":  51936,
        "Source":  "Windows 7",
        "Description":  "EUC Simplified Chinese"
    },
    {
        "CodepageNumber":  51949,
        "Source":  "Windows 7",
        "Description":  "EUC Korean"
    },
    {
        "CodepageNumber":  52936,
        "Source":  "Windows 7",
        "Description":  "HZ-GB2312 Simplified Chinese"
    },
    {
        "CodepageNumber":  54936,
        "Source":  "Windows 7",
        "Description":  "GB18030 Simplified Chinese (4 byte)"
    },
    {
        "CodepageNumber":  57002,
        "Source":  "Windows 7",
        "Description":  "ISCII Devanagari"
    },
    {
        "CodepageNumber":  57003,
        "Source":  "Windows 7",
        "Description":  "ISCII Bengali"
    },
    {
        "CodepageNumber":  57004,
        "Source":  "Windows 7",
        "Description":  "ISCII Tamil"
    },
    {
        "CodepageNumber":  57005,
        "Source":  "Windows 7",
        "Description":  "ISCII Telugu"
    },
    {
        "CodepageNumber":  57006,
        "Source":  "Windows 7",
        "Description":  "ISCII Assamese"
    },
    {
        "CodepageNumber":  57007,
        "Source":  "Windows 7",
        "Description":  "ISCII Oriya"
    },
    {
        "CodepageNumber":  57008,
        "Source":  "Windows 7",
        "Description":  "ISCII Kannada"
    },
    {
        "CodepageNumber":  57009,
        "Source":  "Windows 7",
        "Description":  "ISCII Malayalam"
    },
    {
        "CodepageNumber":  57010,
        "Source":  "Windows 7",
        "Description":  "ISCII Gujarati"
    },
    {
        "CodepageNumber":  57011,
        "Source":  "Windows 7",
        "Description":  "ISCII Punjabi"
    },
    {
        "CodepageNumber":  65000,
        "Source":  "magic",
        "Description":  "Unicode (UTF-7)"
    },
    {
        "CodepageNumber":  65001,
        "Source":  "magic",
        "Description":  "Unicode (UTF-8)"
    }
];
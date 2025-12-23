/* ==========================================================================
   1. 데이터 및 초기화
   - colorTable: 하드코딩된 색상 데이터
   - colorList: 이름 정렬 및 RGB 변환된 객체 배열
========================================================================== */
const colorTable = [
    ['A1', '#fbf5e7'],
    ['A2', '#f2f7ce'],
    ['A3', '#fff1b4'],
    ['A4', '#fff754'],
    ['A5', '#ffea37'],
    ['A6', '#ffc63a'],
    ['A7', '#fe8441'],
    ['A8', '#e3c62a'],
    ['A9', '#fcab73'],
    ['A10', '#ff9141'],
    ['A11', '#fed68e'],
    ['A12', '#fcbd9c'],
    ['A13', '#ffd350'],
    ['A14', '#f26b33'],
    ['A15', '#fbfe3f'],
    ['A16', '#fbfec5'],
    ['A17', '#fbe47b'],
    ['A18', '#fccf93'],
    ['A19', '#ff8d8c'],
    ['B1', '#e9f04a'],
    ['B2', '#b5ec47'],
    ['B3', '#98f4ac'],
    ['B4', '#53fa48'],
    ['B5', '#71d364'],
    ['B6', '#7ce9c4'],
    ['B7', '#3cb690'],
    ['B8', '#14904b'],
    ['B9', '#26513a'],
    ['B10', '#ade0d5'],
    ['B11', '#64771e'],
    ['B12', '#1f705a'],
    ['B13', '#defbaf'],
    ['B14', '#cdef38'],
    ['B15', '#2a4c33'],
    ['B16', '#dcf6b7'],
    ['B17', '#a4b026'],
    ['B18', '#e2fc5b'],
    ['B19', '#5bd0b6'],
    ['B20', '#e6fce5'],
    ['B24', '#effcb6'],
    ['C1', '#f0fef1'],
    ['C2', '#d2f9f5'],
    ['C3', '#b1f2fe'],
    ['C4', '#67dcfe'],
    ['C5', '#21bbe1'],
    ['C6', '#7cbdf2'],
    ['C7', '#378ae5'],
    ['C8', '#176ec1'],
    ['C10', '#5acef7'],
    ['C11', '#44d5dc'],
    ['C12', '#1e3e6a'],
    ['C13', '#cfecfe'],
    ['C14', '#eafdfb'],
    ['C15', '#30e0e9'],
    ['C16', '#095493'],
    ['C17', '#7ae7f4'],
    ['C19', '#2496b9'],
    ['C20', '#197bc0'],
    ['C21', '#e0eef7'],
    ['D1', '#b8ceff'],
    ['D2', '#9ca8da'],
    ['D3', '#224bb4'],
    ['D4', '#2e4770'],
    ['D5', '#c672b6'],
    ['D6', '#a69ee3'],
    ['D7', '#8c6fc2'],
    ['D8', '#e1d9fe'],
    ['D9', '#d5c6fd'],
    ['D10', '#341c4e'],
    ['D11', '#c3d8ff'],
    ['D12', '#dbb2e9'],
    ['D13', '#c44ead'],
    ['D14', '#8432a2'],
    ['D15', '#49287f'],
    ['D16', '#e5eafe'],
    ['D17', '#c8d5fc'],
    ['D18', '#b691c7'],
    ['D19', '#e5cbf6'],
    ['D20', '#a654cf'],
    ['D21', '#89329b'],
    ['D22', '#594c94'],
    ['D23', '#f2e4fd'],
    ['E1', '#fed3cc'],
    ['E2', '#f9d7ed'],
    ['E3', '#f9a0cd'],
    ['E4', '#ee78ad'],
    ['E5', '#f851a7'],
    ['E6', '#f72f7d'],
    ['E7', '#9f1571'],
    ['E8', '#fbe1ea'],
    ['E9', '#e98dd6'],
    ['E10', '#c23976'],
    ['E11', '#fcede8'],
    ['E12', '#fdb1d7'],
    ['E13', '#ab1286'],
    ['E14', '#fed2c1'],
    ['E15', '#ead4d6'],
    ['E16', '#fff2f1'],
    ['E17', '#fce9f4'],
    ['E18', '#fad5e6'],
    ['E19', '#f7d2f2'],
    ['F1', '#fca39b'],
    ['F2', '#f86a64'],
    ['F3', '#eb4a56'],
    ['F4', '#fc0d28'],
    ['F5', '#e7202a'],
    ['F6', '#b83d34'],
    ['F7', '#8e213b'],
    ['F8', '#b80930'],
    ['F9', '#e7708c'],
    ['F10', '#9c4c30'],
    ['F11', '#703128'],
    ['F12', '#fd435a'],
    ['F13', '#cf4d31'],
    ['F14', '#fbadad'],
    ['F16', '#fbdddc'],
    ['G1', '#ffe6c7'],
    ['G2', '#fdccb9'],
    ['G3', '#f4c3b3'],
    ['G4', '#e2b2a0'],
    ['G5', '#f5a671'],
    ['G6', '#ef966a'],
    ['G7', '#905537'],
    ['G8', '#4b251c'],
    ['G9', '#eebc82'],
    ['G10', '#cb9231'],
    ['G11', '#e6c798'],
    ['G12', '#deb083'],
    ['G13', '#d68f57'],
    ['G14', '#8e6350'],
    ['G15', '#f1f3db'],
    ['G16', '#f5dcd0'],
    ['G17', '#6d574c'],
    ['G18', '#feecd8'],
    ['G19', '#eaa452'],
    ['G20', '#b26540'],
    ['H1(투명)', '#faf9fe'],
    ['H2', '#ffffff'],
    ['H3', '#ccc6d0'],
    ['H4', '#989192'],
    ['H5', '#646263'],
    ['H6', '#383639'],
    ['H7', '#000000'],
    ['H8', '#f9e5ee'],
    ['H9', '#e7e4db'],
    ['H10', '#e5e5f1'],
    ['H11', '#cccccc'],
    ['H12', '#fcf8ec'],
    ['H13', '#f0decd'],
    ['H14', '#d8dde3'],
    ['H15', '#99a8c2'],
    ['H17', '#f8f2f4'],
    ['H19', '#f4ece2'],
];

// 이름 정렬 함수 (A1, A2 ... A10 순서 보정)
function compareColorName(a, b) {
    const regex = /^([A-Z]+)(\d+)/;
    const matchA = a.name.match(regex);
    const matchB = b.name.match(regex);

    if (!matchA || !matchB) return a.name.localeCompare(b.name);

    const alphaA = matchA[1];
    const alphaB = matchB[1];

    if (alphaA !== alphaB) return alphaA.localeCompare(alphaB);
    return parseInt(matchA[2], 10) - parseInt(matchB[2], 10);
}

// 팔레트 정렬용 (RGB 순)
function sortByRGB(a, b) {
    if (a.rgb.r !== b.rgb.r) return a.rgb.r - b.rgb.r;
    if (a.rgb.g !== b.rgb.g) return a.rgb.g - b.rgb.g;
    return a.rgb.b - b.rgb.b;
}

// 초기 데이터 가공
const colorList = colorTable
    .map((item) => ({
        name: item[0],
        hex: item[1],
        rgb: hexToRgb(item[1]),
    }))
    .sort(compareColorName);

/* ==========================================================================
   2. 이벤트 리스너 및 메인 실행
========================================================================== */
window.onload = function () {
    renderOwnedColors('name');
};

function loadImage(event) {
    const img = new Image();
    img.onload = function () {
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');

        // [추가된 코드] 캔버스를 화면에 표시
        canvas.style.display = 'block';

        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        const colorSet = new Set();

        for (let i = 0; i < data.length; i += 4) {
            if (data[i + 3] === 0) continue; // 투명 제외
            colorSet.add(`${data[i]},${data[i + 1]},${data[i + 2]}`);
        }

        const extractedColors = Array.from(colorSet).map((c) => {
            const [r, g, b] = c.split(',').map(Number);
            return { r, g, b };
        });

        renderExtractedColors(extractedColors);
    };
    img.src = URL.createObjectURL(event.target.files[0]);
}

/* ==========================================================================
   3. 화면 렌더링 함수
========================================================================== */

// 보유 색상 리스트 표시
function renderOwnedColors(mode = 'name') {
    const container = document.getElementById('myColors');
    container.innerHTML = '';

    const sorted =
        mode === 'palette'
            ? [...colorList].sort(sortByRGB)
            : [...colorList].sort(compareColorName);

    let currentGroup = '';
    let rowDiv = null;

    sorted.forEach((c) => {
        const alpha = c.name.match(/^([A-Z]+)/)[1];

        // 이름순 정렬일 때만 알파벳별 줄바꿈
        if (mode === 'name' && alpha !== currentGroup) {
            currentGroup = alpha;
            rowDiv = document.createElement('div');
            rowDiv.className = 'color-row';
            container.appendChild(rowDiv);
        }
        // 팔레트 정렬일 때 초기 줄 생성
        if (mode === 'palette' && !rowDiv) {
            rowDiv = document.createElement('div');
            rowDiv.className = 'color-row';
            container.appendChild(rowDiv);
        }

        const item = document.createElement('div');
        item.className = 'owned-color-item';
        item.style.backgroundColor = c.hex;

        const label = document.createElement('div');
        label.className = 'owned-color-label';
        label.innerText = c.name;
        label.style.color = getTextColor(c.rgb);

        item.appendChild(label);
        rowDiv.appendChild(item);
    });
}

/* ==========================================================================
   [수정] 화면 렌더링 함수 - 추출된 색상 매칭 결과 표시
========================================================================== */
function renderExtractedColors(colors) {
    const container = document.getElementById('extractedColors');
    container.innerHTML = '';

    // [핵심] 1:1 중복 없는 전체 매칭 실행
    const matchedResults = matchColorsGlobally(colors);

    // 1. [추가] 정렬을 위해 추출된 색상과 매칭된 결과를 하나의 객체로 묶음
    const combinedList = colors.map((color, index) => ({
        extracted: color,
        recommended: matchedResults[index],
    }));

    // 2. [추가] 추천된 색상의 이름순(A1, A2...)으로 정렬
    // compareColorName 함수는 파일 상단에 이미 정의되어 있습니다.
    combinedList.sort((a, b) => {
        if (!a.recommended && !b.recommended) return 0;
        if (!a.recommended) return 1; // 매칭 실패한 건 뒤로
        if (!b.recommended) return -1;

        return compareColorName(a.recommended, b.recommended);
    });

    // 3. 정렬된 리스트를 순회하며 렌더링
    combinedList.forEach((item) => {
        const bestMatch = item.recommended;
        const color = item.extracted; // (정렬된 순서에 맞는) 원본 추출 색상

        const wrapper = document.createElement('div');
        wrapper.className = 'compare-item';

        // 1. 추천 색상 (보유 블록)
        const recommend = document.createElement('div');
        recommend.className = 'recommend-color';

        if (bestMatch) {
            recommend.style.backgroundColor = bestMatch.hex;
            const recommendLabel = document.createElement('div');
            recommendLabel.className = 'recommend-label';
            recommendLabel.innerText = bestMatch.name;
            recommendLabel.style.color = getTextColor(bestMatch.rgb);
            recommend.appendChild(recommendLabel);
        } else {
            recommend.style.backgroundColor = '#ccc';
            recommend.innerText = 'X'; // 매칭 실패
        }

        // 2. 원본 추출 색상
        const extracted = document.createElement('div');
        extracted.className = 'extracted-color';
        extracted.style.backgroundColor = `rgb(${color.r}, ${color.g}, ${color.b})`;

        wrapper.appendChild(recommend);
        wrapper.appendChild(extracted);
        container.appendChild(wrapper);
    });
}

/* ==========================================================================
   4. 핵심 알고리즘: 1:1 매칭 & 색조 보정
========================================================================== */
function matchColorsGlobally(extractedColors) {
    const pairs = [];

    extractedColors.forEach((ec, ei) => {
        const ecLab = rgbToLab(ec);
        const ecHue = rgbToHue(ec);
        const ecChroma = labChroma(ecLab);
        const isEcGrayscale = ecChroma < 10; // 무채색 판별

        colorList.forEach((oc, oi) => {
            const ocLab = rgbToLab(oc.rgb);
            const ocChroma = labChroma(ocLab);

            // 기본 점수: DeltaE 2000 (작을수록 비슷함)
            let finalScore = deltaE2000(ecLab, ocLab);

            // [보정 로직] 올리브(녹색) vs 갈색(주황) 구분 강화
            const isOcGrayscale = ocChroma < 10;

            if (!isEcGrayscale && !isOcGrayscale) {
                const hueDiff = hueDistance(ecHue, rgbToHue(oc.rgb));

                // Hue 차이가 25도 이상이면 벌점
                if (hueDiff > 25) finalScore += hueDiff * 2;
                // Hue 차이가 45도 이상이면 강력한 벌점 (완전 다른 색)
                if (hueDiff > 45) finalScore += 500;
            } else if (isEcGrayscale !== isOcGrayscale) {
                // 무채색과 유채색 매칭 페널티
                finalScore += 50;
            }

            pairs.push({
                extractedIndex: ei,
                ownedIndex: oi,
                score: finalScore,
            });
        });
    });

    // 점수 낮은 순(가장 비슷한 순) 정렬
    pairs.sort((a, b) => a.score - b.score);

    // Greedy 방식 1:1 매칭
    const matchedExtracted = new Set();
    const matchedOwned = new Set();
    const result = new Array(extractedColors.length).fill(null);

    for (const p of pairs) {
        if (
            !matchedExtracted.has(p.extractedIndex) &&
            !matchedOwned.has(p.ownedIndex)
        ) {
            matchedExtracted.add(p.extractedIndex);
            matchedOwned.add(p.ownedIndex);
            result[p.extractedIndex] = colorList[p.ownedIndex];
        }
        if (matchedExtracted.size === extractedColors.length) break;
    }

    // 미매칭 처리 (Fallback)
    for (let i = 0; i < result.length; i++) {
        if (!result[i]) {
            const fallback = colorList.find((c, idx) => !matchedOwned.has(idx));
            if (fallback) {
                matchedOwned.add(colorList.indexOf(fallback));
                result[i] = fallback;
            }
        }
    }

    return result;
}

/* ==========================================================================
   5. 색상 변환 및 계산 유틸리티
========================================================================== */
function hexToRgb(hex) {
    const v = parseInt(hex.slice(1), 16);
    return { r: (v >> 16) & 255, g: (v >> 8) & 255, b: v & 255 };
}

function rgbToHue({ r, g, b }) {
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b),
        min = Math.min(r, g, b);
    const d = max - min;
    if (d === 0) return 0;

    let h;
    switch (max) {
        case r:
            h = ((g - b) / d) % 6;
            break;
        case g:
            h = (b - r) / d + 2;
            break;
        case b:
            h = (r - g) / d + 4;
            break;
    }
    return (h * 60 + 360) % 360;
}

function hueDistance(h1, h2) {
    const d = Math.abs(h1 - h2);
    return Math.min(d, 360 - d);
}

function rgbToLab(rgb) {
    // RGB -> XYZ
    let { r, g, b } = rgb;
    r /= 255;
    g /= 255;
    b /= 255;
    r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
    g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
    b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;

    let x = r * 0.4124 + g * 0.3576 + b * 0.1805;
    let y = r * 0.2126 + g * 0.7152 + b * 0.0722;
    let z = r * 0.0193 + g * 0.1192 + b * 0.9505;

    // XYZ -> Lab
    const refX = 0.95047,
        refY = 1.0,
        refZ = 1.08883;
    x /= refX;
    y /= refY;
    z /= refZ;
    const f = (t) => (t > 0.008856 ? Math.cbrt(t) : 7.787 * t + 16 / 116);
    return {
        L: 116 * f(y) - 16,
        a: 500 * (f(x) - f(y)),
        b: 200 * (f(y) - f(z)),
    };
}

function labChroma(lab) {
    return Math.sqrt(lab.a * lab.a + lab.b * lab.b);
}

function deltaE2000(lab1, lab2) {
    const avgL = (lab1.L + lab2.L) / 2;
    const c1 = Math.sqrt(lab1.a ** 2 + lab1.b ** 2);
    const c2 = Math.sqrt(lab2.a ** 2 + lab2.b ** 2);
    const avgC = (c1 + c2) / 2;
    const G = 0.5 * (1 - Math.sqrt(avgC ** 7 / (avgC ** 7 + 25 ** 7)));
    const a1p = lab1.a * (1 + G);
    const a2p = lab2.a * (1 + G);
    const c1p = Math.sqrt(a1p ** 2 + lab1.b ** 2);
    const c2p = Math.sqrt(a2p ** 2 + lab2.b ** 2);
    const h1p = Math.atan2(lab1.b, a1p);
    const h2p = Math.atan2(lab2.b, a2p);
    const dLp = lab2.L - lab1.L;
    const dCp = c2p - c1p;
    let dhp = h2p - h1p;
    if (Math.abs(dhp) > Math.PI) dhp += dhp > 0 ? -2 * Math.PI : 2 * Math.PI;
    const dHp = 2 * Math.sqrt(c1p * c2p) * Math.sin(dhp / 2);
    const SL =
        1 + (0.015 * (avgL - 50) ** 2) / Math.sqrt(20 + (avgL - 50) ** 2);
    const SC = 1 + 0.045 * avgC;
    const SH = 1 + 0.015 * avgC;
    return Math.sqrt((dLp / SL) ** 2 + (dCp / SC) ** 2 + (dHp / SH) ** 2);
}

function getTextColor(rgb) {
    const brightness = (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    return brightness > 150 ? '#000' : '#fff';
}

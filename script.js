/* ==========================================================================
   1. 데이터 및 초기화
   - colorTable: 하드코딩된 색상 데이터
   - colorList: 이름 정렬 및 RGB 변환된 객체 배열
========================================================================== */
const colorTable = [
    ['A1', '#fff6d4'],
    ['A2', '#f6f9e5'],
    ['A3', '#fffbaa'],
    ['A4', '#ffdf58'],
    ['A5', '#fecf4d'],
    ['A6', '#ffa80c'],
    ['A7', '#ff8837'],
    ['A8', '#eac431'],
    ['A9', '#F1AA8F'],
    ['A10', '#FF8F42'],
    ['A11', '#FFE1A1'],
    ['A12', '#F4B39C'],
    ['A13', '#FFB100'],
    ['A14', '#FF6510'],
    ['A15', '#DAF05C'],
    ['A16', '#F9FBBE'],
    ['A17', '#FFD976'],
    ['A18', '#FFCA9A'],
    ['A19', '#EC7A92'],
    ['B1', '#D2E318'],
    ['B2', '#79CD41'],
    ['B3', '#82D7A1'],
    ['B4', '#65DF4F'],
    ['B5', '#5FC873'],
    ['B6', '#49D1AE'],
    ['B7', '#009696'],
    ['B8', '#08774F'],
    ['B9', '#183823'],
    ['B10', '#83CFC3'],
    ['B11', '#5A6A27'],
    ['B12', '#045F45'],
    ['B13', '#E2FFB3'],
    ['B14', '#9DD12E'],
    ['B15', '#254B3C'],
    ['B16', '#D0FCAD'],
    ['B17', '#8CA12A'],
    ['B18', '#D2D958'],
    ['B19', '#49BCA9'],
    ['B20', '#E8FDEC'],
    ['B24', '#EAFCB6'],
    ['C1', '#D5E3DE'],
    ['C2', '#BBF1F4'],
    ['C3', '#73C0DF'],
    ['C4', '#33B3E1'],
    ['C5', '#00A3CA'],
    ['C6', '#58A0D9'],
    ['C7', '#0588CC'],
    ['C8', '#005F9E'],
    ['C10', '#52B4E0'],
    ['C11', '#00A9B9'],
    ['C12', '#1C375A'],
    ['C13', '#CEE0F0'],
    ['C14', '#EBF5F4'],
    ['C15', '#00AAAD'],
    ['C16', '#004C7D'],
    ['C17', '#5BD4F6'],
    ['C19', '#0F909D'],
    ['C20', '#0084B7'],
    ['C21', '#DDECFA'],
    ['D1', '#7292E2'],
    ['D2', '#6E8CCC'],
    ['D3', '#13419A'],
    ['D4', '#1E3175'],
    ['D5', '#B850B2'],
    ['D6', '#AD92E9'],
    ['D7', '#5F2D91'],
    ['D8', '#D7CDF1'],
    ['D9', '#BDB2E6'],
    ['D10', '#A2BBE7'],
    ['D11', '#251B58'],
    ['D12', '#CF8BBE'],
    ['D13', '#B80096'],
    ['D14', '#A137A7'],
    ['D15', '#4A388A'],
    ['D16', '#DCE8F6'],
    ['D17', '#AECEF0'],
    ['D18', '#B38EDB'],
    ['D19', '#E8D2EA'],
    ['D20', '#B460C3'],
    ['D21', '#842A94'],
    ['D22', '#4B5E9E'],
    ['D23', '#D6D2E2'],
    ['E1', '#FDD6C9'],
    ['E2', '#FFD8F4'],
    ['E3', '#FFA0C3'],
    ['E4', '#F67AAB'],
    ['E5', '#DA5B95'],
    ['E6', '#FF4B78'],
    ['E7', '#9E156B'],
    ['E8', '#FFE1E6'],
    ['E9', '#F378CA'],
    ['E10', '#BE316D'],
    ['E11', '#FFE8DA'],
    ['E12', '#FFA5C6'],
    ['E13', '#B53883'],
    ['E14', '#FFDDC7'],
    ['E15', '#E5C6D0'],
    ['E16', '#F9F2EB'],
    ['E17', '#E7DCE6'],
    ['E18', '#FFD3E6'],
    ['E19', '#FFD5EC'],
    ['F1', '#FF7F67'],
    ['F2', '#FF5D46'],
    ['F3', '#E3564A'],
    ['F4', '#C7270D'],
    ['F5', '#BE0A27'],
    ['F6', '#83411E'],
    ['F7', '#730037'],
    ['F8', '#AB0022'],
    ['F9', '#DE7995'],
    ['F10', '#AB613C'],
    ['F11', '#5C2929'],
    ['F12', '#F34461'],
    ['F13', '#C64239'],
    ['F14', '#FFA5BB'],
    ['F16', '#FFD7CB'],
    ['G1', '#FFE7C8'],
    ['G2', '#FFD6C3'],
    ['G3', '#EEB694'],
    ['G4', '#D9A58C'],
    ['G5', '#F49630'],
    ['G6', '#F19937'],
    ['G7', '#AC745B'],
    ['G8', '#694A42'],
    ['G9', '#F7CC9D'],
    ['G10', '#C7832F'],
    ['G11', '#D3C391'],
    ['G12', '#E6B986'],
    ['G13', '#C67B4F'],
    ['G14', '#8D6242'],
    ['G15', '#F6F7E2'],
    ['G16', '#F2E7D7'],
    ['G17', '#786562'],
    ['G18', '#FEF5EB'],
    ['G19', '#F0AB47'],
    ['G20', '#AE6949'],
    ['H1(투명)', '#faf9fe'],
    ['H2', '#ffffff'],
    ['H3', '#9B9B9B'],
    ['H4', '#6D6D6D'],
    ['H5', '#4D4D4D'],
    ['H6', '#3A3A3A'],
    ['H7', '#000000'],
    ['H8', '#FFF0F1'],
    ['H9', '#E3E6DF'],
    ['H10', '#E2E0E7'],
    ['H11', '#BCB8B5'],
    ['H12', '#F7F3E1'],
    ['H13', '#EADDC8'],
    ['H14', '#B8C8C5'],
    ['H15', '#99ABAC'],
    ['H17', '#FAFBF5'],
    ['H19', '#FBF2E4'],
    ['M1', '#AEBBA8'],
    ['M2', '#729376'],
    ['M3', '#6A8890'],
    ['M4', '#BEB39D'],
    ['M5', '#B8B78C'],
    ['M6', '#B2AC93'],
    ['M7', '#BC9F94'],
    ['M8', '#968381'],
    ['M9', '#B39D88'],
    ['M10', '#B796A3'],
    ['M11', '#B096B9'],
    ['M12', '#685951'],
    ['M13', '#C79582'],
    ['M14', '#CA694F'],
    ['M15', '#929FA9'],
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

        // [추가됨] 나중에 색상을 찾기 위해 데이터 속성 추가
        item.dataset.name = c.name;

        const label = document.createElement('div');
        label.className = 'owned-color-label';
        label.innerText = c.name;
        label.style.color = getTextColor(c.rgb);

        item.appendChild(label);
        rowDiv.appendChild(item);
    });
}

// [수정] 화면 렌더링 함수 - 추출된 색상 매칭 결과 표시
function renderExtractedColors(colors) {
    const container = document.getElementById('extractedColors');
    container.innerHTML = '';

    // [핵심] 1:1 중복 없는 전체 매칭 실행
    const matchedResults = matchColorsGlobally(colors);

    // 1. 정렬을 위해 추출된 색상과 매칭된 결과를 하나의 객체로 묶음
    const combinedList = colors.map((color, index) => ({
        extracted: color,
        recommended: matchedResults[index],
    }));

    // 2. 추천된 색상의 이름순 정렬
    combinedList.sort((a, b) => {
        if (!a.recommended && !b.recommended) return 0;
        if (!a.recommended) return 1;
        if (!b.recommended) return -1;
        return compareColorName(a.recommended, b.recommended);
    });

    // 3. 렌더링 및 하이라이트 준비

    // [추가됨] 기존 하이라이트 초기화 (이전 결과 지우기)
    document.querySelectorAll('.owned-color-item').forEach((el) => {
        el.classList.remove('highlight');
    });

    combinedList.forEach((item) => {
        const bestMatch = item.recommended;
        const color = item.extracted;

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

            // [추가됨] 보유 색상 리스트에서 해당 색상을 찾아 하이라이트 적용
            const targetItem = document.querySelector(
                `.owned-color-item[data-name="${bestMatch.name}"]`
            );
            if (targetItem) {
                targetItem.classList.add('highlight');
            }
        } else {
            recommend.style.backgroundColor = '#ccc';
            recommend.innerText = 'X';
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

/* =====================================
   1. 하드코딩된 보유 색상 (2차원)
===================================== */
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

function compareColorName(a, b) {
    const regex = /^([A-Z]+)(\d+)/;

    const matchA = a.name.match(regex);
    const matchB = b.name.match(regex);

    if (!matchA || !matchB) {
        return a.name.localeCompare(b.name);
    }

    const alphaA = matchA[1];
    const alphaB = matchB[1];

    if (alphaA !== alphaB) {
        return alphaA.localeCompare(alphaB);
    }

    const numA = parseInt(matchA[2], 10);
    const numB = parseInt(matchB[2], 10);

    return numA - numB;
}

/* 이름 기준 정렬 + RGB 변환 */
const colorList = colorTable
    .map((item) => ({
        name: item[0],
        hex: item[1],
        rgb: hexToRgb(item[1]),
    }))
    .sort(compareColorName);

/* 이미 사용된 보유 색상 이름 기록 */
const usedColorNames = new Set();

/* 후보군 크기 (조절 가능) */
const TOP_K = 5;

/* =====================================
   2. 보유 색상 렌더링
===================================== */
window.onload = function () {
    renderOwnedColors('name');
};

/* =====================================
   3. 이미지 로드 → 모든 색상 추출
===================================== */
function loadImage(event) {
    const img = new Image();

    img.onload = function () {
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');

        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;

        const colorSet = new Set();

        for (let i = 0; i < data.length; i += 4) {
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];
            const a = data[i + 3];

            if (a === 0) continue; // 투명 픽셀 제거

            colorSet.add(`${r},${g},${b}`);
        }

        const extractedColors = Array.from(colorSet).map((c) => {
            const [r, g, b] = c.split(',').map(Number);
            return { r, g, b };
        });

        renderExtractedColors(extractedColors);
    };

    img.src = URL.createObjectURL(event.target.files[0]);
}

/* =====================================
   4. 추출된 색상 + 추천 결과 표시
===================================== */
function renderExtractedColors(colors) {
    const container = document.getElementById('extractedColors');
    container.innerHTML = '';

    usedColorNames.clear();

    colors.forEach((color) => {
        const bestMatch = findBestAvailableColor(color);

        /* 전체 비교 카드 */
        const wrapper = document.createElement('div');
        wrapper.className = 'compare-item';

        /* 추천된 보유 색상 (위) */
        const recommend = document.createElement('div');
        recommend.className = 'recommend-color';
        recommend.style.backgroundColor = bestMatch.hex;

        const recommendLabel = document.createElement('div');
        recommendLabel.className = 'recommend-label';
        recommendLabel.innerText = bestMatch.name;
        recommendLabel.style.color = getTextColor(bestMatch.rgb);

        recommend.appendChild(recommendLabel);

        /* 추출된 실제 색상 (아래) */
        const extracted = document.createElement('div');
        extracted.className = 'extracted-color';
        extracted.style.backgroundColor =
            `rgb(${color.r}, ${color.g}, ${color.b})`;

        /* 조립 */
        wrapper.appendChild(recommend);
        wrapper.appendChild(extracted);
        container.appendChild(wrapper);
    });
}

function renderOwnedColors(mode = 'name') {
    const container = document.getElementById('myColors');
    container.innerHTML = '';

    let sorted;

    if (mode === 'palette') {
        sorted = [...colorList].sort(
            (a, b) => rgbToHue(a.rgb) - rgbToHue(b.rgb)
        );
    } else {
        sorted = [...colorList].sort(compareColorName);
    }

    let currentGroup = '';
    let rowDiv = null;

    sorted.forEach((c) => {
        const alpha = c.name.match(/^([A-Z]+)/)[1];

        if (mode === 'name' && alpha !== currentGroup) {
            currentGroup = alpha;
            rowDiv = document.createElement('div');
            rowDiv.className = 'color-row';
            container.appendChild(rowDiv);
        }

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


/* =====================================
   5. 가장 가까운 보유 색상 찾기
===================================== */
function findBestAvailableColor(target) {
    /* 1. 거리 계산 후 정렬 */
    const sortedCandidates = colorList
        .map((c) => ({
            ...c,
            distance: colorDistance(target, c.rgb),
        }))
        .sort((a, b) => a.distance - b.distance);

    /* 2. 상위 K개 후보만 사용 */
    const candidates = sortedCandidates.slice(0, TOP_K);

    /* 3. 아직 사용되지 않은 색상 우선 선택 */
    for (const c of candidates) {
        if (!usedColorNames.has(c.name)) {
            usedColorNames.add(c.name);
            return c;
        }
    }

    /* 4. 모두 사용된 경우 → 가장 가까운 색상 반환 (fallback) */
    const fallback = sortedCandidates[0];
    usedColorNames.add(fallback.name);
    return fallback;
}

/* =====================================
   6. RGB 거리 계산
===================================== */
function colorDistance(c1, c2) {
    return Math.sqrt(
        Math.pow(c1.r - c2.r, 2) +
            Math.pow(c1.g - c2.g, 2) +
            Math.pow(c1.b - c2.b, 2)
    );
}

/* =====================================
   7. HEX → RGB
===================================== */
function hexToRgb(hex) {
    const v = parseInt(hex.slice(1), 16);
    return {
        r: (v >> 16) & 255,
        g: (v >> 8) & 255,
        b: v & 255
    };
}

function rgbToHue({ r, g, b }) {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const d = max - min;

    if (d === 0) return 0;

    let h;
    if (max === r) h = ((g - b) / d) % 6;
    else if (max === g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;

    return Math.round(h * 60);
}

/* =====================================
   8. 명도 기반 텍스트 색상
===================================== */
function getTextColor(rgb) {
    const brightness = (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;

    return brightness > 150 ? '#000' : '#fff';
}


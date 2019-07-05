import ColorRange from './ColorRange';
export default class ColorRanges {
    private readonly ranges;
    constructor(ranges: ColorRange[]);
    getRanges(): ColorRange[];
}

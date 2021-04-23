export const LABELS = {
	mainHeader: {
		en: 'Customize Clock',
		cs: 'Konfiguruj Hodiny'
	},
	sections: {
		general: {
			en: 'General',
			cs: 'Obecné',
			blocks: {
				bg: {
					en: 'Background',
					cs: 'Barva Pozadí'
				},
				clockHands: {
					en: 'Clock Hands',
					cs: 'Ručičky'
				},
				randomize: {
					en: 'Randomize',
					cs: 'Náhodný styl',
					modes: {
						tame: {
							en: 'Go Tame',
							cs: 'Normál'
						},
						wild: {
							en: 'Go Wild',
							cs: 'Úlet'
						},
						dope: {
							en: 'Go Dope',
							cs: 'Vystřel z bot'
						},
						reset: {
							en: 'Reset',
							cs: 'Výchozí'
						}
					}
				}
			}
		},
		cells: {
			en: 'Clock Cells',
			cs: 'Pole',
			names: {
				topLeft: {
					en: 'top-left',
					cs: 'levé horní'
				},
				top: {
					en: 'top',
					cs: 'horní',
					cs3p: 'horním',
					csAdj: 'horní'
				},
				topRight: {
					en: 'top-right',
					cs: 'pravé horní'
				},
				left: {
					en: 'left',
					cs: 'levé',
					cs3p: 'levém',
					csAdj: 'levou'
				},
				center: {
					en: 'center',
					cs: 'středové',
					csAdj: 'středovou'
				},
				right: {
					en: 'right',
					cs: 'pravé',
					cs3p: 'pravém',
					csAdj: 'pravou'
				},
				bottomLeft: {
					en: 'bottom-left',
					cs: 'levé spodní'
				},
				bottom: {
					en: 'bottom',
					cs: 'spodní',
					cs3p: 'spodním',
					csAdj: 'spodní'
				},
				bottomRight: {
					cs: 'pravé spodní',
					en: 'bottom-right'
				},
				edges: {
					en: 'edge',
					cs: 'středová'
				},
				corners: {
					en: 'corner',
					cs: 'rohová'
				},
				outer: {
					en: 'outer',
					cs: 'obvodová'
				},
				all: {
					en: 'all',
					cs: 'všechny',
					csAdj: 'všechny'
				},
				upper: {
					en: 'upper',
					cs: 'horní',
					csAdj: 'horní'
				},
				lower: {
					en: 'lower',
					cs: 'spodní',
					csAdj: 'spodní'
				}
			},
			selector: {
				keyHints: {
					shift: {
						en: [
							'Press',
							'SHIFT key',
							'to select',
							'edge/corner',
							'cells'
						],
						cs: [
							'Stiskni',
							'SHIFT',
							'pro výběr',
							'rohových/středových',
							'polí'
						]
					},
					ctrl: {
						en: ['Press', 'CTRL key', 'to select a', 'single', 'cell'],
						cs: ['Stiskni', 'CTRL', 'pro výběr', 'jednotlivých', 'polí']
					}
				},
				selection: {
					edit: {
						en: 'Editing',
						cs: 'Uprav'
					},
					prefix: {
						one: {
							en: 'a',
							cs: ''
						},
						many: {
							en: 'all',
							cs: 'všechna'
						}
					},
					suffix: {
						one: {
							en: 'cell',
							cs: 'pole'
						},
						many: {
							en: 'cells',
							cs: 'pole'
						}
					}
				}
			},
			blocks: {
				border: {
					en: 'Border',
					cs: 'Hrana'
				},
				fill: {
					en: 'Fill',
					cs: 'Výplň'
				},
				shadow: {
					en: 'Shadow',
					cs: 'Stínování'
				}
			}
		},
		pins: {
			en: 'Clock Pins',
			cs: 'Rysky',
			controller: {
				en: 'Number of pins',
				cs: 'Počet rysek'
			},
			selector: {
				edit: {
					en: 'Editing',
					cs: 'Uprav'
				},
				batchSuffix: {
					en: 'pins in batch',
					cs: 'rysky najednou'
				},
				cellMidtext: {
					one: {
						en: 'pin in the',
						cs: 'rysku v'
					},
					many: {
						en: 'pins in the',
						cs: 'rysky v'
					}
				},
				cellSuffix: {
					en: 'cell',
					cs: 'poli'
				},
				keyHints: {
					en: ['Press', 'SHIFT key', 'to select', 'all pins', 'in batch'],
					cs: ['Stiskni', 'SHIFT', 'pro výběr', 'všech rysek', 'najednou']
				}
			}
		},
		hands: {
			hr: {
				en: 'Hour Hand',
				cs: 'Hodinovka'
			},
			mn: {
				en: 'Minute Hand',
				cs: 'Minutovka'
			},
			sc: {
				en: 'Second Hand',
				cs: 'Sekundovka'
			},
			blocks: {
				leaf: {
					en: 'Leaf',
					cs: 'List'
				},
				tail: {
					en: 'Tail',
					cs: 'Ocásek'
				}
			},
			zIdxBtn: {
				pullAbove: {
					en: 'Pull Above',
					cs: 'Šup nahoru'
				},
				pushBelow: {
					en: 'Push Below',
					cs: 'Buch dolu'
				}
			}
		},
		cap: {
			en: 'Clock Cap',
			cs: 'Klobouček',
			blocks: {
				inner: {
					en: 'Inner',
					cs: 'Vnitřní'
				},
				outer: {
					en: 'Outer',
					cs: 'Vnější'
				}
			},
			zIdxRange: {
				en: 'Vertical Placement',
				cs: 'Úroveň usazení'
			},
			snap: {
				en: 'Snap to',
				cs: 'Přichycení'
			},
			rotate: {
				en: 'Rotate',
				cs: 'Otoč'
			}
		}
	},
	generic: {
		color: {
			en: 'Color',
			cs: 'Barva'
		},
		opacity: {
			en: 'Opacity',
			cs: 'Plnost'
		},
		width: {
			en: 'Width',
			cs: 'Šířka'
		},
		length: {
			en: 'Length',
			cs: 'Délka'
		},
		offset: {
			en: 'Offset',
			cs: 'Odsazení'
		},
		thickness: {
			en: 'Thickness',
			cs: 'Hloubka'
		},
		radius: {
			en: 'Radius',
			cs: 'Oblost'
		},
		innerRadius: {
			en: 'Inner Radius',
			cs: 'Vnitřní Oblost'
		},
		outerRadius: {
			en: 'Outer Radius',
			cs: 'Vnější Oblost'
		},
		pinGap: {
			en: 'Pin Gap',
			cs: 'Rozteč'
		},
		blur: {
			en: 'Blur',
			cs: 'Rozmlžení'
		},
		size: {
			en: 'Size',
			cs: 'Velikost'
		}
	}
};

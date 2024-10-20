module.exports = {
    params: {
        designator: 'DISP',
        side: 'F',
		P5V: { type: "net", value: "P5V" },
		GND: { type: "net", value: "GND" },
		P3V3: { type: "net", value: "P3V3" },
		GP29: { type: "net", value: "GP29" },
		GP28: { type: "net", value: "GP28" },
		GP27: { type: "net", value: "GP27" },
		GP26: { type: "net", value: "GP26" },
		GP15: { type: "net", value: "GP15" },
		GP14: { type: "net", value: "GP14" },
		GP13: { type: "net", value: "GP13" },
		GP12: { type: "net", value: "GP12" },
		GP11: { type: "net", value: "GP11" },
		GP10: { type: "net", value: "GP10" },
		GP9: { type: "net", value: "GP9" },
		GP8: { type: "net", value: "GP8" },
		GP7: { type: "net", value: "GP7" },
		GP6: { type: "net", value: "GP6" },
		GP5: { type: "net", value: "GP5" },
		GP4: { type: "net", value: "GP4" },
		GP3: { type: "net", value: "GP3" },
		GP2: { type: "net", value: "GP2" },
		GP1: { type: "net", value: "GP1" },
		GP0: { type: "net", value: "GP0" },
    },
    body: p => `
	(footprint "ScottoKeebs:rp2040-zero-tht_nobtm_reversible"
		(layer "F.Cu")

		${p.at /* parametric position */}

		(property "Reference" "U?"
			(at 0 -9 0)
			(layer "F.SilkS")
			(hide yes)
			(uuid "1c479411-a194-4685-8eeb-e81966c16c7f")
			(effects
				(font
					(size 0.889 0.889)
					(thickness 0.1016)
				)
			)
		)
		(property "Value" "rp2040-zero-tht-rev"
			(at -0.1 0 90)
			(layer "F.SilkS")
			(hide yes)
			(uuid "d811e9ac-fc59-4c9b-8d93-83a5a9c048b6")
			(effects
				(font
					(size 0.6096 0.6096)
					(thickness 0.0762)
				)
			)
		)
		(property "Footprint" ""
			(at -0.024 0.1 0)
			(unlocked yes)
			(layer "F.Fab")
			(hide yes)
			(uuid "d5dfc0c3-5791-4d39-94b6-b70ccbdcf17c")
			(effects
				(font
					(size 1.27 1.27)
				)
			)
		)
		(property "Datasheet" ""
			(at -0.024 0.1 0)
			(unlocked yes)
			(layer "F.Fab")
			(hide yes)
			(uuid "c0e2c7d5-b9fd-408f-9187-68e407b7a691")
			(effects
				(font
					(size 1.27 1.27)
				)
			)
		)
		(property "Description" ""
			(at -0.024 0.1 0)
			(unlocked yes)
			(layer "F.Fab")
			(hide yes)
			(uuid "02630655-feff-4d10-85ab-7769903cd3c8")
			(effects
				(font
					(size 1.27 1.27)
				)
			)
		)
		(attr through_hole exclude_from_pos_files)
		(fp_rect
			(start -9 -11.7)
			(end 9 11.8)
			(stroke
				(width 0.12)
				(type solid)
			)
			(fill none)
			(layer "Dwgs.User")
			(uuid "34a16b9b-0207-4b17-a81a-9de906d35da7")
		)
		(fp_rect
			(start -9 -11.7)
			(end 9 11.8)
			(stroke
				(width 0.12)
				(type solid)
			)
			(fill none)
			(layer "Dwgs.User")
			(uuid "f9b9f682-53c0-4e91-b302-2aeffd189488")
		)
		(pad "" thru_hole oval
			(at -7.62 -10.11)
			(size 2.5 1.5)
			(drill 1
				(offset -0.5 0)
			)
			(layers "*.Cu" "*.Mask")
			(remove_unused_layers no)
			(uuid "8cc7620d-5a46-480f-88f4-9ba3ef15d089")
		)
		(pad "" thru_hole oval
			(at -7.62 -7.57)
			(size 2.5 1.5)
			(drill 1
				(offset -0.5 0)
			)
			(layers "*.Cu" "*.Mask")
			(remove_unused_layers no)
			(uuid "3599bf07-7a97-4f3d-8129-90eb3014cf64")
		)
		(pad "" thru_hole oval
			(at -7.62 -5.03)
			(size 2.5 1.5)
			(drill 1
				(offset -0.5 0)
			)
			(layers "*.Cu" "*.Mask")
			(remove_unused_layers no)
			(uuid "2e9a3e67-1140-4c08-a2a6-695aaaef2f6a")
		)
		(pad "" thru_hole oval
			(at -7.62 -2.49)
			(size 2.5 1.5)
			(drill 1
				(offset -0.5 0)
			)
			(layers "*.Cu" "*.Mask")
			(remove_unused_layers no)
			(uuid "5fbf95c2-0ee4-4a52-81a8-463dbe9e4df1")
		)
		(pad "" thru_hole oval
			(at -7.62 0.05)
			(size 2.5 1.5)
			(drill 1
				(offset -0.5 0)
			)
			(layers "*.Cu" "*.Mask")
			(remove_unused_layers no)
			(uuid "b60aed87-ffe1-43ad-9926-df4aaed27b88")
		)
		(pad "" thru_hole oval
			(at -7.62 2.59)
			(size 2.5 1.5)
			(drill 1
				(offset -0.5 0)
			)
			(layers "*.Cu" "*.Mask")
			(remove_unused_layers no)
			(uuid "87b5bb99-8ac6-44ba-9784-6699f8e79488")
		)
		(pad "" thru_hole oval
			(at -7.62 5.13)
			(size 2.5 1.5)
			(drill 1
				(offset -0.5 0)
			)
			(layers "*.Cu" "*.Mask")
			(remove_unused_layers no)
			(uuid "2c7072f5-7437-40c7-89aa-9037863fa973")
		)
		(pad "" thru_hole oval
			(at -7.62 7.67)
			(size 2.5 1.5)
			(drill 1
				(offset -0.5 0)
			)
			(layers "*.Cu" "*.Mask")
			(remove_unused_layers no)
			(uuid "8e28ee3b-a6d0-4115-a2e6-8e73dff16ec0")
		)
		(pad "" thru_hole oval
			(at -7.62 10.21)
			(size 2.5 1.5)
			(drill 1
				(offset -0.5 0)
			)
			(layers "*.Cu" "*.Mask")
			(remove_unused_layers no)
			(uuid "eef3aa2b-39d9-4280-951d-fb494ac6807c")
		)
		(pad "" smd custom
			(at -6.4 0.05 90)
			(size 0.25 1)
			(layers "F.Cu")
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives)
			(uuid "6d3fd4b5-27de-445a-a495-d8f7f25982a5")
		)
		(pad "" smd custom
			(at -6.4 0.05 90)
			(size 0.25 1)
			(layers "B.Cu")
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives)
			(uuid "5489f971-3d00-4dbf-a56d-acdcecc0c77c")
		)
		(pad "" smd custom
			(at -6.4 2.55 90)
			(size 0.25 1)
			(layers "F.Cu")
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives)
			(uuid "b5c00845-9d0d-4064-8b11-5c58db790f03")
		)
		(pad "" smd custom
			(at -6.4 2.55 90)
			(size 0.25 1)
			(layers "B.Cu")
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives)
			(uuid "5fbd5e75-7be1-4e39-b3fe-a4c6a507c066")
		)
		(pad "" smd custom
			(at -6.4 5.15 90)
			(size 0.25 1)
			(layers "F.Cu")
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives)
			(uuid "73edf23f-fbcb-4d72-a514-202983a8e870")
		)
		(pad "" smd custom
			(at -6.4 5.15 90)
			(size 0.25 1)
			(layers "B.Cu")
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives)
			(uuid "d6e492b0-c033-4acd-b7ba-0fd8f7b436b5")
		)
		(pad "" smd custom
			(at -6.4 7.65 90)
			(size 0.25 1)
			(layers "F.Cu")
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives)
			(uuid "6df475bd-764b-4f7c-937f-760729d6e8b5")
		)
		(pad "" smd custom
			(at -6.4 7.65 90)
			(size 0.25 1)
			(layers "B.Cu")
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives)
			(uuid "6d093af4-1677-49e4-912a-8548e48c3bb5")
		)
		(pad "" smd custom
			(at -6.4 10.25 90)
			(size 0.25 1)
			(layers "F.Cu")
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives)
			(uuid "6d31422b-380a-464f-961b-fe149dc35dd1")
		)
		(pad "" smd custom
			(at -6.4 10.25 90)
			(size 0.25 1)
			(layers "B.Cu")
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives)
			(uuid "faf82a03-122d-4339-b3ae-74aa3b2abb3a")
		)
		(pad "" smd custom
			(at -6.388 -10.15 90)
			(size 0.25 1)
			(layers "F.Cu")
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives)
			(uuid "e054280e-205e-4a80-aeab-858938ac5189")
		)
		(pad "" smd custom
			(at -6.388 -10.15 90)
			(size 0.25 1)
			(layers "B.Cu")
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives)
			(uuid "b5affd0a-0a31-4fcc-9858-be3e45477960")
		)
		(pad "" smd custom
			(at -6.388 -7.55 90)
			(size 0.25 1)
			(layers "F.Cu")
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives)
			(uuid "e56e8ca2-6909-40f7-aa27-f0953501ea9f")
		)
		(pad "" smd custom
			(at -6.388 -7.55 90)
			(size 0.25 1)
			(layers "B.Cu")
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives)
			(uuid "4736a07d-5df9-4804-a83e-2a9bd559a2be")
		)
		(pad "" smd custom
			(at -6.388 -5.05 90)
			(size 0.25 1)
			(layers "F.Cu")
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives)
			(uuid "28ddf715-7e61-4e5c-a784-c8462bfc16e4")
		)
		(pad "" smd custom
			(at -6.388 -5.05 90)
			(size 0.25 1)
			(layers "B.Cu")
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives)
			(uuid "9b4f279e-a72f-4ab6-81df-da2186261739")
		)
		(pad "" smd custom
			(at -6.388 -2.45 90)
			(size 0.25 1)
			(layers "F.Cu")
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives)
			(uuid "1adc8d93-d505-44cf-bc7f-e9901960930d")
		)
		(pad "" smd custom
			(at -6.388 -2.45 90)
			(size 0.25 1)
			(layers "B.Cu")
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives)
			(uuid "2f4f1119-eb60-46ec-a938-4ab82c03db91")
		)
		(pad "" smd custom
			(at -5.892 0.05 90)
			(size 0.1 0.1)
			(layers "F.Cu" "F.Mask")
			(clearance 0.1)
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives
				(gr_poly
					(pts
						(xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
					)
					(width 0)
					(fill yes)
				)
			)
			(uuid "86c89292-7a3c-4d95-9cca-0b333e86c0f6")
		)
		(pad "" smd custom
			(at -5.892 0.05 90)
			(size 0.1 0.1)
			(layers "B.Cu" "B.Mask")
			(clearance 0.1)
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives
				(gr_poly
					(pts
						(xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
					)
					(width 0)
					(fill yes)
				)
			)
			(uuid "1df01db1-038d-4889-9c18-d25533480d56")
		)
		(pad "" smd custom
			(at -5.892 2.55 90)
			(size 0.1 0.1)
			(layers "F.Cu" "F.Mask")
			(clearance 0.1)
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives
				(gr_poly
					(pts
						(xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
					)
					(width 0)
					(fill yes)
				)
			)
			(uuid "f09e67d7-4d3c-4486-9776-568335a441d0")
		)
		(pad "" smd custom
			(at -5.892 2.55 90)
			(size 0.1 0.1)
			(layers "B.Cu" "B.Mask")
			(clearance 0.1)
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives
				(gr_poly
					(pts
						(xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
					)
					(width 0)
					(fill yes)
				)
			)
			(uuid "01ad1112-e98e-4774-a2a8-10a69ca86ef8")
		)
		(pad "" smd custom
			(at -5.892 5.15 90)
			(size 0.1 0.1)
			(layers "F.Cu" "F.Mask")
			(clearance 0.1)
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives
				(gr_poly
					(pts
						(xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
					)
					(width 0)
					(fill yes)
				)
			)
			(uuid "509006c0-7f69-4c5e-9ef7-a7af9889aa5a")
		)
		(pad "" smd custom
			(at -5.892 5.15 90)
			(size 0.1 0.1)
			(layers "B.Cu" "B.Mask")
			(clearance 0.1)
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives
				(gr_poly
					(pts
						(xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
					)
					(width 0)
					(fill yes)
				)
			)
			(uuid "4fbb15e8-9171-4297-8c00-5327a9ee1ed5")
		)
		(pad "" smd custom
			(at -5.892 7.65 90)
			(size 0.1 0.1)
			(layers "F.Cu" "F.Mask")
			(clearance 0.1)
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives
				(gr_poly
					(pts
						(xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
					)
					(width 0)
					(fill yes)
				)
			)
			(uuid "61415671-2497-46f9-8bcf-c99d065d4189")
		)
		(pad "" smd custom
			(at -5.892 7.65 90)
			(size 0.1 0.1)
			(layers "B.Cu" "B.Mask")
			(clearance 0.1)
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives
				(gr_poly
					(pts
						(xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
					)
					(width 0)
					(fill yes)
				)
			)
			(uuid "7cd40696-ccf7-44f3-a643-7d45c6d62b50")
		)
		(pad "" smd custom
			(at -5.892 10.25 90)
			(size 0.1 0.1)
			(layers "F.Cu" "F.Mask")
			(clearance 0.1)
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives
				(gr_poly
					(pts
						(xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
					)
					(width 0)
					(fill yes)
				)
			)
			(uuid "69b8215d-3891-4971-8d3e-6fe0d6b4f90e")
		)
		(pad "" smd custom
			(at -5.892 10.25 90)
			(size 0.1 0.1)
			(layers "B.Cu" "B.Mask")
			(clearance 0.1)
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives
				(gr_poly
					(pts
						(xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
					)
					(width 0)
					(fill yes)
				)
			)
			(uuid "d0e2fceb-7bcc-46f4-a0a8-e72c4927bd48")
		)
		(pad "" smd custom
			(at -5.88 -10.15 90)
			(size 0.1 0.1)
			(layers "F.Cu" "F.Mask")
			(clearance 0.1)
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives
				(gr_poly
					(pts
						(xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
					)
					(width 0)
					(fill yes)
				)
			)
			(uuid "117e4573-5c68-490b-aa3d-959542d2d26e")
		)
		(pad "" smd custom
			(at -5.88 -10.15 90)
			(size 0.1 0.1)
			(layers "B.Cu" "B.Mask")
			(clearance 0.1)
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives
				(gr_poly
					(pts
						(xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
					)
					(width 0)
					(fill yes)
				)
			)
			(uuid "2b4c7f9c-db83-460d-a2c9-b639a8e63b50")
		)
		(pad "" smd custom
			(at -5.88 -7.55 90)
			(size 0.1 0.1)
			(layers "F.Cu" "F.Mask")
			(clearance 0.1)
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives
				(gr_poly
					(pts
						(xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
					)
					(width 0)
					(fill yes)
				)
			)
			(uuid "373e72e7-7bbf-42ba-8fa5-bcb2ebc13e38")
		)
		(pad "" smd custom
			(at -5.88 -7.55 90)
			(size 0.1 0.1)
			(layers "B.Cu" "B.Mask")
			(clearance 0.1)
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives
				(gr_poly
					(pts
						(xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
					)
					(width 0)
					(fill yes)
				)
			)
			(uuid "2feb87af-1917-4e4f-8712-c23a810b5b6f")
		)
		(pad "" smd custom
			(at -5.88 -5.05 90)
			(size 0.1 0.1)
			(layers "F.Cu" "F.Mask")
			(clearance 0.1)
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives
				(gr_poly
					(pts
						(xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
					)
					(width 0)
					(fill yes)
				)
			)
			(uuid "f9db3dbc-b63d-4ba3-a72c-d6114d8fd49c")
		)
		(pad "" smd custom
			(at -5.88 -5.05 90)
			(size 0.1 0.1)
			(layers "B.Cu" "B.Mask")
			(clearance 0.1)
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives
				(gr_poly
					(pts
						(xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
					)
					(width 0)
					(fill yes)
				)
			)
			(uuid "bd6ad468-7bd7-4b09-a239-db393ac0d75a")
		)
		(pad "" smd custom
			(at -5.88 -2.45 90)
			(size 0.1 0.1)
			(layers "F.Cu" "F.Mask")
			(clearance 0.1)
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives
				(gr_poly
					(pts
						(xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
					)
					(width 0)
					(fill yes)
				)
			)
			(uuid "f08d05bd-aa13-4db6-8540-9987c9111fe0")
		)
		(pad "" smd custom
			(at -5.88 -2.45 90)
			(size 0.1 0.1)
			(layers "B.Cu" "B.Mask")
			(clearance 0.1)
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives
				(gr_poly
					(pts
						(xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
					)
					(width 0)
					(fill yes)
				)
			)
			(uuid "db97d522-2952-40ac-8d89-4d49be692c4a")
		)
		(pad "" smd custom
			(at 5.792 0.05 270)
			(size 0.1 0.1)
			(layers "F.Cu" "F.Mask")
			(clearance 0.1)
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives
				(gr_poly
					(pts
						(xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
					)
					(width 0)
					(fill yes)
				)
			)
			(uuid "5c415ad9-4840-4895-aecb-4af48066fe95")
		)
		(pad "" smd custom
			(at 5.792 0.05 270)
			(size 0.1 0.1)
			(layers "B.Cu" "B.Mask")
			(clearance 0.1)
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives
				(gr_poly
					(pts
						(xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
					)
					(width 0)
					(fill yes)
				)
			)
			(uuid "8104c3a0-8c00-46a6-8e7b-9f75be80a5de")
		)
		(pad "" smd custom
			(at 5.792 2.55 270)
			(size 0.1 0.1)
			(layers "F.Cu" "F.Mask")
			(clearance 0.1)
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives
				(gr_poly
					(pts
						(xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
					)
					(width 0)
					(fill yes)
				)
			)
			(uuid "6a3b99ea-e45c-4aad-b763-e7758c145da1")
		)
		(pad "" smd custom
			(at 5.792 2.55 270)
			(size 0.1 0.1)
			(layers "B.Cu" "B.Mask")
			(clearance 0.1)
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives
				(gr_poly
					(pts
						(xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
					)
					(width 0)
					(fill yes)
				)
			)
			(uuid "7ec11154-5074-4ede-826f-e3576a23412b")
		)
		(pad "" smd custom
			(at 5.792 5.15 270)
			(size 0.1 0.1)
			(layers "F.Cu" "F.Mask")
			(clearance 0.1)
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives
				(gr_poly
					(pts
						(xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
					)
					(width 0)
					(fill yes)
				)
			)
			(uuid "a23fd3e1-1c6d-41a3-afe0-00c9fa1e5d3d")
		)
		(pad "" smd custom
			(at 5.792 5.15 270)
			(size 0.1 0.1)
			(layers "B.Cu" "B.Mask")
			(clearance 0.1)
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives
				(gr_poly
					(pts
						(xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
					)
					(width 0)
					(fill yes)
				)
			)
			(uuid "87255a77-93d8-46b8-9fd1-15305e37f2a5")
		)
		(pad "" smd custom
			(at 5.792 7.65 270)
			(size 0.1 0.1)
			(layers "F.Cu" "F.Mask")
			(clearance 0.1)
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives
				(gr_poly
					(pts
						(xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
					)
					(width 0)
					(fill yes)
				)
			)
			(uuid "746c561b-2f75-413b-99e1-dc013f4663df")
		)
		(pad "" smd custom
			(at 5.792 7.65 270)
			(size 0.1 0.1)
			(layers "B.Cu" "B.Mask")
			(clearance 0.1)
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives
				(gr_poly
					(pts
						(xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
					)
					(width 0)
					(fill yes)
				)
			)
			(uuid "e0fa12d5-5301-405e-bb71-ca4fd8815aae")
		)
		(pad "" smd custom
			(at 5.792 10.25 270)
			(size 0.1 0.1)
			(layers "F.Cu" "F.Mask")
			(clearance 0.1)
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives
				(gr_poly
					(pts
						(xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
					)
					(width 0)
					(fill yes)
				)
			)
			(uuid "870077a9-b394-4dd5-9ec5-a8a6ea2bdbbe")
		)
		(pad "" smd custom
			(at 5.792 10.25 270)
			(size 0.1 0.1)
			(layers "B.Cu" "B.Mask")
			(clearance 0.1)
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives
				(gr_poly
					(pts
						(xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
					)
					(width 0)
					(fill yes)
				)
			)
			(uuid "d1525f90-58c8-4b53-a4f6-a97b0dd221ee")
		)
		(pad "" smd custom
			(at 5.804 -10.15 270)
			(size 0.1 0.1)
			(layers "F.Cu" "F.Mask")
			(clearance 0.1)
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives
				(gr_poly
					(pts
						(xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
					)
					(width 0)
					(fill yes)
				)
			)
			(uuid "a53b4874-4137-49ea-abe6-a617aa64e052")
		)
		(pad "" smd custom
			(at 5.804 -10.15 270)
			(size 0.1 0.1)
			(layers "B.Cu" "B.Mask")
			(clearance 0.1)
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives
				(gr_poly
					(pts
						(xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
					)
					(width 0)
					(fill yes)
				)
			)
			(uuid "88b70d41-940e-41e0-85fe-90d1bac801ec")
		)
		(pad "" smd custom
			(at 5.804 -7.55 270)
			(size 0.1 0.1)
			(layers "F.Cu" "F.Mask")
			(clearance 0.1)
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives
				(gr_poly
					(pts
						(xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
					)
					(width 0)
					(fill yes)
				)
			)
			(uuid "96330e07-a1af-4b44-a158-a1588ecf9d2e")
		)
		(pad "" smd custom
			(at 5.804 -7.55 270)
			(size 0.1 0.1)
			(layers "B.Cu" "B.Mask")
			(clearance 0.1)
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives
				(gr_poly
					(pts
						(xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
					)
					(width 0)
					(fill yes)
				)
			)
			(uuid "34c9be48-c6d8-4a6c-ba1a-2c7f025d0b57")
		)
		(pad "" smd custom
			(at 5.804 -5.05 270)
			(size 0.1 0.1)
			(layers "F.Cu" "F.Mask")
			(clearance 0.1)
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives
				(gr_poly
					(pts
						(xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
					)
					(width 0)
					(fill yes)
				)
			)
			(uuid "0da073f8-2450-48bd-b3d0-3bb6580f54d9")
		)
		(pad "" smd custom
			(at 5.804 -5.05 270)
			(size 0.1 0.1)
			(layers "B.Cu" "B.Mask")
			(clearance 0.1)
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives
				(gr_poly
					(pts
						(xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
					)
					(width 0)
					(fill yes)
				)
			)
			(uuid "2bcc4d0e-0e8a-4a3e-bd63-30e18cb181f4")
		)
		(pad "" smd custom
			(at 5.804 -2.45 270)
			(size 0.1 0.1)
			(layers "F.Cu" "F.Mask")
			(clearance 0.1)
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives
				(gr_poly
					(pts
						(xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
					)
					(width 0)
					(fill yes)
				)
			)
			(uuid "051f2475-c48e-4967-970b-2287e0cf47cf")
		)
		(pad "" smd custom
			(at 5.804 -2.45 270)
			(size 0.1 0.1)
			(layers "B.Cu" "B.Mask")
			(clearance 0.1)
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives
				(gr_poly
					(pts
						(xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
					)
					(width 0)
					(fill yes)
				)
			)
			(uuid "744b974e-d422-481c-a2c2-599f09be0692")
		)
		(pad "" smd custom
			(at 6.388 0.05 270)
			(size 0.25 1)
			(layers "F.Cu")
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives)
			(uuid "5ba35d2f-c314-4d73-a1ec-6d048cbdee99")
		)
		(pad "" smd custom
			(at 6.388 2.55 270)
			(size 0.25 1)
			(layers "F.Cu")
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives)
			(uuid "86c3f43f-ba6c-4000-9871-b10c10238542")
		)
		(pad "" smd custom
			(at 6.388 5.15 270)
			(size 0.25 1)
			(layers "F.Cu")
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives)
			(uuid "df2416bd-95e5-4e84-941b-15b0506148b9")
		)
		(pad "" smd custom
			(at 6.388 7.65 270)
			(size 0.25 1)
			(layers "F.Cu")
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives)
			(uuid "b2567a76-364a-4c39-8e02-a56b51abc0f3")
		)
		(pad "" smd custom
			(at 6.388 10.25 270)
			(size 0.25 1)
			(layers "F.Cu")
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives)
			(uuid "729f214a-d450-46a8-a18e-07beae6f8305")
		)
		(pad "" smd custom
			(at 6.4 -10.15 270)
			(size 0.25 1)
			(layers "F.Cu")
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives)
			(uuid "06f91510-0f9f-4243-b4cf-f841b52aaf75")
		)
		(pad "" smd custom
			(at 6.4 -10.15 270)
			(size 0.25 1)
			(layers "B.Cu")
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives)
			(uuid "892afb64-000b-45d2-9840-fa0c163c7a58")
		)
		(pad "" smd custom
			(at 6.4 -7.55 270)
			(size 0.25 1)
			(layers "F.Cu")
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives)
			(uuid "bb03892a-3cf5-4238-860b-bfc51c74f8d4")
		)
		(pad "" smd custom
			(at 6.4 -7.55 270)
			(size 0.25 1)
			(layers "B.Cu")
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives)
			(uuid "d32a65f1-d587-4e45-b93b-7b37cc33c966")
		)
		(pad "" smd custom
			(at 6.4 -5.05 270)
			(size 0.25 1)
			(layers "F.Cu")
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives)
			(uuid "000da6ce-01d8-4c05-ad0d-354bd290c701")
		)
		(pad "" smd custom
			(at 6.4 -5.05 270)
			(size 0.25 1)
			(layers "B.Cu")
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives)
			(uuid "a0a29fdc-f26a-44fd-bbaf-e2cb07ff6c4d")
		)
		(pad "" smd custom
			(at 6.4 -2.45 270)
			(size 0.25 1)
			(layers "F.Cu")
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives)
			(uuid "a6bb1893-73b0-4696-bb5d-8e054852f560")
		)
		(pad "" smd custom
			(at 6.4 -2.45 270)
			(size 0.25 1)
			(layers "B.Cu")
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives)
			(uuid "0b3a64d5-3a51-4889-8c17-f440c9399829")
		)
		(pad "" smd custom
			(at 6.4 0.05 270)
			(size 0.25 1)
			(layers "B.Cu")
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives)
			(uuid "66cf3cf4-2081-4333-80f4-bbf99e38689a")
		)
		(pad "" smd custom
			(at 6.4 2.55 270)
			(size 0.25 1)
			(layers "B.Cu")
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives)
			(uuid "6d9f23db-6fd8-427c-bfa7-4371b2a44454")
		)
		(pad "" smd custom
			(at 6.4 5.15 270)
			(size 0.25 1)
			(layers "B.Cu")
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives)
			(uuid "cfdf67a4-4fe4-4c88-8e8d-e95c0d2a6054")
		)
		(pad "" smd custom
			(at 6.4 7.65 270)
			(size 0.25 1)
			(layers "B.Cu")
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives)
			(uuid "d1ba90aa-edbe-4da6-a02b-fda32141d694")
		)
		(pad "" smd custom
			(at 6.4 10.25 270)
			(size 0.25 1)
			(layers "B.Cu")
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives)
			(uuid "7a39f8de-5795-4aa6-b9e5-ce9d7314fa6a")
		)
		(pad "" thru_hole oval
			(at 7.62 -10.11 180)
			(size 2.5 1.5)
			(drill 1
				(offset -0.5 0)
			)
			(layers "*.Cu" "*.Mask")
			(remove_unused_layers no)
			(uuid "1eb7e149-855c-4b80-9c67-a40b57eb3a08")
		)
		(pad "" thru_hole oval
			(at 7.62 -7.57 180)
			(size 2.5 1.5)
			(drill 1
				(offset -0.5 0)
			)
			(layers "*.Cu" "*.Mask")
			(remove_unused_layers no)
			(uuid "8fcd2656-9a40-4774-a0f4-af6ab108c815")
		)
		(pad "" thru_hole oval
			(at 7.62 -5.03 180)
			(size 2.5 1.5)
			(drill 1
				(offset -0.5 0)
			)
			(layers "*.Cu" "*.Mask")
			(remove_unused_layers no)
			(uuid "29a5d2f4-830f-4789-9575-6751f1e0014c")
		)
		(pad "" thru_hole oval
			(at 7.62 -2.49 180)
			(size 2.5 1.5)
			(drill 1
				(offset -0.5 0)
			)
			(layers "*.Cu" "*.Mask")
			(remove_unused_layers no)
			(uuid "5f787b33-032d-4a78-8bd4-321a6f9028fa")
		)
		(pad "" thru_hole oval
			(at 7.62 0.05 180)
			(size 2.5 1.5)
			(drill 1
				(offset -0.5 0)
			)
			(layers "*.Cu" "*.Mask")
			(remove_unused_layers no)
			(uuid "ddbe682f-6880-4cca-90bc-7ee397355ce7")
		)
		(pad "" thru_hole oval
			(at 7.62 2.59 180)
			(size 2.5 1.5)
			(drill 1
				(offset -0.5 0)
			)
			(layers "*.Cu" "*.Mask")
			(remove_unused_layers no)
			(uuid "300b8dae-ff1c-4d1c-8475-cf51c9591d30")
		)
		(pad "" thru_hole oval
			(at 7.62 5.13 180)
			(size 2.5 1.5)
			(drill 1
				(offset -0.5 0)
			)
			(layers "*.Cu" "*.Mask")
			(remove_unused_layers no)
			(uuid "0044b2d6-cd21-405b-a5c1-09950eca346e")
		)
		(pad "" thru_hole oval
			(at 7.62 7.67 180)
			(size 2.5 1.5)
			(drill 1
				(offset -0.5 0)
			)
			(layers "*.Cu" "*.Mask")
			(remove_unused_layers no)
			(uuid "08401d16-4bd9-434e-b56c-3d1823e3cea7")
		)
		(pad "" thru_hole oval
			(at 7.62 10.21 180)
			(size 2.5 1.5)
			(drill 1
				(offset -0.5 0)
			)
			(layers "*.Cu" "*.Mask")
			(remove_unused_layers no)
			(uuid "551f88a3-e8a3-4498-a8d7-1bb75cb90a87")
		)
		(pad "1" smd custom
			(at -4.864 -10.15 90)
			(size 1.2 0.5)
			(layers "F.Cu" "F.Mask")
			(clearance 0.1)
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives
				(gr_poly
					(pts
						(xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
					)
					(width 0)
					(fill yes)
				)
			)
			(uuid "9227413e-ba76-4b52-a261-aa435d9c79e4")
		)
		(pad "1" smd custom
			(at -0.8 -10.15 90)
			(size 0.25 0.25)
			(layers "F.Cu")
			(zone_connect 0)
			(thermal_bridge_angle 90)
			(options
				(clearance outline)
				(anchor circle)
			)
			(primitives
				(gr_line
					(start 0 0)
					(end 0.766 -0.766)
					(width 0.25)
				)
				(gr_line
					(start 0.766 -0.766)
					(end 0.766 -3.298)
					(width 0.25)
				)
				(gr_line
					(start 0.766 -3.298)
					(end 0 -4.064)
					(width 0.25)
				)
			)
			(uuid "c87e2302-92e1-4cb8-9b41-216319c3f228")
		)
		(pad "1" smd custom
			(at -0.8 -10.15 90)
			(size 0.25 0.25)
			(layers "B.Cu")
			(zone_connect 0)
			(thermal_bridge_angle 90)
			(options
				(clearance outline)
				(anchor circle)
			)
			(primitives
				(gr_line
					(start 0 0)
					(end -0.766 0.766)
					(width 0.25)
				)
				(gr_line
					(start -0.766 0.766)
					(end -0.766 4.822)
					(width 0.25)
				)
				(gr_line
					(start -0.766 4.822)
					(end 0 5.588)
					(width 0.25)
				)
			)
			(uuid "de6267a6-597d-4f9d-816c-bbcecb77c1ea")
		)
		(pad "1" thru_hole circle
			(at -0.8 -10.15 270)
			(size 0.8 0.8)
			(drill 0.4)
			(layers "*.Cu")
			(remove_unused_layers no)
			(uuid "6af60ed3-7a6c-4398-98d5-8fbe149d165a")
		)
		(pad "1" smd custom
			(at 4.788 -10.15 270)
			(size 1.2 0.5)
			(layers "B.Cu" "B.Mask")
			(clearance 0.1)
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives
				(gr_poly
					(pts
						(xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
					)
					(width 0)
					(fill yes)
				)
			)
			(uuid "83dc845c-1ae4-4a26-a5b3-f4d29d8bceef")
		)
		(pad "2" smd custom
			(at -4.864 -7.55 90)
			(size 1.2 0.5)
			(layers "F.Cu" "F.Mask")
			(clearance 0.1)
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives
				(gr_poly
					(pts
						(xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
					)
					(width 0)
					(fill yes)
				)
			)
			(uuid "206d1609-1a96-4dcd-8634-1304dfe27edc")
		)
		(pad "2" smd custom
			(at -0.8 -7.55 90)
			(size 0.25 0.25)
			(layers "F.Cu")
			(zone_connect 0)
			(thermal_bridge_angle 90)
			(options
				(clearance outline)
				(anchor circle)
			)
			(primitives
				(gr_line
					(start 0 0)
					(end 0.766 -0.766)
					(width 0.25)
				)
				(gr_line
					(start 0.766 -0.766)
					(end 0.766 -3.298)
					(width 0.25)
				)
				(gr_line
					(start 0.766 -3.298)
					(end 0 -4.064)
					(width 0.25)
				)
			)
			(uuid "659ad280-73c0-484f-9681-11b79484962b")
		)
		(pad "2" smd custom
			(at -0.8 -7.55 90)
			(size 0.25 0.25)
			(layers "B.Cu")
			(zone_connect 0)
			(thermal_bridge_angle 90)
			(options
				(clearance outline)
				(anchor circle)
			)
			(primitives
				(gr_line
					(start 0 0)
					(end -0.766 0.766)
					(width 0.25)
				)
				(gr_line
					(start -0.766 0.766)
					(end -0.766 4.822)
					(width 0.25)
				)
				(gr_line
					(start -0.766 4.822)
					(end 0 5.588)
					(width 0.25)
				)
			)
			(uuid "327aac85-b6fe-46b3-8638-db535e4b9c8a")
		)
		(pad "2" thru_hole circle
			(at -0.8 -7.55 270)
			(size 0.8 0.8)
			(drill 0.4)
			(layers "*.Cu")
			(remove_unused_layers no)
			(uuid "43fc1a81-32b3-4b0c-9bd8-8484010b0f83")
		)
		(pad "2" smd custom
			(at 4.788 -7.55 270)
			(size 1.2 0.5)
			(layers "B.Cu" "B.Mask")
			(clearance 0.1)
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives
				(gr_poly
					(pts
						(xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
					)
					(width 0)
					(fill yes)
				)
			)
			(uuid "1129a6d6-0d4a-4131-bede-74835eda4f75")
		)
		(pad "3" smd custom
			(at -4.864 -5.05 90)
			(size 1.2 0.5)
			(layers "F.Cu" "F.Mask")
			(clearance 0.1)
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives
				(gr_poly
					(pts
						(xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
					)
					(width 0)
					(fill yes)
				)
			)
			(uuid "7a0bde50-eaac-4cfc-84b0-2f2fe292110b")
		)
		(pad "3" smd custom
			(at -0.8 -5.05 90)
			(size 0.25 0.25)
			(layers "F.Cu")
			(zone_connect 0)
			(thermal_bridge_angle 90)
			(options
				(clearance outline)
				(anchor circle)
			)
			(primitives
				(gr_line
					(start 0 0)
					(end 0.766 -0.766)
					(width 0.25)
				)
				(gr_line
					(start 0.766 -0.766)
					(end 0.766 -3.298)
					(width 0.25)
				)
				(gr_line
					(start 0.766 -3.298)
					(end 0 -4.064)
					(width 0.25)
				)
			)
			(uuid "a5532358-1cba-4130-a15e-05c41c190d8f")
		)
		(pad "3" smd custom
			(at -0.8 -5.05 90)
			(size 0.25 0.25)
			(layers "B.Cu")
			(zone_connect 0)
			(thermal_bridge_angle 90)
			(options
				(clearance outline)
				(anchor circle)
			)
			(primitives
				(gr_line
					(start 0 0)
					(end -0.766 0.766)
					(width 0.25)
				)
				(gr_line
					(start -0.766 0.766)
					(end -0.766 4.822)
					(width 0.25)
				)
				(gr_line
					(start -0.766 4.822)
					(end 0 5.588)
					(width 0.25)
				)
			)
			(uuid "0e5d85cb-45d3-4673-9f25-65b67c1892a0")
		)
		(pad "3" thru_hole circle
			(at -0.8 -5.05 270)
			(size 0.8 0.8)
			(drill 0.4)
			(layers "*.Cu")
			(remove_unused_layers no)
			(uuid "66d2298f-5418-4304-b4c4-9fe41ccdf5f2")
		)
		(pad "3" smd custom
			(at 4.788 -5.05 270)
			(size 1.2 0.5)
			(layers "B.Cu" "B.Mask")
			(clearance 0.1)
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives
				(gr_poly
					(pts
						(xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
					)
					(width 0)
					(fill yes)
				)
			)
			(uuid "1996880d-bd2f-4ae3-995f-a243da4daf1c")
		)
		(pad "4" smd custom
			(at -4.864 -2.45 90)
			(size 1.2 0.5)
			(layers "F.Cu" "F.Mask")
			(clearance 0.1)
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives
				(gr_poly
					(pts
						(xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
					)
					(width 0)
					(fill yes)
				)
			)
			(uuid "6fd6a9aa-d33c-4701-9bb1-e1a1dbdaa356")
		)
		(pad "4" smd custom
			(at -0.8 -2.45 90)
			(size 0.25 0.25)
			(layers "F.Cu")
			(zone_connect 0)
			(thermal_bridge_angle 90)
			(options
				(clearance outline)
				(anchor circle)
			)
			(primitives
				(gr_line
					(start 0 0)
					(end 0.766 -0.766)
					(width 0.25)
				)
				(gr_line
					(start 0.766 -0.766)
					(end 0.766 -3.298)
					(width 0.25)
				)
				(gr_line
					(start 0.766 -3.298)
					(end 0 -4.064)
					(width 0.25)
				)
			)
			(uuid "cd8c9be6-0685-4687-93d8-de9e5cb37103")
		)
		(pad "4" smd custom
			(at -0.8 -2.45 90)
			(size 0.25 0.25)
			(layers "B.Cu")
			(zone_connect 0)
			(thermal_bridge_angle 90)
			(options
				(clearance outline)
				(anchor circle)
			)
			(primitives
				(gr_line
					(start 0 0)
					(end -0.766 0.766)
					(width 0.25)
				)
				(gr_line
					(start -0.766 0.766)
					(end -0.766 4.822)
					(width 0.25)
				)
				(gr_line
					(start -0.766 4.822)
					(end 0 5.588)
					(width 0.25)
				)
			)
			(uuid "ec5900c9-6e8b-402e-adba-527e5460917b")
		)
		(pad "4" thru_hole circle
			(at -0.8 -2.45 270)
			(size 0.8 0.8)
			(drill 0.4)
			(layers "*.Cu")
			(remove_unused_layers no)
			(uuid "7782708c-dce6-4d98-9fd7-9a0363029efe")
		)
		(pad "4" smd custom
			(at 4.788 -2.45 270)
			(size 1.2 0.5)
			(layers "B.Cu" "B.Mask")
			(clearance 0.1)
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives
				(gr_poly
					(pts
						(xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
					)
					(width 0)
					(fill yes)
				)
			)
			(uuid "a507b45b-97fb-496d-8a85-e2b2cc592ec6")
		)
		(pad "5" smd custom
			(at -4.876 0.05 90)
			(size 1.2 0.5)
			(layers "F.Cu" "F.Mask")
			(clearance 0.1)
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives
				(gr_poly
					(pts
						(xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
					)
					(width 0)
					(fill yes)
				)
			)
			(uuid "a3e0c245-dcfc-4472-a605-6792c6e51486")
		)
		(pad "5" smd custom
			(at -0.812 0.05 90)
			(size 0.25 0.25)
			(layers "F.Cu")
			(zone_connect 0)
			(thermal_bridge_angle 90)
			(options
				(clearance outline)
				(anchor circle)
			)
			(primitives
				(gr_line
					(start 0 0)
					(end 0.766 -0.766)
					(width 0.25)
				)
				(gr_line
					(start 0.766 -0.766)
					(end 0.766 -3.298)
					(width 0.25)
				)
				(gr_line
					(start 0.766 -3.298)
					(end 0 -4.064)
					(width 0.25)
				)
			)
			(uuid "710824e8-67a3-46fa-9790-3880dcf8679f")
		)
		(pad "5" smd custom
			(at -0.812 0.05 90)
			(size 0.25 0.25)
			(layers "B.Cu")
			(zone_connect 0)
			(thermal_bridge_angle 90)
			(options
				(clearance outline)
				(anchor circle)
			)
			(primitives
				(gr_line
					(start 0 0)
					(end -0.766 0.766)
					(width 0.25)
				)
				(gr_line
					(start -0.766 0.766)
					(end -0.766 4.822)
					(width 0.25)
				)
				(gr_line
					(start -0.766 4.822)
					(end 0 5.588)
					(width 0.25)
				)
			)
			(uuid "d754a62c-bfc6-413b-b019-9c96b0d002dd")
		)
		(pad "5" thru_hole circle
			(at -0.812 0.05 270)
			(size 0.8 0.8)
			(drill 0.4)
			(layers "*.Cu")
			(remove_unused_layers no)
			(uuid "b7d080fa-0215-4953-9d90-0724ba40e04c")
		)
		(pad "5" smd custom
			(at 4.776 0.05 270)
			(size 1.2 0.5)
			(layers "B.Cu" "B.Mask")
			(clearance 0.1)
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives
				(gr_poly
					(pts
						(xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
					)
					(width 0)
					(fill yes)
				)
			)
			(uuid "7423f6b8-99c1-4d34-9e28-6f4206e83345")
		)
		(pad "6" smd custom
			(at -4.876 2.55 90)
			(size 1.2 0.5)
			(layers "F.Cu" "F.Mask")
			(clearance 0.1)
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives
				(gr_poly
					(pts
						(xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
					)
					(width 0)
					(fill yes)
				)
			)
			(uuid "433cedd4-0f86-402d-9f29-9f981143a209")
		)
		(pad "6" smd custom
			(at -0.812 2.55 90)
			(size 0.25 0.25)
			(layers "F.Cu")
			(zone_connect 0)
			(thermal_bridge_angle 90)
			(options
				(clearance outline)
				(anchor circle)
			)
			(primitives
				(gr_line
					(start 0 0)
					(end 0.766 -0.766)
					(width 0.25)
				)
				(gr_line
					(start 0.766 -0.766)
					(end 0.766 -3.298)
					(width 0.25)
				)
				(gr_line
					(start 0.766 -3.298)
					(end 0 -4.064)
					(width 0.25)
				)
			)
			(uuid "c2048c62-8c9f-4df4-9786-ebec4389fd38")
		)
		(pad "6" smd custom
			(at -0.812 2.55 90)
			(size 0.25 0.25)
			(layers "B.Cu")
			(zone_connect 0)
			(thermal_bridge_angle 90)
			(options
				(clearance outline)
				(anchor circle)
			)
			(primitives
				(gr_line
					(start 0 0)
					(end -0.766 0.766)
					(width 0.25)
				)
				(gr_line
					(start -0.766 0.766)
					(end -0.766 4.822)
					(width 0.25)
				)
				(gr_line
					(start -0.766 4.822)
					(end 0 5.588)
					(width 0.25)
				)
			)
			(uuid "7931b6f2-61e1-4389-9611-ada72e19ca0e")
		)
		(pad "6" thru_hole circle
			(at -0.812 2.55 270)
			(size 0.8 0.8)
			(drill 0.4)
			(layers "*.Cu")
			(remove_unused_layers no)
			(uuid "79d3d15c-c941-44a1-9aec-daa9e3951783")
		)
		(pad "6" smd custom
			(at 4.776 2.55 270)
			(size 1.2 0.5)
			(layers "B.Cu" "B.Mask")
			(clearance 0.1)
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives
				(gr_poly
					(pts
						(xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
					)
					(width 0)
					(fill yes)
				)
			)
			(uuid "67bb072a-85ba-4f27-8eb4-3488873dfece")
		)
		(pad "7" smd custom
			(at -4.876 5.15 90)
			(size 1.2 0.5)
			(layers "F.Cu" "F.Mask")
			(clearance 0.1)
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives
				(gr_poly
					(pts
						(xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
					)
					(width 0)
					(fill yes)
				)
			)
			(uuid "c935ef22-b475-44b4-8fc1-9a2e60e052d6")
		)
		(pad "7" smd custom
			(at -0.812 5.15 90)
			(size 0.25 0.25)
			(layers "F.Cu")
			(zone_connect 0)
			(thermal_bridge_angle 90)
			(options
				(clearance outline)
				(anchor circle)
			)
			(primitives
				(gr_line
					(start 0 0)
					(end 0.766 -0.766)
					(width 0.25)
				)
				(gr_line
					(start 0.766 -0.766)
					(end 0.766 -3.298)
					(width 0.25)
				)
				(gr_line
					(start 0.766 -3.298)
					(end 0 -4.064)
					(width 0.25)
				)
			)
			(uuid "54c3f0a5-cc11-4779-9cb1-8d2a7a7fd7eb")
		)
		(pad "7" smd custom
			(at -0.812 5.15 90)
			(size 0.25 0.25)
			(layers "B.Cu")
			(zone_connect 0)
			(thermal_bridge_angle 90)
			(options
				(clearance outline)
				(anchor circle)
			)
			(primitives
				(gr_line
					(start 0 0)
					(end -0.766 0.766)
					(width 0.25)
				)
				(gr_line
					(start -0.766 0.766)
					(end -0.766 4.822)
					(width 0.25)
				)
				(gr_line
					(start -0.766 4.822)
					(end 0 5.588)
					(width 0.25)
				)
			)
			(uuid "a4a2acba-7304-43b8-9476-141aa3e1fd4f")
		)
		(pad "7" thru_hole circle
			(at -0.812 5.15 270)
			(size 0.8 0.8)
			(drill 0.4)
			(layers "*.Cu")
			(remove_unused_layers no)
			(uuid "e5dbd574-b188-4d51-bcd6-ab4c89cb3d17")
		)
		(pad "7" smd custom
			(at 4.776 5.15 270)
			(size 1.2 0.5)
			(layers "B.Cu" "B.Mask")
			(clearance 0.1)
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives
				(gr_poly
					(pts
						(xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
					)
					(width 0)
					(fill yes)
				)
			)
			(uuid "af843670-d15d-4c23-bafe-cd1a7a2c5535")
		)
		(pad "8" smd custom
			(at -4.876 7.65 90)
			(size 1.2 0.5)
			(layers "F.Cu" "F.Mask")
			(clearance 0.1)
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives
				(gr_poly
					(pts
						(xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
					)
					(width 0)
					(fill yes)
				)
			)
			(uuid "f8ad8f63-9af2-4d82-8741-7303c7e8597a")
		)
		(pad "8" smd custom
			(at -0.812 7.65 90)
			(size 0.25 0.25)
			(layers "F.Cu")
			(zone_connect 0)
			(thermal_bridge_angle 90)
			(options
				(clearance outline)
				(anchor circle)
			)
			(primitives
				(gr_line
					(start 0 0)
					(end 0.766 -0.766)
					(width 0.25)
				)
				(gr_line
					(start 0.766 -0.766)
					(end 0.766 -3.298)
					(width 0.25)
				)
				(gr_line
					(start 0.766 -3.298)
					(end 0 -4.064)
					(width 0.25)
				)
			)
			(uuid "5be05b4b-eed1-4272-b663-f8ac1d2a513e")
		)
		(pad "8" smd custom
			(at -0.812 7.65 90)
			(size 0.25 0.25)
			(layers "B.Cu")
			(zone_connect 0)
			(thermal_bridge_angle 90)
			(options
				(clearance outline)
				(anchor circle)
			)
			(primitives
				(gr_line
					(start 0 0)
					(end -0.766 0.766)
					(width 0.25)
				)
				(gr_line
					(start -0.766 0.766)
					(end -0.766 4.822)
					(width 0.25)
				)
				(gr_line
					(start -0.766 4.822)
					(end 0 5.588)
					(width 0.25)
				)
			)
			(uuid "4f751e6e-7a3d-4124-845f-eb51d100fd1a")
		)
		(pad "8" thru_hole circle
			(at -0.812 7.65 315)
			(size 0.8 0.8)
			(drill 0.4)
			(layers "*.Cu")
			(remove_unused_layers no)
			(uuid "d9047c25-3a1d-444b-8401-0d545b3d6b31")
		)
		(pad "8" smd custom
			(at 4.776 7.65 270)
			(size 1.2 0.5)
			(layers "B.Cu" "B.Mask")
			(clearance 0.1)
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives
				(gr_poly
					(pts
						(xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
					)
					(width 0)
					(fill yes)
				)
			)
			(uuid "9a40ef7b-fc87-4911-8c9b-3fc636f6e2ba")
		)
		(pad "9" smd custom
			(at -4.876 10.25 90)
			(size 1.2 0.5)
			(layers "F.Cu" "F.Mask")
			(clearance 0.1)
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives
				(gr_poly
					(pts
						(xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
					)
					(width 0)
					(fill yes)
				)
			)
			(uuid "3ab7d307-8f1b-407b-89d3-895bb2626a2c")
		)
		(pad "9" smd custom
			(at -0.812 10.25 90)
			(size 0.25 0.25)
			(layers "F.Cu")
			(zone_connect 0)
			(thermal_bridge_angle 90)
			(options
				(clearance outline)
				(anchor circle)
			)
			(primitives
				(gr_line
					(start 0 0)
					(end 0.766 -0.766)
					(width 0.25)
				)
				(gr_line
					(start 0.766 -0.766)
					(end 0.766 -3.298)
					(width 0.25)
				)
				(gr_line
					(start 0.766 -3.298)
					(end 0 -4.064)
					(width 0.25)
				)
			)
			(uuid "3fe0b471-32a8-4f42-862e-fc6dbc5815b2")
		)
		(pad "9" smd custom
			(at -0.812 10.25 90)
			(size 0.25 0.25)
			(layers "B.Cu")
			(zone_connect 0)
			(thermal_bridge_angle 90)
			(options
				(clearance outline)
				(anchor circle)
			)
			(primitives
				(gr_line
					(start 0 0)
					(end -0.766 0.766)
					(width 0.25)
				)
				(gr_line
					(start -0.766 0.766)
					(end -0.766 4.822)
					(width 0.25)
				)
				(gr_line
					(start -0.766 4.822)
					(end 0 5.588)
					(width 0.25)
				)
			)
			(uuid "7e56736f-545f-4c0d-89a5-83eb1fb081ba")
		)
		(pad "9" thru_hole circle
			(at -0.812 10.25 270)
			(size 0.8 0.8)
			(drill 0.4)
			(layers "*.Cu")
			(remove_unused_layers no)
			(uuid "dbe70b32-33dc-4398-8aff-1ca41255a3cf")
		)
		(pad "9" smd custom
			(at 4.776 10.25 270)
			(size 1.2 0.5)
			(layers "B.Cu" "B.Mask")
			(clearance 0.1)
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives
				(gr_poly
					(pts
						(xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
					)
					(width 0)
					(fill yes)
				)
			)
			(uuid "8c517a7d-4020-484b-b11c-102dd952dd72")
		)
		(pad "15" smd custom
			(at -4.876 10.25 90)
			(size 1.2 0.5)
			(layers "B.Cu" "B.Mask")
			(clearance 0.1)
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives
				(gr_poly
					(pts
						(xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
					)
					(width 0)
					(fill yes)
				)
			)
			(uuid "7fca50ab-badc-4a50-9cac-3fe111b9541f")
		)
		(pad "15" smd custom
			(at 0.712 10.25 270)
			(size 0.25 0.25)
			(layers "F.Cu")
			(zone_connect 0)
			(thermal_bridge_angle 90)
			(options
				(clearance outline)
				(anchor circle)
			)
			(primitives
				(gr_line
					(start 0 0)
					(end 0.762 -0.762)
					(width 0.25)
				)
				(gr_line
					(start 0.762 -0.762)
					(end 0.762 -3.302)
					(width 0.25)
				)
				(gr_line
					(start 0.762 -3.302)
					(end 0 -4.064)
					(width 0.25)
				)
			)
			(uuid "b1f40968-cbce-41cd-881a-576a54cc31d7")
		)
		(pad "15" smd custom
			(at 0.712 10.25 270)
			(size 0.25 0.25)
			(layers "B.Cu")
			(zone_connect 0)
			(thermal_bridge_angle 90)
			(options
				(clearance outline)
				(anchor circle)
			)
			(primitives
				(gr_line
					(start 0 0)
					(end -0.766 0.766)
					(width 0.25)
				)
				(gr_line
					(start -0.766 0.766)
					(end -0.766 4.822)
					(width 0.25)
				)
				(gr_line
					(start -0.766 4.822)
					(end 0 5.588)
					(width 0.25)
				)
			)
			(uuid "3fc84ea0-ae67-457b-b960-1565c19e8c80")
		)
		(pad "15" thru_hole circle
			(at 0.712 10.25 270)
			(size 0.8 0.8)
			(drill 0.4)
			(layers "*.Cu")
			(remove_unused_layers no)
			(uuid "405e9314-a5b0-420e-b70f-c17ed3fa4cdd")
		)
		(pad "15" smd custom
			(at 4.776 10.25 270)
			(size 1.2 0.5)
			(layers "F.Cu" "F.Mask")
			(clearance 0.1)
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives
				(gr_poly
					(pts
						(xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
					)
					(width 0)
					(fill yes)
				)
			)
			(uuid "1fd68e2d-ce39-4197-b249-9c8192858a30")
		)
		(pad "16" smd custom
			(at -4.876 7.65 90)
			(size 1.2 0.5)
			(layers "B.Cu" "B.Mask")
			(clearance 0.1)
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives
				(gr_poly
					(pts
						(xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
					)
					(width 0)
					(fill yes)
				)
			)
			(uuid "4983f970-a15c-4152-aec3-9f20d616366b")
		)
		(pad "16" smd custom
			(at 0.712 7.65 270)
			(size 0.25 0.25)
			(layers "F.Cu")
			(zone_connect 0)
			(thermal_bridge_angle 90)
			(options
				(clearance outline)
				(anchor circle)
			)
			(primitives
				(gr_line
					(start 0 0)
					(end 0.762 -0.762)
					(width 0.25)
				)
				(gr_line
					(start 0.762 -0.762)
					(end 0.762 -3.302)
					(width 0.25)
				)
				(gr_line
					(start 0.762 -3.302)
					(end 0 -4.064)
					(width 0.25)
				)
			)
			(uuid "94913dd4-780e-4ec4-b530-4bc54b5a2109")
		)
		(pad "16" smd custom
			(at 0.712 7.65 270)
			(size 0.25 0.25)
			(layers "B.Cu")
			(zone_connect 0)
			(thermal_bridge_angle 90)
			(options
				(clearance outline)
				(anchor circle)
			)
			(primitives
				(gr_line
					(start 0 0)
					(end -0.766 0.766)
					(width 0.25)
				)
				(gr_line
					(start -0.766 0.766)
					(end -0.766 4.822)
					(width 0.25)
				)
				(gr_line
					(start -0.766 4.822)
					(end 0 5.588)
					(width 0.25)
				)
			)
			(uuid "806e21e2-4f58-4830-a0d2-15c310a05c5d")
		)
		(pad "16" thru_hole circle
			(at 0.712 7.65 270)
			(size 0.8 0.8)
			(drill 0.4)
			(layers "*.Cu")
			(remove_unused_layers no)
			(uuid "a22e4bed-02f8-4d95-8bc3-3df0552eef21")
		)
		(pad "16" smd custom
			(at 4.776 7.65 270)
			(size 1.2 0.5)
			(layers "F.Cu" "F.Mask")
			(clearance 0.1)
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives
				(gr_poly
					(pts
						(xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
					)
					(width 0)
					(fill yes)
				)
			)
			(uuid "6e16988e-a2e8-4cb7-8364-96471e4b1157")
		)
		(pad "17" smd custom
			(at -4.876 5.15 90)
			(size 1.2 0.5)
			(layers "B.Cu" "B.Mask")
			(clearance 0.1)
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives
				(gr_poly
					(pts
						(xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
					)
					(width 0)
					(fill yes)
				)
			)
			(uuid "f8bbb04b-beaf-4a79-acf1-b6a558c42004")
		)
		(pad "17" smd custom
			(at 0.712 5.15 270)
			(size 0.25 0.25)
			(layers "F.Cu")
			(zone_connect 0)
			(thermal_bridge_angle 90)
			(options
				(clearance outline)
				(anchor circle)
			)
			(primitives
				(gr_line
					(start 0 0)
					(end 0.762 -0.762)
					(width 0.25)
				)
				(gr_line
					(start 0.762 -0.762)
					(end 0.762 -3.302)
					(width 0.25)
				)
				(gr_line
					(start 0.762 -3.302)
					(end 0 -4.064)
					(width 0.25)
				)
			)
			(uuid "f1dc73c9-06da-4b1d-bb85-feb4cb297c1a")
		)
		(pad "17" smd custom
			(at 0.712 5.15 270)
			(size 0.25 0.25)
			(layers "B.Cu")
			(zone_connect 0)
			(thermal_bridge_angle 90)
			(options
				(clearance outline)
				(anchor circle)
			)
			(primitives
				(gr_line
					(start 0 0)
					(end -0.766 0.766)
					(width 0.25)
				)
				(gr_line
					(start -0.766 0.766)
					(end -0.766 4.822)
					(width 0.25)
				)
				(gr_line
					(start -0.766 4.822)
					(end 0 5.588)
					(width 0.25)
				)
			)
			(uuid "631385b3-82be-44e4-9f34-d5bc83cc92ec")
		)
		(pad "17" thru_hole circle
			(at 0.712 5.15 270)
			(size 0.8 0.8)
			(drill 0.4)
			(layers "*.Cu")
			(remove_unused_layers no)
			(uuid "62171b17-7fe2-451b-aae0-23634c1d3af6")
		)
		(pad "17" smd custom
			(at 4.776 5.15 270)
			(size 1.2 0.5)
			(layers "F.Cu" "F.Mask")
			(clearance 0.1)
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives
				(gr_poly
					(pts
						(xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
					)
					(width 0)
					(fill yes)
				)
			)
			(uuid "ae0bea19-cd9d-467d-abc8-44b5a2dce63b")
		)
		(pad "18" smd custom
			(at -4.876 2.55 90)
			(size 1.2 0.5)
			(layers "B.Cu" "B.Mask")
			(clearance 0.1)
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives
				(gr_poly
					(pts
						(xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
					)
					(width 0)
					(fill yes)
				)
			)
			(uuid "62618242-e0b3-475e-a064-af9c58341f15")
		)
		(pad "18" smd custom
			(at 0.712 2.55 270)
			(size 0.25 0.25)
			(layers "F.Cu")
			(zone_connect 0)
			(thermal_bridge_angle 90)
			(options
				(clearance outline)
				(anchor circle)
			)
			(primitives
				(gr_line
					(start 0 0)
					(end 0.762 -0.762)
					(width 0.25)
				)
				(gr_line
					(start 0.762 -0.762)
					(end 0.762 -3.302)
					(width 0.25)
				)
				(gr_line
					(start 0.762 -3.302)
					(end 0 -4.064)
					(width 0.25)
				)
			)
			(uuid "f1f8cbf8-38e1-42f6-b71b-246e96e7a741")
		)
		(pad "18" smd custom
			(at 0.712 2.55 270)
			(size 0.25 0.25)
			(layers "B.Cu")
			(zone_connect 0)
			(thermal_bridge_angle 90)
			(options
				(clearance outline)
				(anchor circle)
			)
			(primitives
				(gr_line
					(start 0 0)
					(end -0.766 0.766)
					(width 0.25)
				)
				(gr_line
					(start -0.766 0.766)
					(end -0.766 4.822)
					(width 0.25)
				)
				(gr_line
					(start -0.766 4.822)
					(end 0 5.588)
					(width 0.25)
				)
			)
			(uuid "d4687f7e-80c2-42be-aec0-8b0e8dd7ff28")
		)
		(pad "18" thru_hole circle
			(at 0.712 2.55 270)
			(size 0.8 0.8)
			(drill 0.4)
			(layers "*.Cu")
			(remove_unused_layers no)
			(uuid "5f163a19-989a-4909-899e-49bf9ab01ffa")
		)
		(pad "18" smd custom
			(at 4.776 2.55 270)
			(size 1.2 0.5)
			(layers "F.Cu" "F.Mask")
			(clearance 0.1)
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives
				(gr_poly
					(pts
						(xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
					)
					(width 0)
					(fill yes)
				)
			)
			(uuid "f09a84ef-015b-4ecd-b4e1-06d4a56987d8")
		)
		(pad "19" smd custom
			(at -4.876 0.05 90)
			(size 1.2 0.5)
			(layers "B.Cu" "B.Mask")
			(clearance 0.1)
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives
				(gr_poly
					(pts
						(xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
					)
					(width 0)
					(fill yes)
				)
			)
			(uuid "1f64f143-2d82-4bf9-ac09-dc6ae934be35")
		)
		(pad "19" smd custom
			(at 0.712 0.05 270)
			(size 0.25 0.25)
			(layers "F.Cu")
			(zone_connect 0)
			(thermal_bridge_angle 90)
			(options
				(clearance outline)
				(anchor circle)
			)
			(primitives
				(gr_line
					(start 0 0)
					(end 0.762 -0.762)
					(width 0.25)
				)
				(gr_line
					(start 0.762 -0.762)
					(end 0.762 -3.302)
					(width 0.25)
				)
				(gr_line
					(start 0.762 -3.302)
					(end 0 -4.064)
					(width 0.25)
				)
			)
			(uuid "0e8d6d5f-b6fe-48a0-9a77-95069ef1e9af")
		)
		(pad "19" smd custom
			(at 0.712 0.05 270)
			(size 0.25 0.25)
			(layers "B.Cu")
			(zone_connect 0)
			(thermal_bridge_angle 90)
			(options
				(clearance outline)
				(anchor circle)
			)
			(primitives
				(gr_line
					(start 0 0)
					(end -0.766 0.766)
					(width 0.25)
				)
				(gr_line
					(start -0.766 0.766)
					(end -0.766 4.822)
					(width 0.25)
				)
				(gr_line
					(start -0.766 4.822)
					(end 0 5.588)
					(width 0.25)
				)
			)
			(uuid "9ed08254-dbbe-4233-8798-4df6204932aa")
		)
		(pad "19" thru_hole circle
			(at 0.712 0.05 270)
			(size 0.8 0.8)
			(drill 0.4)
			(layers "*.Cu")
			(remove_unused_layers no)
			(uuid "90a642d1-0862-41e4-bb50-62a7f293ff43")
		)
		(pad "19" smd custom
			(at 4.776 0.05 270)
			(size 1.2 0.5)
			(layers "F.Cu" "F.Mask")
			(clearance 0.1)
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives
				(gr_poly
					(pts
						(xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
					)
					(width 0)
					(fill yes)
				)
			)
			(uuid "ab29edec-e7f6-46d4-a849-2680eaa28dd4")
		)
		(pad "20" smd custom
			(at -4.864 -2.45 90)
			(size 1.2 0.5)
			(layers "B.Cu" "B.Mask")
			(clearance 0.1)
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives
				(gr_poly
					(pts
						(xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
					)
					(width 0)
					(fill yes)
				)
			)
			(uuid "92fa1e84-442f-40e4-88f8-ddad96282b16")
		)
		(pad "20" smd custom
			(at 0.724 -2.45 270)
			(size 0.25 0.25)
			(layers "F.Cu")
			(zone_connect 0)
			(thermal_bridge_angle 90)
			(options
				(clearance outline)
				(anchor circle)
			)
			(primitives
				(gr_line
					(start 0 0)
					(end 0.762 -0.762)
					(width 0.25)
				)
				(gr_line
					(start 0.762 -0.762)
					(end 0.762 -3.302)
					(width 0.25)
				)
				(gr_line
					(start 0.762 -3.302)
					(end 0 -4.064)
					(width 0.25)
				)
			)
			(uuid "60fc594e-4678-40d9-b3da-4e35d3a59942")
		)
		(pad "20" smd custom
			(at 0.724 -2.45 270)
			(size 0.25 0.25)
			(layers "B.Cu")
			(zone_connect 0)
			(thermal_bridge_angle 90)
			(options
				(clearance outline)
				(anchor circle)
			)
			(primitives
				(gr_line
					(start 0 0)
					(end -0.766 0.766)
					(width 0.25)
				)
				(gr_line
					(start -0.766 0.766)
					(end -0.766 4.822)
					(width 0.25)
				)
				(gr_line
					(start -0.766 4.822)
					(end 0 5.588)
					(width 0.25)
				)
			)
			(uuid "bc53d0b6-ce6f-4d91-8598-4763e91e4c1a")
		)
		(pad "20" thru_hole circle
			(at 0.724 -2.45 270)
			(size 0.8 0.8)
			(drill 0.4)
			(layers "*.Cu")
			(remove_unused_layers no)
			(uuid "43351fec-987d-4a97-ac54-24d23775a26d")
		)
		(pad "20" smd custom
			(at 4.788 -2.45 270)
			(size 1.2 0.5)
			(layers "F.Cu" "F.Mask")
			(clearance 0.1)
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives
				(gr_poly
					(pts
						(xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
					)
					(width 0)
					(fill yes)
				)
			)
			(uuid "a9161370-86c7-4ae9-9102-b8c15ad00eda")
		)
		(pad "21" smd custom
			(at -4.864 -5.05 90)
			(size 1.2 0.5)
			(layers "B.Cu" "B.Mask")
			(clearance 0.1)
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives
				(gr_poly
					(pts
						(xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
					)
					(width 0)
					(fill yes)
				)
			)
			(uuid "0e17f099-deeb-4190-b94f-df7ee66ae6cf")
		)
		(pad "21" smd custom
			(at 0.724 -5.05 270)
			(size 0.25 0.25)
			(layers "F.Cu")
			(zone_connect 0)
			(thermal_bridge_angle 90)
			(options
				(clearance outline)
				(anchor circle)
			)
			(primitives
				(gr_line
					(start 0 0)
					(end 0.762 -0.762)
					(width 0.25)
				)
				(gr_line
					(start 0.762 -0.762)
					(end 0.762 -3.302)
					(width 0.25)
				)
				(gr_line
					(start 0.762 -3.302)
					(end 0 -4.064)
					(width 0.25)
				)
			)
			(uuid "6cbe66d4-117c-412d-995e-e823c1162d46")
		)
		(pad "21" smd custom
			(at 0.724 -5.05 270)
			(size 0.25 0.25)
			(layers "B.Cu")
			(zone_connect 0)
			(thermal_bridge_angle 90)
			(options
				(clearance outline)
				(anchor circle)
			)
			(primitives
				(gr_line
					(start 0 0)
					(end -0.766 0.766)
					(width 0.25)
				)
				(gr_line
					(start -0.766 0.766)
					(end -0.766 4.822)
					(width 0.25)
				)
				(gr_line
					(start -0.766 4.822)
					(end 0 5.588)
					(width 0.25)
				)
			)
			(uuid "9997e24d-8705-4ed4-a86a-d5ebe01bd8c9")
		)
		(pad "21" thru_hole circle
			(at 0.724 -5.05 270)
			(size 0.8 0.8)
			(drill 0.4)
			(layers "*.Cu")
			(remove_unused_layers no)
			(uuid "ac8b6d2f-3c9e-41b1-9ee7-38b9bd165584")
		)
		(pad "21" smd custom
			(at 4.788 -5.05 270)
			(size 1.2 0.5)
			(layers "F.Cu" "F.Mask")
			(clearance 0.1)
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives
				(gr_poly
					(pts
						(xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
					)
					(width 0)
					(fill yes)
				)
			)
			(uuid "83b4bcd4-c8b6-4175-a4c9-c2ddd5775035")
		)
		(pad "22" smd custom
			(at -4.864 -7.55 90)
			(size 1.2 0.5)
			(layers "B.Cu" "B.Mask")
			(clearance 0.1)
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives
				(gr_poly
					(pts
						(xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
					)
					(width 0)
					(fill yes)
				)
			)
			(uuid "d51b21f5-3c30-44e9-856f-410091c4d912")
		)
		(pad "22" smd custom
			(at 0.724 -7.55 270)
			(size 0.25 0.25)
			(layers "F.Cu")
			(zone_connect 0)
			(thermal_bridge_angle 90)
			(options
				(clearance outline)
				(anchor circle)
			)
			(primitives
				(gr_line
					(start 0 0)
					(end 0.762 -0.762)
					(width 0.25)
				)
				(gr_line
					(start 0.762 -0.762)
					(end 0.762 -3.302)
					(width 0.25)
				)
				(gr_line
					(start 0.762 -3.302)
					(end 0 -4.064)
					(width 0.25)
				)
			)
			(uuid "83a9deec-2659-4536-9c5c-8465265450d2")
		)
		(pad "22" smd custom
			(at 0.724 -7.55 270)
			(size 0.25 0.25)
			(layers "B.Cu")
			(zone_connect 0)
			(thermal_bridge_angle 90)
			(options
				(clearance outline)
				(anchor circle)
			)
			(primitives
				(gr_line
					(start 0 0)
					(end -0.766 0.766)
					(width 0.25)
				)
				(gr_line
					(start -0.766 0.766)
					(end -0.766 4.822)
					(width 0.25)
				)
				(gr_line
					(start -0.766 4.822)
					(end 0 5.588)
					(width 0.25)
				)
			)
			(uuid "d0132db3-da11-44be-932a-cf3d0fb293c1")
		)
		(pad "22" thru_hole circle
			(at 0.724 -7.55 270)
			(size 0.8 0.8)
			(drill 0.4)
			(layers "*.Cu")
			(remove_unused_layers no)
			(uuid "89fee2cb-cf57-49e1-8f12-db892ab9b208")
		)
		(pad "22" smd custom
			(at 4.788 -7.55 270)
			(size 1.2 0.5)
			(layers "F.Cu" "F.Mask")
			(clearance 0.1)
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives
				(gr_poly
					(pts
						(xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
					)
					(width 0)
					(fill yes)
				)
			)
			(uuid "2b088230-270e-4075-9de1-1e8f960691cb")
		)
		(pad "23" smd custom
			(at -4.864 -10.15 90)
			(size 1.2 0.5)
			(layers "B.Cu" "B.Mask")
			(clearance 0.1)
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives
				(gr_poly
					(pts
						(xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
					)
					(width 0)
					(fill yes)
				)
			)
			(uuid "c8b35ffc-5ef2-4273-84a6-1d4c4a0901d5")
		)
		(pad "23" smd custom
			(at 0.724 -10.15 270)
			(size 0.25 0.25)
			(layers "F.Cu")
			(zone_connect 0)
			(thermal_bridge_angle 90)
			(options
				(clearance outline)
				(anchor circle)
			)
			(primitives
				(gr_line
					(start 0 0)
					(end 0.762 -0.762)
					(width 0.25)
				)
				(gr_line
					(start 0.762 -0.762)
					(end 0.762 -3.302)
					(width 0.25)
				)
				(gr_line
					(start 0.762 -3.302)
					(end 0 -4.064)
					(width 0.25)
				)
			)
			(uuid "2dc72d94-da24-4e51-9e18-3468267d21ca")
		)
		(pad "23" smd custom
			(at 0.724 -10.15 270)
			(size 0.25 0.25)
			(layers "B.Cu")
			(zone_connect 0)
			(thermal_bridge_angle 90)
			(options
				(clearance outline)
				(anchor circle)
			)
			(primitives
				(gr_line
					(start 0 0)
					(end -0.766 0.766)
					(width 0.25)
				)
				(gr_line
					(start -0.766 0.766)
					(end -0.766 4.822)
					(width 0.25)
				)
				(gr_line
					(start -0.766 4.822)
					(end 0 5.588)
					(width 0.25)
				)
			)
			(uuid "7da7a4e5-5382-4a22-b40c-641cf1d9c2d8")
		)
		(pad "23" thru_hole circle
			(at 0.724 -10.15 270)
			(size 0.8 0.8)
			(drill 0.4)
			(layers "*.Cu")
			(remove_unused_layers no)
			(uuid "2b36b667-2cb8-4ff6-8f3e-124d0c8107bf")
		)
		(pad "23" smd custom
			(at 4.788 -10.15 270)
			(size 1.2 0.5)
			(layers "F.Cu" "F.Mask")
			(clearance 0.1)
			(zone_connect 0)
			(options
				(clearance outline)
				(anchor rect)
			)
			(primitives
				(gr_poly
					(pts
						(xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
					)
					(width 0)
					(fill yes)
				)
			)
			(uuid "ccf1c014-e104-430f-b72d-086162330cf0")
	)

        `
}
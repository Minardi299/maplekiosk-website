import type { Strings } from "../i18n"

export const vi: Strings = {
  meta: {
    home: {
      title: "MapleKiosk · Giữ máy tính tiền. Thêm kiosk.",
      desc: "Kiosk tự đặt món cho quầy phục vụ nhanh và chuỗi nhiều chi nhánh ở Montréal và Bờ Nam. Không hợp đồng, 0% trên doanh thu.",
    },
    features: {
      title: "Ứng dụng · MapleKiosk",
      desc: "Kiosk, máy thu ngân, màn hình bếp, menu trên TV, giao hàng về một hàng chờ, khách hàng thân thiết.",
    },
    pricing: {
      title: "Bảng giá · MapleKiosk",
      desc: "Một mức giá cho mỗi ứng dụng, SaaS hoặc cài tại chỗ. Không hợp đồng, hủy bất cứ tháng nào, hoặc mua đứt.",
    },
    about: {
      title: "Về chúng tôi · MapleKiosk",
      desc: "Thành lập tại Montreal. Chúng tôi tự xây và tự lắp đặt.",
    },
    salons: {
      title: "Tiệm nail & spa · MapleKiosk",
      desc: "Trợ lý điện thoại cho tiệm nail, spa và cửa hàng làm đẹp: trả lời, tư vấn và đặt lịch trong khi tay bạn đang bận.",
    },
    groups: {
      title: "Chuỗi & nhượng quyền · MapleKiosk",
      desc: "Một hệ thống cho 3–25 chi nhánh: đổi menu một lần cho mọi cửa hàng, một màn hình doanh thu, và acquirer riêng của bạn ở từng quầy.",
    },
    restaurants: {
      title: "Nhà hàng & đồ ăn nhanh · MapleKiosk",
      desc: "Kiosk và màn hình bếp cho nhà hàng và quầy mang đi, giao hàng trong một hàng chờ.",
    },
    privacy: {
      title: "Quyền riêng tư · MapleKiosk",
      desc: "Chính sách quyền riêng tư.",
    },
    terms: {
      title: "Điều khoản · MapleKiosk",
      desc: "Điều khoản sử dụng.",
    },
    notFound: {
      title: "Không tìm thấy trang · MapleKiosk",
      desc: "Không tìm thấy trang.",
    },
  },

  nav: {
    features: "Ứng dụng",
    pricing: "Bảng giá",
    about: "Về chúng tôi",
    cta: "Xem cách hoạt động",
  },

  hero: {
    title: "Mỗi giờ cao điểm, lại có khách nhìn hàng chờ rồi bỏ đi.",
    wedgeStrong: "Giữ máy tính tiền của bạn. Thêm kiosk.",
    wedgeRest:
      " Nếu kiosk không tự trả được tiền cho chính nó, chúng tôi rút điện, và bạn không nợ gì cả.",
    ticket: {
      name: "Trà sữa khoai môn · L",
      num: "Số 042",
      rows: [
        { label: "Cỡ lớn", price: "$5.50" },
        { label: "50% đường · ít đá", price: "kèm theo" },
        { label: "Trân châu", price: "+$0.75" },
        { label: "Kem phô mai", price: "+$0.75" },
        { label: "Sữa yến mạch", price: "+$0.50" },
      ],
      totalLabel: "Tổng cộng",
      total: "$7.50",
      caption:
        "Khách tự đặt, gửi thẳng ra quầy pha đúng từng chi tiết, trong khi hàng chờ vẫn chạy.",
    },
  },

  router: {
    title: "Ba quầy hàng, ba buổi sáng khác nhau",
    sub: "Chọn quầy của bạn.",
    doors: [
      {
        label: "Quán trà & cà phê",
        hook: "“Nửa đường, ít đá, thêm trân châu”, và hàng chờ vẫn chạy.",
        body: "Kiosk nhận đơn tùy chỉnh và gửi ra quầy pha đúng từng lựa chọn.",
      },
      {
        label: "Quầy bán mang đi",
        hook: "Điện thoại reo, tablet kêu, hàng chờ dài thêm, mà bạn chỉ có hai tay.",
        body: "Kiosk, quầy và giao hàng đổ về một hàng chờ chuẩn bị duy nhất.",
      },
      {
        label: "Nhà hàng ngồi tại chỗ",
        hook: "Tiếng bíp DoorDash lại cắt ngang giờ phục vụ. Lần nữa.",
        body: "Uber Eats và DoorDash hiện thẳng lên màn hình bếp. Không còn dàn tablet.",
      },
    ],
  },

  groupsBand: {
    title: "Từ một quầy đến cả chuỗi của bạn",
    body: "Bạn có nhiều hơn một chi nhánh? Một menu đẩy đi mọi nơi, một màn hình doanh thu, và vẫn 0% trên tất cả.",
    link: "MapleKiosk cho chuỗi cửa hàng",
  },

  diagram: {
    title: "Tiền của bạn đi đâu",
    sub: "Họ ngồi trên tiền của bạn. Chúng tôi đứng bên cạnh.",
    othersTag: "HỌ: SQUARE · TOAST · CLOVER",
    usTag: "CHÚNG TÔI: MAPLEKIOSK",
    you: "Bạn",
    bank: "Ngân hàng",
    othersBox: "Nền tảng của họ: phần mềm + thiết bị + tiền của bạn, một khối duy nhất",
    othersNote:
      "Mỗi giao dịch đều đi qua họ: ~2.5% trên mỗi thẻ tín dụng, phần chênh giấu trong tỷ lệ phí. Muốn rời đi = mua thiết bị mới, mất dữ liệu.",
    acqBox: "Acquirer của bạn, mức phí bạn tự thương lượng",
    usBox: "MapleKiosk: chỉ phần mềm · 0% trên doanh thu",
    usNote:
      "Hợp đồng thanh toán là chuyện giữa bạn và acquirer của bạn. Chúng tôi không bao giờ chạm vào tiền của bạn, và không thu hoa hồng.",
  },

  teach: {
    pre: "Phần mềm tính tiền “miễn phí” không tồn tại. Giá nằm trong tỷ lệ phí: khoảng 2.5% trên mỗi đơn hàng, mãi mãi. Còn của chúng tôi in ngay đây: ",
    zero: "0%",
    post: ".",
  },

  calc: {
    title: "Phí thanh toán thật sự tốn của bạn bao nhiêu",
    sub: "Nhập số liệu của bạn. Chúng tôi so sánh: trung thực, kể cả khi kết quả không có lợi cho chúng tôi.",
    volume: "Doanh thu quẹt thẻ mỗi tháng",
    debit: "Tỷ lệ thẻ ghi nợ Interac",
    ticket: "Hóa đơn trung bình",
    resultTag: "PHÍ ƯỚC TÍNH MỖI THÁNG",
    square: "Square",
    clover: "Clover",
    acq: "Acquirer riêng của bạn",
    honestTitle: "Ý kiến thật lòng:",
    honestBody:
      " với doanh thu của bạn, mức phí cố định của Square có lẽ là lựa chọn tốt nhất, phí cố định của tài khoản acquirer sẽ ăn hết phần tiết kiệm. Gặp trực tiếp chúng tôi cũng nói vậy.",
    saveTitle: "Tiết kiệm ước tính:",
    saveBody:
      " mỗi tháng với hợp đồng riêng của bạn, vì chúng tôi không thu hoa hồng trên thanh toán của bạn.",
    locations: "Số chi nhánh",
    perLocation: "mỗi chi nhánh",
    totalAcross: "Tổng cho {n} chi nhánh",
    saveAcross: " Với {n} chi nhánh, tức là {amount} mỗi tháng.",
    chartTag: "PHÍ THEO DOANH THU MỖI THÁNG",
    chartAlt:
      "Biểu đồ phí ước tính mỗi tháng theo doanh thu quẹt thẻ: Square và Clover là đường, acquirer riêng của bạn là dải.",
    disclaimer:
      "Phí niêm yết của Square (2.5% thẻ tín dụng; 0.75% + 7¢ thẻ ghi nợ). Clover không niêm yết phí tại Canada, nên chúng tôi ước tính theo mức phí tại quầy ở Mỹ của họ (2.3% + 10¢). “Acquirer riêng của bạn” = một hợp đồng interchange-plus điển hình cho cửa hàng nhỏ (1.3–1.8% thẻ tín dụng; 8¢ mỗi giao dịch ghi nợ; đã gồm khoảng $60/tháng phí cố định). Chỉ là ước tính. Mang theo sao kê để tính con số thật.",
    cta: "Mang theo một bản sao kê và chúng tôi kiểm tra những con số này cho thật",
  },

  lineCost: {
    title: "Hàng chờ đang tốn của bạn bao nhiêu?",
    sub: "Khách nhìn hàng chờ rồi bỏ đi không hiện trong bất kỳ báo cáo nào. Hãy đặt một con số cho họ.",
    walkouts: "Số khách bỏ đi mỗi ngày",
    days: "Số ngày mở cửa mỗi tháng",
    resultTag: "DOANH THU MẤT ƯỚC TÍNH MỖI THÁNG",
    payoff:
      "Nếu kiosk giữ lại được dù chỉ một phần số đơn đó trong khi hàng chờ vẫn chạy, cuối tháng sẽ khác đi bao nhiêu?",
    honest:
      "Nếu con số này nhỏ, kiosk sẽ không tự trả được tiền cho chính nó, và chúng tôi cũng sẽ nói thẳng với bạn như vậy.",
    cta: "Mang những con số này theo và chúng tôi sẽ kiểm tra thật",
  },

  chips: {
    title: "Những điều khoản chúng tôi có thể hứa",
    items: [
      "Không hợp đồng",
      "Không cho thuê thiết bị",
      "Không ép gói thanh toán",
      "Hủy bất cứ tháng nào",
      "Mua đứt, nếu bạn muốn",
      "Được Revenu Québec chứng nhận (WEB-SRM)",
    ],
  },

  finalCta: {
    title: "Thành lập tại Montreal. Không hợp đồng. Chúng tôi tự đến lắp đặt.",
    sub: "Hai tuần dùng thử ngay tại quán. Nếu kiosk không tự trả được tiền cho chính nó, chúng tôi rút điện, và bạn không nợ gì cả.",
  },

  footer: {
    tagline:
      "Ứng dụng doanh nghiệp và dịch vụ AI thiết thực, xây dựng tại Canada cho ngành ăn uống và làm đẹp — từ một quầy hàng đến chuỗi nhiều chi nhánh.",
    product: "Sản phẩm",
    groups: "Chuỗi & nhượng quyền",
    legal: "Pháp lý",
    nails: "Tiệm nail & làm đẹp",
    restaurants: "Nhà hàng & đồ ăn nhanh",
    coffee: "Cà phê & Trà sữa",
    rights: "Đã đăng ký bản quyền.",
    madeIn: "Made in Canada 🍁",
    privacy: "Quyền riêng tư",
    terms: "Điều khoản",
  },

  coffee: {
    title: "Thực đơn của bạn không phải một nút bấm. Máy tính tiền của bạn cũng vậy.",
    intro:
      "Máy tính tiền thông thường được làm cho một giá, một chạm. Một đơn trà sữa hay cà phê là cả chồng lựa chọn: kích cỡ, đường, đá, sữa, topping, dồn dập đến trong giờ cao điểm. Kiosk sinh ra đúng cho điều đó.",
    quotes: [
      {
        q: "“50% đường, ít đá, thêm trân châu?”",
        body: "Các tùy chọn phản ánh đúng thực đơn thật của bạn: mức đường và mức đá, kích cỡ, nóng hay lạnh, đổi loại sữa và topping, tự động tính giá và gửi thẳng ra quầy pha chế.",
      },
      {
        q: "“Đơn tiếp theo!”",
        body: "Đơn bay tới màn hình quầy pha chế và bếp theo thứ tự, để đồ uống và món ăn ra đúng trình tự ngay cả khi khách xếp hàng tới tận cửa.",
      },
      {
        q: "“Mua 9, tặng ly thứ 10?”",
        body: "Thẻ đóng dấu điện tử, điểm thưởng và khuyến mãi mà khách quen thật sự dùng. Không lo mất thẻ, không phải tính toán ở quầy tính tiền.",
      },
    ],
  },

  restaurants: {
    title: "Tiếng bíp DoorDash lại cắt ngang giờ phục vụ. Lần nữa.",
    sub: "Uber Eats và DoorDash hiện thẳng lên màn hình bếp. Không còn dàn tablet.",
    bandTitle: "Giờ cao điểm hay tối vắng khách, bếp chỉ đọc một hàng chờ.",
    phoneTitle: "Cuộc gọi nào cũng có người trả lời. Không phải bạn.",
    walletTitle: "Thẻ đóng dấu giờ nằm trong điện thoại của khách.",
    vig: {
      padTag: "Đặt bàn", padTime: "18:42",
      padL1: "Tran — 4 người", padL2: "thứ bảy 19 h ✓ đã xác nhận", padL3: "xin ngồi băng ghế",
      padStamp: "Trợ lý đã nhận",
      loyTitle: "Thẻ tích điểm", loyTag: "Quán của bạn · từ 2019", loyTenth: "10",
     
      restName: "Nhà hàng MapleKiosk",
      custName: "Tran Nguyen",
    },
    kds: {
      tickets: [
        { no: "041", src: "Kiosk", l1: "Gà giòn · combo", l2: "Không hành · thêm sốt", status: "Xong" },
        { no: "042", src: "Quầy", l1: "Poutine cổ điển · L", l2: "“Đơn tiếp theo!”", status: "Đang làm" },
        { no: "043", src: "Uber Eats", l1: "2 × bát poké cá hồi", l2: "Hết cảnh tường tablet", status: "Đang chờ" },
      ],
      soldQuote: "“86”",
      soldBadge: "Hết món",
      soldItem: "Cá hồi nướng",
      soldBody: "Đánh dấu hết món một lần — mờ ngay trên kiosk và menu TV.",
    },
    quotes: [
      {
        q: "Điện thoại reo, tablet kêu, hàng chờ dài thêm, mà bạn chỉ có hai tay.",
        body: "Kiosk, quầy và giao hàng đổ về một hàng chờ chuẩn bị duy nhất.",
      },
      {
        q: "“Hết món cá hồi.”",
        body: "Đánh dấu một món hết một lần và nó lập tức chuyển xám trên kiosk và thực đơn TV của bạn.",
      },
      {
        q: "Điện thoại reo giữa giờ phục vụ: bàn cho bốn người, tối thứ Bảy.",
        body: "Trợ lý trả lời mọi cuộc gọi bằng tiếng Pháp hoặc tiếng Anh, giải đáp thắc mắc và đặt bàn, trong khi bạn vẫn phục vụ.",
      },
    ],
  },

  insights: {
    title: "Những con số bạn chưa bao giờ có thời gian xem",
    body: "MapleKiosk ghi lại mọi thứ trong khi bạn phục vụ: giờ cao điểm, món bán chạy nhất, thời gian trung bình mỗi đơn. Không phải dữ liệu cho có — mà là quyết định: xếp thêm thu ngân đúng giờ thật sự cần, và bỏ món không ai gọi.",
    tag: "SỐ LIỆU",
    hoursLabel: "Đơn theo giờ",
    topLabel: "Bán chạy nhất hôm nay",
    topItems: ["Trà sữa khoai môn · L", "Poutine cổ điển", "Gà giòn · combo"],
    avgLabel: "Thời gian trung bình mỗi đơn",
    avgValue: "3p 40s",
  },

  groups: {
    title: "Cách làm hiệu quả ở một quầy sẽ gãy khi có năm quầy.",
    sub: "Một hệ thống cho mọi chi nhánh — và bạn giữ acquirer riêng, với mức phí tự thương lượng, ở từng nơi.",
    cta: "Nói chuyện với người sáng lập",
    mailSubject: "MapleKiosk cho chuỗi của chúng tôi",
    pains: [
      {
        label: "Menu",
        hook: "Đổi menu một lần. Mọi cửa hàng làm theo.",
        body: "Một lần đổi giá hay thêm món mới đến mọi kiosk, máy thu ngân và màn hình TV trong chuỗi cùng lúc. Không phải đi từng cửa hàng, không lệch phiên bản.",
      },
      {
        label: "Báo cáo",
        hook: "Một màn hình doanh thu, không phải mỗi cửa hàng một tài khoản.",
        body: "Mọi chi nhánh báo về cùng một màn hình. Đọc cả chuỗi ở một chỗ, rồi mở từng cửa hàng khi có con số bất thường.",
      },
      {
        label: "Nhân sự giờ cao điểm",
        hook: "Thêm một thu ngân giờ cao điểm — nhân với từng chi nhánh.",
        body: "Kiosk nhận đơn suốt giờ cao điểm ở từng cửa hàng. Khoản chi nhân lên nhanh nhất trong một chuỗi chính là khoản kiosk gánh thay.",
      },
      {
        label: "Mở rộng",
        hook: "Mở chi nhánh mới trong vài ngày, không phải vài tuần.",
        body: "Menu, giá và chương trình tích điểm đã có sẵn trong hệ thống. Cửa hàng mới chỉ cần thiết bị và một buổi lắp đặt, không phải một dự án phần mềm.",
      },
    ],
    insightsTitle: "Quản lý những cửa hàng bạn không đứng ở đó",
    insightsBody:
      "Bảng số liệu đặt mọi chi nhánh cạnh nhau: giờ cao điểm, món bán chạy nhất, thời gian trung bình mỗi đơn. Xếp thêm thu ngân đúng giờ cần, và bỏ món không ai gọi — cho cửa hàng bạn chỉ ghé mỗi tuần một lần.",
    proofTitle: "Xây cho Québec. Chứng minh tại Mỹ.",
    proofPoints: [
      "Được Revenu Québec chứng nhận (WEB-SRM) — chứng chỉ [NUMÉRO]",
      "Giao diện ưu tiên tiếng Pháp, cho khách và nhân viên",
      "Thẻ ghi nợ Interac nằm sẵn trong phép tính phí, không phải thêm vào sau",
      "Chúng tôi tự lắp đặt, tại chỗ, tránh giờ bán hàng của bạn",
      "Xây tại Montreal. Đã chạy tại [N] chi nhánh trên khắp nước Mỹ — [tiệm nail, trà sữa và nhà hàng]",
    ],
    proofStats:
      "[$X]M giá trị đơn hàng đặt qua MapleKiosk. Từ [A] lên [B] chi nhánh trong [N] tháng.",
    partnerTag: "CHƯƠNG TRÌNH ĐỐI TÁC THIẾT KẾ",
    partnerTitle: "Mỗi ngành, chúng tôi chỉ nhận một đối tác thiết kế. Thỏa thuận như sau.",
    partnerPoints: [
      {
        title: "Thí điểm 90 ngày",
        body: "Chúng tôi triển khai 1–2 chi nhánh của bạn trong 90 ngày.",
      },
      {
        title: "Chốt tiêu chí trước khi bắt đầu",
        body: "Hai bên thống nhất trước tiêu chí thành công: tỷ lệ đơn qua kiosk và hóa đơn trung bình.",
      },
      {
        title: "Giá triển khai chốt từ trước",
        body: "Nếu thí điểm đạt tiêu chí, các chi nhánh còn lại triển khai theo mức giá đã chốt trước khi bắt đầu.",
      },
      {
        title: "Không đạt, chúng tôi rút",
        body: "Chúng tôi rút điện, và bạn không nợ gì cả. Điều khoản giống mọi lần lắp đặt.",
      },
    ],
    ctaTitle: "Bước tiếp theo là một cuộc trò chuyện, không phải gian hàng demo.",
    ctaSub: "Gửi email thẳng cho người sáng lập. Người viết phần mềm sẽ trả lời — và đến lắp đặt.",
  },

  features: {
    title: "Mọi thứ quầy hàng cần, ở cùng một nơi.",
    sub: "Dành cho chủ quán đã hiểu vấn đề. Đây là câu trả lời.",
    screenshot: "[ẢNH CHỤP MÀN HÌNH]",
    blocks: [
      {
        title: "Kiosk",
        body: "Tùy chỉnh đầy đủ: đường, đá, cỡ ly, loại sữa, topping. Mỗi lựa chọn được tính đúng giá và gửi ra quầy pha đúng như khách đặt. Phía khách có tiếng Anh, Pháp, Việt và Nga.",
      },
      {
        title: "Máy thu ngân",
        body: "Tính tiền nhanh, món yêu thích, tiền tip trên màn hình.",
      },
      {
        title: "Màn hình bếp (KDS)",
        body: "Đơn hàng theo thứ tự: kiosk, quầy và giao hàng trong một hàng chờ duy nhất.",
      },
      {
        title: "Giao hàng, một hàng chờ",
        body: "Uber Eats và DoorDash hiện trên cùng màn hình với quầy. Không còn dàn tablet.",
      },
      {
        title: "Menu trên TV",
        body: "Đồng bộ với menu; hết món chỉ cần một chạm.",
      },
      {
        title: "Hồ sơ khách & khách hàng thân thiết",
        body: "Tem điện tử, điểm thưởng, và khách quen quay lại.",
      },
      {
        title: "Kết nối với máy tính tiền của bạn",
        body: "Tích hợp Clover hiện nay, máy của bạn vẫn là máy của bạn. [KIỂM TRA danh sách tích hợp trước khi đăng]",
      },
      {
        title: "Tại quán hoặc trên mây",
        body: "Đám mây, hoặc cài đặt ngay tại quán. Mua đứt nếu bạn muốn.",
      },
    ],
  },

  day: {
    title: "Từ mở cửa đến giờ cao điểm rồi chốt ngày, đúng như thực tế",
    sub: "Một ngày phục vụ, và phần MapleKiosk gánh từng giờ.",
    beats: [
      {
        time: "7:00",
        name: "Mở cửa & chuẩn bị",
        tags: [
          { label: "Menu trên TV", detail: "Màn hình TV đọc cùng thực đơn với kiosk và quầy. Đổi giá hay ẩn một món một lần, mọi màn hình trong quán đều theo." },
          { label: "Trạm quầy", detail: "Món ưa thích một chạm, combo đã lưu và tùy chọn nhanh giữ hàng chờ luôn chạy. Tiền mặt, thẻ, chạm và mã QR, với tiền tip ngay trên màn hình." },
        ],
        text: "Một màn hình đặt thực đơn hôm nay ở mọi nơi. TV, kiosk, quầy. Những món hết tối qua được bật lại trước khi mở cửa.",
      },
      {
        time: "8:15",
        name: "Giờ cao điểm buổi sáng",
        tags: [
          { label: "Kiosk", detail: "Mức đường và đá, kích cỡ, nóng hay lạnh, đổi sữa, và topping như trân châu, thạch và kem phô mai. Mỗi lựa chọn được tính giá và in ra quầy pha đúng như đã đặt." },
          { label: "Màn hình bếp", detail: "Đơn đến màn hình quầy pha và bếp theo thứ tự, có nút báo xong và phiếu rõ ràng, để không đơn nào thất lạc trong giờ cao điểm." },
        ],
        text: "Hai khách đặt ở kiosk trong khi tay bạn đang bận. “50% đường, ít đá” hay “không hành, thêm sốt” đến bếp đúng như vậy, theo thứ tự đã nhận.",
      },
      {
        time: "11:30",
        name: "Đặt trước & giao hàng",
        tags: [
          { label: "Giao hàng, một hàng chờ", detail: "Đơn Uber Eats và DoorDash rơi vào cùng màn hình với khách tại quầy. Quầy pha làm một hàng chờ thay vì ba chiếc tablet." },
        ],
        text: "Uber Eats và DoorDash thôi là chiếc tablet thứ hai. Phiếu của họ rơi vào cùng hàng chờ với khách tại quầy. Không đơn nào chen hàng.",
      },
      {
        time: "14:00",
        name: "Giờ vắng",
        tags: [
          { label: "Đồng bộ hết món", detail: "Đánh dấu hết món một lần. Nó chuyển xám trên kiosk, màn hình TV và quầy cùng lúc, để không ai bán thứ bạn không làm được." },
          { label: "Tích điểm", detail: "Tem số, điểm và khuyến mãi đưa khách quen quay lại. Tất cả được ghi ngay tại quầy, không có thẻ nào để bấm lỗ hay làm mất." },
        ],
        text: "Hết sữa yến mạch. Một chạm làm mờ nó trên kiosk, TV và quầy cùng lúc. Không hoàn tiền, không phải xin lỗi ở quầy. Tem của khách quen vẫn tiếp tục cộng.",
      },
      {
        time: "20:00",
        name: "Đóng cửa & chốt ngày",
        tags: [
          { label: "Một ngày, một màn hình", detail: "Tổng của quầy, kiosk và giao hàng về chung một màn hình lúc đóng cửa. Bạn đọc cả ngày ở một chỗ thay vì ba." },
        ],
        text: "Quầy, kiosk và giao hàng chốt trên một màn hình thay vì ba.",
      },
    ],
    alsoTitle: "Cũng có sẵn",
    also: [
      "Kết nối với máy tính tiền của bạn. Clover hiện tại, và máy của bạn vẫn là của bạn",
      "Ở chỗ bạn hoặc chỗ chúng tôi: đám mây, hoặc cài tại chỗ",
    ],
    question: "Trong năm khoảnh khắc đó, cái nào đang khiến bạn tốn nhiều nhất?",
  },

  pricing: {
    title: "Một mức giá cho mỗi ứng dụng. SaaS hoặc cài đặt tại chỗ.",
    sub: "Mọi ứng dụng MapleKiosk đều có hai lựa chọn: chúng tôi lưu trữ (SaaS, tính phí hằng tháng) hoặc cài trên máy chủ của bạn (tại chỗ, mua bản quyền một lần). Chọn theo từng ứng dụng và kết hợp tuỳ ý.",
    per: "/tháng",
    apps: [
      { name: "MapleCoffee", price: "$39", tag: "" },
      { name: "MapleRES", price: "$49", tag: "" },
      { name: "MapleSPA", price: "$44", tag: "Ứng dụng chủ lực" },
    ],
    note: "Giá tính bằng USD, cho mỗi ứng dụng, chưa thuế. Dịch vụ tích hợp AI được báo giá riêng. Cần nhiều ứng dụng hoặc bản dựng riêng? Trao đổi với bộ phận bán hàng để có gói ưu đãi.",
    buyTitle: "Hoặc mua đứt",
    buyBody: "Trả một lần, lắp đặt tại chỗ, là của bạn mãi mãi.",
    buyCta: "Liên hệ",
    faqTitle: "Hỏi thẳng, trả lời thẳng",
    faq: [
      {
        q: "Nếu tôi hủy thì sao?",
        a: "Hủy bất cứ tháng nào, không phạt. Menu và dữ liệu đi theo bạn.",
      },
      {
        q: "Còn thiết bị?",
        a: "Không bao giờ cho thuê dài hạn. Mua đứt kiosk, hoặc dùng kèm gói thuê bao.",
      },
      {
        q: "Thanh toán của tôi có đi qua các bạn không?",
        a: "Không. Không bao giờ. Hợp đồng thanh toán là giữa bạn và acquirer của bạn, xem máy tính phí.",
      },
      {
        q: "Lắp đặt mất bao lâu?",
        a: "Chúng tôi nạp menu trước khi đến và lắp đặt tại chỗ, tránh giờ bán hàng của bạn.",
      },
      {
        q: "Có chạy với máy tính tiền của tôi không?",
        a: "Tích hợp Clover hiện nay; nếu không, kiosk chạy song song với máy của bạn, không thay thế nó. [KIỂM TRA danh sách tích hợp]",
      },
      {
        q: "Dùng thử hai tuần là sao?",
        a: "Hai tuần ngay tại quán. Nếu kiosk không tự trả được tiền cho chính nó, chúng tôi rút điện, và bạn không nợ gì cả.",
      },
    ],
  },

  about: {
    title: "Xây tại Montreal. Lắp đặt bởi chính người viết ra nó.",
    paras: [
      "MapleKiosk được xây tại Montreal bởi Minh: một lập trình viên tự viết phần mềm, tự nạp menu của bạn và tự đến lắp kiosk.",
      "Sản phẩm đang chạy trong các tiệm nail, quán trà sữa và nhà hàng trên khắp nước Mỹ, gồm cả chuỗi nhiều chi nhánh. Các điểm lắp đặt đầu tiên ở Québec đang đến, vì vậy demo miễn phí và dùng thử không tốn gì.",
      "Các điều khoản. Không hợp đồng, không cho thuê, không ép gói thanh toán, tồn tại vì một lý do: chúng tôi muốn bạn ở lại vì bạn chọn ở lại.",
    ],
    photo: "[ẢNH]",
  },

  salons: {
    title: "Điện thoại reo. Tay bạn đang trong lớp bột acrylic.",
    sub: "Một trợ lý trả lời mọi cuộc gọi, bằng tiếng Pháp hoặc tiếng Anh, tư vấn dịch vụ cho khách và đặt lịch. Lịch hẹn hiện thẳng vào sổ của bạn. Thợ của bạn không phải dừng tay.",
    bandTitle: "Tay bạn vẫn ở với khách. Trợ lý lo phần nghe điện thoại.",
    quotes: [
      {
        q: "“Có chỗ cho hai người chiều thứ Bảy không?”",
        body: "Trợ lý kiểm tra lịch, trả lời như người thật và đặt chỗ, lịch hẹn hiện ngay trong sổ của bạn.",
      },
      {
        q: "Không ai bắt máy, khách đặt luôn tiệm kế bên trên Google.",
        body: "Mọi cuộc gọi đều được trả lời, bằng tiếng Pháp hoặc tiếng Anh: dù bạn đang làm móng, đang chăm sóc da hay đang đông khách.",
      },
      {
        q: "“Dặm gel giá bao nhiêu?”",
        body: "Nó biết dịch vụ và bảng giá của bạn, trả lời rõ ràng, rồi mời khách đặt lịch.",
      },
    ],
    recording: "[GHI ÂM: một cuộc gọi thật 30 giây, sẽ sản xuất]",
    disclosure:
      "Trợ lý là tự động và nói rõ điều đó ở đầu mỗi cuộc gọi. Việc xử lý cuộc gọi đang được rà soát theo luật riêng tư Québec (Luật 25) trước khi ra mắt.",
  },

  notFound: {
    title: "Trang này không có trong menu.",
    text: "Quay về trang chủ, hoặc hay hơn, tự mình thử kiosk.",
    back: "Về trang chủ",
  },
}

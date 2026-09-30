import type { Strings } from "../i18n"

export const vi: Strings = {
  meta: {
    home: {
      title: "MapleKiosk · Giữ máy tính tiền. Thêm kiosk.",
      desc: "Ứng dụng dạng mô-đun cho nhà hàng và tiệm làm đẹp ở Montréal và Bờ Nam: kiosk, màn hình bếp, trợ lý đặt lịch AI, chăm sóc khách hàng và nhiều hơn nữa. Không hợp đồng, 0% trên doanh thu bán tại chỗ.",
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
    booking: {
      title: "Trợ lý đặt lịch AI · MapleKiosk",
      desc: "Trợ lý điện thoại cho nhà hàng và tiệm làm đẹp: trả lời mọi cuộc gọi bằng tiếng Pháp hoặc tiếng Anh, biết dịch vụ và bảng giá của bạn, và đặt lịch.",
    },
    demo: {
      title: "Demo trực tiếp · MapleKiosk",
      desc: "Dùng thử MapleKiosk ngay trên trình duyệt: nhận một đơn, gửi vào bếp, đánh dấu hết món, hoặc để trợ lý đặt lịch cho tiệm làm đẹp.",
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
    services: "Xem dịch vụ của chúng tôi",
    openMenu: "Mở menu",
    closeMenu: "Đóng menu",
    menu: [
      {
        to: "/restaurants",
        label: "Nhà hàng & quán cà phê",
      },
      {
        to: "/salons",
        label: "Tiệm tóc, nail & làm đẹp",
      },
      {
        to: "/booking",
        label: "Trợ lý đặt lịch AI",
      },
    ],
  },

  zeroNote: "*Áp dụng cho doanh thu bán tại chỗ.",

  planUi: {
    prev: "Mô-đun trước",
    next: "Mô-đun sau",
    demo: "Thử trong bản demo",
  },

  call: {
    label: "Thử ngay: gọi cho trợ lý",
    big: "Gọi cho trợ lý",
  },

  hero: {
    titleA: "Đầy đủ từ thiết kế.",
    titleB: "Mô-đun theo lựa chọn.",
    body: "Chọn một mô-đun hoặc tất cả. Mỗi mô-đun đặt cạnh máy tính tiền, nhân viên và thói quen sẵn có của bạn. Không phải gỡ bỏ, không phải thay thế.",
    wedge: "Giữ máy tính tiền. Chỉ thêm những gì bạn cần.",
    explore: "Xem các mô-đun",
    picker: {
      caption: "Giữ máy POS. Thêm {list}.",
      captionNone: "Giữ máy POS như cũ. Thêm mô-đun khi bạn sẵn sàng.",
      and: "và",
      lanes: [
        {
          name: "Nhà hàng & quán cà phê",
          mods: [
            { id: "kds", label: "Màn hình bếp", phrase: "màn hình bếp" },
            { id: "kiosk", label: "Kiosk tự đặt món", phrase: "kiosk tự đặt món" },
            { id: "tv", label: "Menu trên TV", phrase: "menu trên TV" },
            { id: "delivery", label: "Hàng chờ giao hàng", phrase: "một hàng chờ giao hàng" },
          ],
        },
        {
          name: "Tiệm tóc, nail & làm đẹp",
          mods: [
            { id: "ai", label: "Trợ lý đặt lịch AI", phrase: "trợ lý trả lời mọi cuộc gọi" },
            { id: "profiles", label: "Hồ sơ khách hàng", phrase: "hồ sơ khách hàng" },
            { id: "loyalty", label: "Tích điểm & khuyến mãi", phrase: "tích điểm và khuyến mãi" },
            { id: "checkout", label: "Thanh toán & tip", phrase: "thanh toán kèm tip" },
          ],
        },
      ],
    },
  },

  modules: {
    title: "Mỗi mô-đun chạy riêng được. Ghép lại, chúng thành một hệ thống.",
    both: "NHÀ HÀNG · TIỆM LÀM ĐẸP",
    restaurants: "NHÀ HÀNG",
    cards: [
      {
        title: "Trợ lý đặt lịch AI",
        body: "Trả lời mọi cuộc gọi bằng tiếng Pháp hoặc tiếng Anh và đặt lịch. Trợ lý nói rõ mình là tự động.",
        both: true,
      },
      {
        title: "Chăm sóc khách hàng",
        body: "Hồ sơ khách, tem điện tử, điểm thưởng và khuyến mãi đưa khách quen quay lại.",
        both: true,
      },
      {
        title: "Máy thu ngân",
        body: "Tính tiền nhanh, món yêu thích một chạm và tip trên màn hình. Tiền mặt, thẻ, chạm và QR.",
        both: true,
      },
      {
        title: "Số liệu",
        body: "Giờ cao điểm, món bán chạy nhất và thời gian trung bình mỗi đơn, ở cùng một nơi.",
        both: false,
      },
      {
        title: "Kiosk tự đặt món",
        body: "Khách tự đặt và tùy chỉnh. Mọi lựa chọn đến quầy đúng như đã chọn.",
        both: false,
      },
      {
        title: "Màn hình bếp (KDS)",
        body: "Phiếu từ mọi kênh trên một màn hình, theo thứ tự nhận. Làm xong thì bấm hoàn tất.",
        both: false,
      },
      {
        title: "Menu trên TV",
        body: "Đồng bộ với menu. Đánh dấu hết món một lần, mọi màn hình đều theo.",
        both: false,
      },
      {
        title: "Giao hàng, một hàng chờ",
        body: "Uber Eats và DoorDash hiện trên cùng màn hình với khách tại quầy. Không còn dàn tablet.",
        both: false,
      },
    ],
    more: "Thêm nữa: tính lương nhân viên cho tiệm làm đẹp, quản lý kho, đặt bàn, danh sách chờ và nhiều hơn nữa.",
  },

  services: {
    title: "Làm cho những ngành chúng tôi hiểu rõ",
    sub: "Bắt đầu từ ngành của bạn. Mỗi trang cho thấy những mô-đun quan trọng ở đó.",
    cards: [
      {
        hook: "Quầy, ăn tại chỗ, mang đi và giao hàng trong một hàng chờ.",
        body: "Kiosk, màn hình bếp, menu trên TV và giao hàng, từ một quầy đến cả chuỗi.",
        link: "Nhà hàng & quán cà phê",
      },
      {
        hook: "Ghế luôn kín khách, tay luôn ở với khách.",
        body: "Đặt lịch, hồ sơ khách hàng và tích điểm cho những tiệm luôn đông khách.",
        link: "Tiệm làm đẹp",
      },
      {
        hook: "Cuộc gọi nào cũng có người trả lời. Không phải bạn.",
        body: "Giọng nói tự nhiên trả lời câu hỏi, biết dịch vụ và bảng giá của bạn, và đặt lịch. Cho nhà hàng và tiệm làm đẹp.",
        link: "Trợ lý",
      },
    ],
  },

  groupsBand: {
    title: "Từ một quầy đến cả chuỗi của bạn",
    body: "Bạn có nhiều hơn một chi nhánh? Một menu đẩy đi mọi nơi, một màn hình doanh thu, và vẫn 0%* trên doanh thu.",
    link: "MapleKiosk cho chuỗi cửa hàng",
  },

  diagram: {
    sub: "Họ ngồi trên tiền của bạn. Chúng tôi đứng bên cạnh.",
    othersTag: "HỌ: SQUARE · TOAST · CLOVER",
    usTag: "CHÚNG TÔI: MAPLEKIOSK",
    you: "Bạn",
    bank: "Ngân hàng",
    othersName: "Nền tảng của họ",
    othersParts: "phần mềm + thiết bị + tiền của bạn",
    cut: "~2.5% trên mỗi giao dịch thẻ",
    othersNote:
      "Mỗi giao dịch đều đi qua họ: ~2.5% trên mỗi thẻ tín dụng, phần chênh giấu trong tỷ lệ phí. Muốn rời đi = mua thiết bị mới, mất dữ liệu.",
    acqName: "Acquirer của bạn",
    acqRate: "mức phí bạn tự thương lượng",
    usBox: "MapleKiosk: chỉ phần mềm · 0%* trên doanh thu",
    usNote:
      "Hợp đồng thanh toán là chuyện giữa bạn và acquirer của bạn. Chúng tôi không bao giờ chạm vào tiền của bạn, và không thu hoa hồng.",
  },

  teach: {
    body: "Phần mềm tính tiền “miễn phí” không tồn tại. Giá nằm trong tỷ lệ phí: khoảng 2.5% trên mỗi đơn hàng, mãi mãi. Còn của chúng tôi in ngay đây.",
    zero: "0%",
  },

  calc: {
    title: "Phí thanh toán thật sự tốn của bạn bao nhiêu",
    sub: "Nhập số liệu của bạn. Chúng tôi so sánh: trung thực, kể cả khi kết quả không có lợi cho chúng tôi.",
    volume: "Doanh thu quẹt thẻ tại chỗ mỗi tháng",
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
    axisX: "Doanh thu thẻ / tháng",
    axisY: "Phí / tháng",
    chartTag: "TIẾT KIỆM ƯỚC TÍNH MỖI THÁNG",
    chartAlt:
      "Biểu đồ phí ước tính mỗi tháng theo doanh thu quẹt thẻ: Square và Clover là đường, acquirer riêng của bạn là dải.",
    disclaimer:
      "Phí niêm yết của Square (2.5% thẻ tín dụng; 0.75% + 7¢ thẻ ghi nợ). Clover không niêm yết phí tại Canada, nên chúng tôi ước tính theo mức phí tại quầy ở Mỹ của họ (2.3% + 10¢). “Acquirer riêng của bạn” = một hợp đồng interchange-plus điển hình cho cửa hàng nhỏ (1.3–1.8% thẻ tín dụng; 8¢ mỗi giao dịch ghi nợ; đã gồm khoảng $60/tháng phí cố định). Chỉ là ước tính. Mang theo sao kê để tính con số thật.",
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
    industries: "Ngành",
    demo: "Demo",
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
    plan: {
      aria: "Bản vẽ tương tác của một nhà hàng với các mô-đun MapleKiosk",
      introBody: "Bấm vào một số để xem mô-đun đó làm gì. Máy tính tiền bạn đang dùng vẫn nằm trên quầy.",
      labels: {
        kitchen: "Bếp",
        dining: "Phòng ăn",
        register: "Máy tính tiền giữ nguyên",
        entrance: "Lối vào",
      },
      modules: [
        { name: "Kiosk tự đặt món", body: "Khách tự đặt và tùy chỉnh. Mọi lựa chọn đến quầy đúng như đã chọn." },
        { name: "Máy thu ngân", body: "Tính tiền nhanh, món yêu thích một chạm và tip trên màn hình. Tiền mặt, thẻ, chạm và QR." },
        { name: "Màn hình bếp", body: "Phiếu từ mọi kênh trên một màn hình, theo thứ tự nhận. Làm xong thì bấm hoàn tất." },
        { name: "Menu trên TV", body: "Đồng bộ với menu. Đánh dấu hết món một lần, mọi màn hình đều theo." },
        { name: "Giao hàng, một hàng chờ", body: "Uber Eats và DoorDash hiện trên cùng màn hình với khách tại quầy. Không còn dàn tablet." },
        { name: "Trợ lý đặt lịch AI", body: "Trả lời mọi cuộc gọi bằng tiếng Pháp hoặc tiếng Anh và đặt bàn. Trợ lý nói rõ mình là tự động." },
        { name: "Đặt bàn & danh sách chờ", body: "Các bàn đặt tối nay và danh sách khách vãng lai đang chờ, ở cùng một nơi." },
        { name: "Tích điểm & chăm sóc khách", body: "Hồ sơ khách, tem điện tử, điểm thưởng và khuyến mãi đưa khách quen quay lại." },
        { name: "Quản lý kho", body: "Tồn kho theo từng món, để bạn thấy món nào sắp hết trước giờ cao điểm." },
      ],
      screens: {
        kiosk: {
          header: "Đặt món tại đây",
          item: "Combo gà giòn",
          rows: [
            { label: "Món kèm", on: "Khoai chiên", off: "Salad" },
            { label: "Bỏ", on: "Không hành", off: "Không dưa chua" },
            { label: "Thêm", on: "Thêm sốt", off: "Phô mai" },
          ],
          cta: "Thêm vào đơn",
        },
        counter: {
          order: "Đơn #042",
          where: "Quầy",
          lines: ["1 × Poutine cổ điển · L", "1 × Combo gà giòn"],
          total: "Tổng",
          tip: "Tip",
          custom: "Tùy chọn",
          charge: "Tính tiền · tiền mặt, thẻ, chạm hoặc QR",
        },
        tv: {
          title: "Menu",
          screen: "TV 1/2",
          items: ["Poutine cổ điển", "Combo gà giòn", "Cá hồi nướng", "Bát poké cá hồi"],
          note: "“Hết món cá hồi.” Đánh dấu một lần tại quầy. Kiosk và cả hai TV đều theo.",
        },
        delivery: {
          title: "Một hàng chờ",
          order: "Theo thứ tự",
          now: "ngay",
          rows: [
            { src: "Uber Eats", item: "2 × bát poké cá hồi", time: "18:55" },
            { src: "Kiosk", item: "Poutine cổ điển · L", time: "" },
            { src: "DoorDash", item: "2 × combo gà", time: "19:05" },
            { src: "Quầy", item: "2 × latte", time: "" },
          ],
        },
        call: {
          incoming: "Cuộc gọi đến",
          time: "18:42",
          caller: "Người gọi",
          assistant: "Trợ lý",
          lines: [
            { who: "caller", text: "Chào, tối thứ Bảy còn bàn cho bốn người không?" },
            { who: "assistant", text: "Xin chào! Tôi là trợ lý tự động của nhà hàng. Tôi có bàn lúc 19:00 thứ Bảy. Tôi đặt cho bạn nhé?" },
            { who: "caller", text: "Vâng, cho chúng tôi ngồi băng ghế được không?" },
          ],
          done: "Tran · 4 người · T7 19:00 · băng ghế",
        },
        book: {
          title: "Tối nay · Thứ Bảy",
          tag: "Sổ đặt bàn",
          byPhone: "Qua điện thoại",
          rows: [
            { time: "18:30", who: "Nguyen · 2", where: "Bàn 3", phone: false },
            { time: "19:00", who: "Tran · 4", where: "Băng ghế", phone: true },
            { time: "19:15", who: "Singh · 6", where: "Bàn 5+6", phone: false },
          ],
          waitlist: "Danh sách chờ",
          waiting: "2 người chờ",
          wait: [
            { who: "Kevin · 3", eta: "~15 phút" },
            { who: "Amélie · 2", eta: "~25 phút" },
          ],
        },
        loyalty: {
          screen: "Màn hình khách",
          tier: "Vàng",
          welcome: "Chào mừng trở lại, Tran!",
          stamps: "8/10 tem",
          tenth: "Lần thứ 10 chúng tôi mời",
        },
        stock: {
          title: "Kho",
          onHand: "Tồn",
          low: "Sắp hết",
          rows: [
            { item: "Sữa yến mạch", qty: "2", low: true },
            { item: "Phi lê cá hồi", qty: "6", low: false },
            { item: "Bánh burger", qty: "48", low: false },
            { item: "Khoai chiên (kg)", qty: "22", low: false },
          ],
        },
      },
    },
  },

  insights: {
    title: "Những con số bạn chưa bao giờ có thời gian xem",
    body: "MapleKiosk ghi lại mọi thứ trong khi bạn phục vụ: giờ cao điểm, món bán chạy nhất, thời gian trung bình mỗi đơn. Không phải dữ liệu cho có — mà là quyết định: xếp thêm thu ngân đúng giờ thật sự cần, và bỏ món không ai gọi.",
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
    proofTitle: "Xây cho Canada.",
    proofPoints: [
      "Được Revenu Québec chứng nhận (WEB-SRM)",
      "Giao diện ưu tiên tiếng Pháp, cho khách và nhân viên",
      "Thẻ ghi nợ Interac nằm sẵn trong phép tính phí, không phải thêm vào sau",
      "Chúng tôi tự lắp đặt, tại chỗ, tránh giờ bán hàng của bạn",
    ],
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
        body: "Tích hợp Clover hiện nay, máy của bạn vẫn là máy của bạn.",
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
    colApp: "Ứng dụng",
    colFor: "Dành cho",
    colPrice: "Chúng tôi lưu trữ · hằng tháng",
    colOnPrem: "Trên máy chủ của bạn",
    onPremValue: "Liên hệ báo giá",
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
        a: "Tích hợp Clover hiện nay; nếu không, kiosk chạy song song với máy của bạn, không thay thế nó.",
      },
      {
        q: "Dùng thử hai tuần là sao?",
        a: "Hai tuần ngay tại quán. Nếu kiosk không tự trả được tiền cho chính nó, chúng tôi rút điện, và bạn không nợ gì cả.",
      },
    ],
  },

  about: {
    title: "Xây tại Montreal. Lắp đặt bởi chính những người viết ra nó.",
    paras: [
      "MapleKiosk được xây tại Montreal bởi một nhóm nhỏ: chính những người viết phần mềm nạp menu của bạn và tự đến lắp kiosk.",
      "Sản phẩm đang chạy trong các tiệm nail, quán trà sữa và nhà hàng trên khắp nước Mỹ, gồm cả chuỗi nhiều chi nhánh. Các điểm lắp đặt đầu tiên ở Québec đang đến, vì vậy demo miễn phí và dùng thử không tốn gì.",
      "Các điều khoản. Không hợp đồng, không cho thuê, không ép gói thanh toán, tồn tại vì một lý do: chúng tôi muốn bạn ở lại vì bạn chọn ở lại.",
    ],
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
    disclosure:
      "Trợ lý là tự động và nói rõ điều đó ở đầu mỗi cuộc gọi. Việc xử lý cuộc gọi đang được rà soát theo luật riêng tư Québec (Luật 25) trước khi ra mắt.",
    listenTitle: "Hãy tự gọi thử.",
    plan: {
      aria: "Bản vẽ tương tác của một tiệm làm đẹp với các mô-đun MapleKiosk",
      introBody: "Bấm vào một số để xem mô-đun đó làm gì. Tay bạn vẫn ở với khách.",
      labels: {
        styling: "Làm tóc",
        nails: "Quầy nail",
        pedicure: "Làm móng chân",
        desk: "Quầy lễ tân",
        waiting: "Khu chờ",
        entrance: "Lối vào",
      },
      modules: [
        { name: "Trợ lý đặt lịch AI", body: "Trả lời mọi cuộc gọi bằng tiếng Pháp hoặc tiếng Anh, biết dịch vụ và bảng giá của bạn, và đặt lịch. Trợ lý nói rõ mình là tự động." },
        { name: "Lịch hẹn", body: "Lịch hẹn trong ngày, theo từng thợ. Lịch trợ lý đặt hiện ngay tại đây." },
        { name: "Hồ sơ khách hàng", body: "Các lần ghé và dịch vụ của từng khách, ngay tại ghế." },
        { name: "Thanh toán & tip", body: "Tính tiền nhanh với tip trên màn hình. Tiền mặt, thẻ, chạm và QR." },
        { name: "Tích điểm & khuyến mãi", body: "Tem điện tử, điểm thưởng và khuyến mãi đưa khách quen quay lại." },
        { name: "Danh sách chờ", body: "Khách vãng lai vào chung một danh sách và lần lượt đến lượt, theo thứ tự." },
        { name: "Tính lương nhân viên", body: "Giờ làm, dịch vụ, tip và hoa hồng của từng thợ, sẵn sàng cho ngày trả lương." },
        { name: "Quản lý kho", body: "Tồn kho theo từng sản phẩm, để bạn đặt thêm trước khi hết sơn." },
      ],
      screens: {
        call: {
          incoming: "Cuộc gọi đến",
          time: "11:08",
          caller: "Người gọi",
          assistant: "Trợ lý",
          lines: [
            { who: "caller", text: "Chào! Chiều thứ Bảy có chỗ cho hai người không?" },
            { who: "assistant", text: "Xin chào! Tôi là trợ lý tự động của tiệm. Tôi có lịch 14:30 với Linh và Mai. Tôi đặt cho bạn nhé?" },
            { who: "caller", text: "Tuyệt quá, cảm ơn." },
          ],
          done: "2 khách · T7 14:30 · Linh + Mai",
        },
        day: {
          title: "Thứ Bảy",
          tag: "Xem theo ngày",
          techs: ["Linh", "Mai", "Vy"],
          byPhone: "Qua điện thoại",
          slots: [
            { tech: 0, time: "10:00", what: "Dặm gel", phone: false },
            { tech: 1, time: "11:30", what: "Làm móng chân", phone: false },
            { tech: 2, time: "12:00", what: "Vẽ móng", phone: false },
            { tech: 0, time: "14:30", what: "2 khách", phone: true },
            { tech: 1, time: "14:30", what: "2 khách", phone: true },
          ],
        },
        profile: {
          name: "Tran Nguyen",
          tier: "Vàng",
          visits: "12 lần ghé",
          last: "Lần trước: dặm gel với Linh",
          next: "Lần tới: Thứ Bảy 14:30",
        },
        checkout: {
          title: "Thanh toán",
          lines: [
            { item: "Dặm gel", price: "45.00" },
            { item: "Vẽ móng", price: "10.00" },
          ],
          total: "Tổng",
          tip: "Tip",
          custom: "Tùy chọn",
          charge: "Tính tiền · tiền mặt, thẻ, chạm hoặc QR",
        },
        loyalty: {
          screen: "Màn hình khách",
          tier: "Vàng",
          welcome: "Chào mừng trở lại, Tran!",
          stamps: "8/10 lần ghé",
          tenth: "Lần thứ 10 chúng tôi mời",
        },
        waitlist: {
          title: "Khách vãng lai",
          tag: "Theo thứ tự",
          next: "Kế tiếp",
          rows: [
            { who: "Mai K.", what: "Làm móng tay", eta: "~10 phút" },
            { who: "Sofia", what: "Làm móng chân", eta: "~25 phút" },
            { who: "Kevin", what: "Gel", eta: "~35 phút" },
          ],
        },
        payroll: {
          title: "Bảng lương",
          period: "15 – 28/9",
          cols: ["Thợ", "Giờ", "Tip"],
          rows: [
            { tech: "Linh", hours: "32 h", tips: "412" },
            { tech: "Mai", hours: "28 h", tips: "365" },
            { tech: "Vy", hours: "18 h", tips: "210" },
          ],
        },
        stock: {
          title: "Hàng bán lẻ & vật tư",
          onHand: "Tồn",
          low: "Sắp hết",
          rows: [
            { item: "Sơn lót gel", qty: "2", low: true },
            { item: "Sơn đỏ #12", qty: "9", low: false },
            { item: "Dầu dưỡng móng", qty: "14", low: false },
            { item: "Acetone (L)", qty: "6", low: false },
          ],
        },
      },
    },
  },

  booking: {
    title: "Cuộc gọi nào cũng có người trả lời. Không phải bạn.",
    sub: "Một trợ lý trả lời mọi cuộc gọi bằng tiếng Pháp hoặc tiếng Anh, biết dịch vụ và bảng giá của bạn, và đặt lịch, trong khi tay bạn vẫn đang làm việc.",
    before: {
      title: "Điện thoại chưa bao giờ được làm cho một cửa hàng đông khách.",
      beforeTag: "Trước đây",
      afterTag: "Với trợ lý",
      rows: [
        { before: "Điện thoại reo giữa giờ phục vụ. Bạn để nó reo, hoặc bắt khách chờ máy.", after: "Trợ lý nhấc máy mọi cuộc gọi, tay bạn vẫn ở với công việc." },
        { before: "“Bấm phím 1 để nghe giờ mở cửa…” Khách gác máy trước khi gặp được ai.", after: "Khách nói bình thường. Trợ lý hiểu câu hỏi và trả lời." },
        { before: "Bạn lặp lại cùng một bảng giá và giờ mở cửa cả trăm lần mỗi tuần.", after: "Trợ lý biết dịch vụ, bảng giá và giờ mở cửa của bạn, và trả lời thay bạn." },
        { before: "Khách đổi từ tiếng Pháp sang tiếng Anh, và cuộc gọi khó hơn.", after: "Trợ lý trả lời bằng tiếng Pháp hoặc tiếng Anh." },
      ],
    },
    how: {
      title: "Ba bước. Chúng tôi lo phần cài đặt.",
      steps: [
        { title: "Trợ lý học về cửa hàng của bạn", body: "Chúng tôi nạp dịch vụ, bảng giá, giờ mở cửa và quy định của bạn, để trợ lý trả lời bằng thông tin thật, không phải đoán." },
        { title: "Bạn đặt quy tắc", body: "Khung giờ nào được đặt, và mỗi dịch vụ mất bao lâu." },
        { title: "Trợ lý trả lời. Bạn luôn nắm tình hình.", body: "Mọi lịch hẹn đều vào sổ của bạn." },
      ],
    },
    does: {
      title: "Nghe như người thật. Nói rõ mình không phải người.",
      items: [
        { title: "Trả lời không ngập ngừng", body: "Trao đổi tự nhiên, khách không bao giờ phải nhắc lại." },
        { title: "Tiếng Pháp và tiếng Anh", body: "Trả lời mọi cuộc gọi bằng tiếng Pháp hoặc tiếng Anh." },
        { title: "Biết menu hoặc dịch vụ của bạn", body: "Giá, thời lượng, giờ mở cửa và quy định lấy từ phần cài đặt của bạn." },
        { title: "Đặt lịch", body: "Đề xuất giờ trống và xác nhận lịch hẹn trước khi kết thúc cuộc gọi." },
      ],
    },
    uses: {
      title: "Một trợ lý, cho cả nhà bếp lẫn ghế làm đẹp",
      rows: [
        { hook: "Bàn cho bốn người, thứ Bảy nhé?", body: "Đặt bàn cho tối nay và cuối tuần, giờ mở cửa, và những câu hỏi làm gián đoạn giờ phục vụ.", link: "Nhà hàng & quán cà phê" },
        { hook: "Chiều thứ Bảy có chỗ cho hai người không?", body: "Lịch hẹn theo dịch vụ và theo thợ, bảng giá và đổi lịch, trong khi thợ vẫn làm việc.", link: "Tiệm làm đẹp" },
      ],
    },
    trust: {
      title: "Trợ lý nói rõ mình là tự động. Ở mọi cuộc gọi.",
      points: [
        "Người gọi được nghe rằng trợ lý là tự động ngay đầu mỗi cuộc gọi.",
        "Việc xử lý cuộc gọi đang được rà soát theo luật riêng tư Québec (Luật 25) trước khi ra mắt.",
      ],
    },
    faqTitle: "Hỏi thẳng, trả lời thẳng",
    faq: [
      { q: "Trợ lý đặt lịch AI là gì?", a: "Một trợ lý điện thoại cho nhà hàng và tiệm làm đẹp. Trợ lý nghe máy bằng giọng nói tự nhiên, trả lời câu hỏi về dịch vụ, bảng giá và giờ mở cửa của bạn, và đặt lịch." },
      { q: "Nó có thay thế nhân viên của tôi không?", a: "Không. Trợ lý nhận những cuộc gọi mà tay bạn không nhận được, để nhân viên ở lại với khách trước mặt." },
      { q: "Nó có nói với người gọi rằng nó là tự động không?", a: "Có. Trợ lý nói rõ điều đó ngay đầu mỗi cuộc gọi." },
      { q: "Nó nói được những ngôn ngữ nào?", a: "Tiếng Pháp và tiếng Anh." },
      { q: "Lịch hẹn đi về đâu?", a: "Vào sổ lịch hẹn của bạn." },
      { q: "Tôi có thể thử trước khi quyết định không?", a: "Có. Gọi số trên trang này và tự nói chuyện với trợ lý." },
      { q: "Chi phí bao nhiêu?", a: "Trợ lý được báo giá riêng, tách khỏi các ứng dụng." },
    ],
    finalTitle: "Gọi ngay. Trợ lý sẽ nghe máy.",
    finalSub: "Hỏi đặt bàn, dặm gel, hay giờ mở cửa của bạn. Rồi hãy quyết định.",
  },

  demo: {
    title: "Thử như cách nhân viên của bạn sẽ dùng.",
    sub: "Nhận một đơn, gửi vào bếp, đánh dấu hết món. Ở chế độ tiệm làm đẹp, để trợ lý nghe một cuộc gọi. Không có gì ở đây được lưu lại.",
    modes: { cafe: "Cà phê & nhà hàng", salon: "Tiệm làm đẹp" },
    modeLabel: "Chế độ demo",
    reset: "Làm lại từ đầu",
    portal: "Mở cổng thật",
    log: "Nhật ký sự kiện",
    logEmpty: "Chưa có gì. Hãy chạm vào một thứ ở trên.",
    cafe: {
      inputTag: "Nhận đơn",
      kiosk: "Kiosk",
      counter: "Quầy",
      items: [
        { id: "latte", name: "Latte", price: 4.75 },
        { id: "maple", name: "Latte maple", price: 5.5 },
        { id: "brew", name: "Cà phê ủ lạnh", price: 4.25 },
        { id: "croissant", name: "Bánh sừng bò", price: 3.5 },
        { id: "poutine", name: "Poutine cổ điển", price: 11.5 },
        { id: "combo", name: "Combo gà", price: 13.95 },
      ],
      order: "Đơn #{n}",
      empty: "Chạm vào một món để bắt đầu đơn.",
      total: "Tổng",
      remove: "Bớt một {item}",
      pay: "Thanh toán tại kiosk",
      charge: "Tính tiền",
      soldOut: "Hết món",
      menuTag: "Hết món hôm nay",
      mark: "86",
      back: "Bán lại",
      customerTag: "Khách",
      noCustomer: "Không có khách",
      customers: [
        { name: "Ava", stamps: 6 },
        { name: "Tran", stamps: 8 },
        { name: "Noah", stamps: 2 },
      ],
      kitchen: "Màn hình bếp",
      bump: "Xong",
      noTickets: "Không còn phiếu nào. Bếp đã làm kịp.",
      seed: [
        { n: 42, src: "Quầy", lines: ["1 × Poutine cổ điển"] },
        { n: 43, src: "Uber Eats", lines: ["2 × Cà phê ủ lạnh", "1 × Bánh sừng bò"] },
      ],
      screen: "Màn hình khách",
      idle: "Xin chào! Đặt món tại kiosk hoặc tại quầy.",
      welcome: "Chào mừng trở lại, {name}!",
      stamps: "{n}/10 tem",
      thanks: "Cảm ơn! Đơn #{n} đang được làm trong bếp.",
      ready: "Đơn #{n} đã xong",
      tv: "Menu trên TV",
      src: { kiosk: "Kiosk", counter: "Quầy" },
      events: {
        sent: "Đơn #{n} được gửi vào bếp từ {src}.",
        bumped: "Đơn #{n} đã xong: sẵn sàng để lấy.",
        soldOut: "{item} được đánh dấu hết món. Kiosk và TV đều theo.",
        back: "{item} đã có lại trong menu.",
        customer: "Đã thêm {name} vào đơn.",
        stamp: "{name} được thêm một tem: {n}/10.",
      },
    },
    salon: {
      phoneTag: "Trợ lý",
      play: "Nghe một cuộc gọi mẫu",
      playing: "Đang trong cuộc gọi…",
      again: "Nghe lại",
      caller: "Người gọi",
      assistant: "Trợ lý",
      script: [
        { who: "caller", text: "Chào! Chiều thứ Bảy có chỗ cho hai người không?" },
        { who: "assistant", text: "Xin chào! Tôi là trợ lý tự động của tiệm. Tôi có lịch 14:30 với Linh và Mai. Tôi đặt cho bạn nhé?" },
        { who: "caller", text: "Tuyệt quá, cảm ơn." },
        { who: "assistant", text: "Xong: thứ Bảy lúc 14:30 với Linh và Mai. Hẹn gặp bạn!" },
      ],
      realTitle: "Hoặc gọi trợ lý thật",
      calendarTag: "Lịch hẹn · Thứ Bảy",
      techs: ["Linh", "Mai", "Vy"],
      hours: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"],
      byPhone: "Qua điện thoại",
      bookings: [
        { tech: 0, start: 0, len: 1, what: "Dặm gel · Tran" },
        { tech: 1, start: 1, len: 2, what: "Làm móng chân · Ava" },
        { tech: 2, start: 2, len: 1, what: "Vẽ móng · Kim" },
        { tech: 0, start: 5, len: 1, what: "Làm móng tay · Lise" },
      ],
      newBooking: "14:30 · 2 khách",
      checkoutTag: "Thanh toán",
      open: [
        { client: "Tran", service: "Dặm gel", tech: 0, price: 45 },
        { client: "Ava", service: "Làm móng chân", tech: 1, price: 55 },
        { client: "Kim", service: "Vẽ móng", tech: 2, price: 30 },
      ],
      with: "với {tech}",
      tip: "Tip",
      charge: "Tính tiền {total}",
      noOpen: "Mọi khách đã thanh toán.",
      payrollTag: "Bảng lương · kỳ này",
      cols: ["Thợ", "Giờ", "Tip"],
      hoursWorked: ["32 h", "28 h", "18 h"],
      tipsStart: [412, 365, 210],
      waitTag: "Khách vãng lai",
      add: "Thêm khách vãng lai",
      seat: "Mời người kế tiếp",
      walkins: ["Mai K.", "Sofia", "Kevin", "Amélie", "Tom", "Lina"],
      noWait: "Không có ai đang chờ.",
      events: {
        call: "Trợ lý đã nghe một cuộc gọi.",
        booked: "Đã đặt qua điện thoại: thứ Bảy 14:30, Linh và Mai.",
        charged: "{client} đã trả {total}, gồm {tip} tip. Tip của {tech} đã tăng.",
        added: "{name} đã vào danh sách chờ.",
        seated: "{name} đã được mời vào ghế.",
      },
    },
  },

  notFound: {
    title: "Trang này không có trong menu.",
    text: "Quay về trang chủ, hoặc hay hơn, tự mình thử kiosk.",
    back: "Về trang chủ",
  },
}

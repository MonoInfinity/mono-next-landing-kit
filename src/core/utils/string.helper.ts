export function lowercaseFirstLetter(str: string) {
    return str.charAt(0).toLowerCase() + str.slice(1);
}
export function uppercaseFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export const formatMoney = (data: number) =>
    data.toLocaleString('it-IT', {
        style: 'currency',
        currency: 'VND',
    });

export const formatDistance = (data: number) => {
    if (data < 1000) {
        return `${data} m`;
    }
    return `${(data / 1000).toFixed(2)} km`;
};
export const formatTime = (data: number) => {
    if (data < 60) {
        return `${data} phút`;
    }
    return `${(data / 60).toFixed(2)} giờ`;
};

export const translator = (str: string) => {
    str = str.trim().toLowerCase();
    const dictionary: Record<string, string> = {
        active: 'Hoạt Động',
        inactive: 'Vô Hiệu Hóa',
        initial: 'Khởi Tạo',
        pending: 'Đang Xử Lý',
        started: 'Bắt Đầu',
        success: 'Thành Công',
        cancel: 'Hủy Bỏ',
        available: 'Sẳn sàng',
        fail: 'Thất Bại',
        admin: 'quản lý',
        user: 'người dùng',
        transfer: 'Chuyển Tiền',
        deposit: 'Nạp Tiền',
        'half paid': 'Đặt Cọc',
        half_paid: 'Đặt Cọc',
        full_paid: 'Hoàn Tất Thanh Toán',
        not_verify: 'Chưa Xác Thật',
        verify: 'Đã Xác Thật',
        refund: 'Hoàn Tiền',
        waiting: 'Chờ Xem Xét',
        rejected: 'Bị Từ Chối',
        percent: 'Giảm theo phần trăm',
        amount: 'Giảm theo giá trị',
        receive: 'Nhận Tiền',
    };
    if (!dictionary[str]) {
        console.log(`Miss key for ${str}`);
    }

    return dictionary[str];
};

import { logoSrc, backUrl } from "../Data";
import { EditorState } from "draft-js"
import { columnObjFormat, editColumnObjFormat, editContentFormat, sidebarContentFormat, sidebarObjFormat, sidebarObjListFormat } from "./ManagerContentFormat";
import { BsPerson, BsCameraVideo, BsAlarm } from 'react-icons/bs'
import { AiTwotoneSetting, AiOutlineUnorderedList } from 'react-icons/ai'
export const editorState = {
    editorState: EditorState.createEmpty()
}

export const cardDefaultColor = {
    font: "#000",
    background: "#f4f4f4"
}
export const needTwoImage = ['issue', 'theme', 'feature'];

export const zSidebar = [
    sidebarContentFormat('회원관리', [
        sidebarObjListFormat('회원관리', '/manager/list/user', 40, ['/manager/list/user']),//edit
    ], <BsPerson />),
    sidebarContentFormat('기본설정', [
        sidebarObjListFormat('상단띠배너', '/manager/edit/common_setting/1', 40, ['/manager/edit/common_setting/1']),//list
        sidebarObjListFormat('메인배너', '/manager/edit/home_setting/1', 40, ['/manager/edit/home_setting/1']),//list
        sidebarObjListFormat('메인동영상', '/manager/list/main_video', 40, ['/manager/list/main_video']),//list
        sidebarObjListFormat('수강신청배너', '/manager/edit/enrolment_setting/1', 40, ['/manager/edit/enrolment_setting/1']),//list
        sidebarObjListFormat('앱등록관리', '/manager/list/app', 40, ['/manager/list/app']),//list
        sidebarObjListFormat('팝업관리', '/manager/list/popup', 40, ['/manager/list/popup']),//list
    ], <AiTwotoneSetting />),
    sidebarContentFormat('상품관리', [
        sidebarObjListFormat('전문가관리', '/manager/list/master?level=30', 40, ['/manager/list/master']),//list
        sidebarObjListFormat('강의관리', '/manager/list/academy_category', 40, ['/manager/list/academy_category']),//list
        sidebarObjListFormat('강의컨텐츠관리', '/manager/list/academy', 40, ['/manager/list/academy']),//list
    ], <BsCameraVideo />),
    sidebarContentFormat('게시판관리', [
        sidebarObjListFormat('문의관리', '/manager/list/request', 40, ['/manager/list/request']),//list
        sidebarObjListFormat('FAQ관리', '/manager/list/faq', 40, ['/manager/list/faq']),//list
        sidebarObjListFormat('이벤트관리', '/manager/list/event', 40, ['/manager/list/event']),//list
        sidebarObjListFormat('공지사항', '/manager/list/notice', 40, ['/manager/list/notice']),//list
        sidebarObjListFormat('후기관리', '/manager/list/review', 40, ['/manager/list/review']),//list
    ], <AiOutlineUnorderedList />),
    sidebarContentFormat('푸시알림', [
        sidebarObjListFormat('푸시알림', '/manager/list/alarm', 40, ['/manager/list/alarm']),//list
    ], <BsAlarm />),
];

export const objManagerListContent = {
    user: sidebarObjFormat(
        '회원 리스트',
        'user',
        [
            columnObjFormat('로그인타입', '', 'login_type', 'type'),
            columnObjFormat('아이디', '', 'text', 'id'),
            columnObjFormat('이름', '', 'text', 'name'),
            columnObjFormat('닉네임', '', 'text', 'nickname'),
            columnObjFormat('폰번호', '', 'text', 'phone'),
            columnObjFormat('접근권한', '', 'level', 'user_level'),
            columnObjFormat('주소', '', 'text', 'address'),
            columnObjFormat('상세주소', '', 'text', 'address_detail'),
            columnObjFormat('우편번호', '', 'text', 'zip_code'),
            columnObjFormat('가입일', '', 'text', 'date'),
            columnObjFormat('로그인시간', '', 'text', 'last_login'),
            columnObjFormat('결제내역', '', 'user_pay_list', 'user_pay_list'),
            columnObjFormat('수정', '', 'edit', 'edit'),
            columnObjFormat('삭제', '', 'delete', 'delete'),
        ],
        ['level='],
        true,
        false,
        '150%'),
    app: sidebarObjFormat(
        '앱등록관리',
        'app',
        [
            columnObjFormat('앱아이콘', '', 'img', 'main_img'),
            columnObjFormat('앱이름', '', 'text', 'name'),
            columnObjFormat('링크', '', 'text', 'link'),
            columnObjFormat('노출여부', '', 'status', 'status'),
            columnObjFormat('맨위로', '', 'top', 'top'),
            columnObjFormat('수정', '', 'edit', 'edit'),
            columnObjFormat('삭제', '', 'delete', 'delete'),
        ],
        [],
        true,
        true),
    user_statistics: sidebarObjFormat(
        '회원 통계',
        'user_statistics',
        [
            columnObjFormat('일자', '', 'text', 'date'),
            columnObjFormat('가입', '', 'number', 'user_count'),
            columnObjFormat('방문', '', 'number', 'visit_count'),
            columnObjFormat('새글', '', 'number', 'post_count'),
            columnObjFormat('댓글', '', 'number', 'comment_count'),
            columnObjFormat('페이지뷰', '', 'number', 'views_count'),
        ],
        ['statistics_type=','statistics_year=','statistics_month='],
        false,
        false),
    master: sidebarObjFormat(
        '전문가 리스트',
        'user',
        [
            columnObjFormat('프로필이미지', '', 'img', 'profile_img'),
            columnObjFormat('로그인타입', '', 'login_type', 'type'),
            columnObjFormat('아이디', '', 'text', 'id'),
            columnObjFormat('이름', '', 'text', 'name'),
            columnObjFormat('폰번호', '', 'text', 'phone'),
            columnObjFormat('접근권한', '', 'level', 'user_level'),
            columnObjFormat('가입일', '', 'text', 'date'),
            columnObjFormat('로그인시간', '', 'text', 'last_login'),
            columnObjFormat('노출여부', '', 'status', 'status'),
            columnObjFormat('수정', '', 'master_edit', 'master_edit'),
            columnObjFormat('삭제', '', 'delete', 'delete'),
        ],
        ['level=30'],
        true,
        true),
    academy_category: sidebarObjFormat(
        '강의 관리',
        'academy_category',
        [
            columnObjFormat('메인배너', '', 'img', 'main_img'),
            columnObjFormat('강사', '', 'text', 'master_nickname'),
            columnObjFormat('제목', '', 'text', 'title'),
            columnObjFormat('정가', '', 'number', 'price'),
            columnObjFormat('할인율', '', 'text', 'discount_percent'),
            columnObjFormat('등록일', '', 'text', 'date'),
            columnObjFormat('맨위로', '', 'top', 'top'),
            columnObjFormat('BEST', '', 'status', 'is_best'),
            columnObjFormat('노출여부', '', 'status', 'status'),
            columnObjFormat('컨텐츠추가', '', 'add_academy', 'add_academy'),
            columnObjFormat('강의컨텐츠리스트', '', 'academy_list', 'academy_list'),
            columnObjFormat('수정', '', 'edit', 'edit'),
            columnObjFormat('삭제', '', 'delete', 'delete'),
        ],
        [],
        true,
        true),
    main_video: sidebarObjFormat(
        '메인비디오 관리',
        'main_video',
        [
            columnObjFormat('제목', '', 'text', 'title'),
            columnObjFormat('유튜브링크', '', 'text', 'video_link'),
            columnObjFormat('추가일', '', 'text', 'date'),
            columnObjFormat('맨위로', '', 'top', 'top'),
            columnObjFormat('노출여부', '', 'status', 'status'),
            columnObjFormat('수정', '', 'edit', 'edit'),
            columnObjFormat('삭제', '', 'delete', 'delete'),
        ],
        [],
        true,
        true),
    academy: sidebarObjFormat(
        '강의 컨텐츠 관리',
        'academy',
        [
            columnObjFormat('메인이미지', '', 'img', 'main_img'),
            columnObjFormat('강의명', '', 'text', 'class_title'),
            columnObjFormat('제목', '', 'text', 'title'),
            columnObjFormat('추가일', '', 'text', 'date'),
            columnObjFormat('맨위로', '', 'top', 'top'),
            columnObjFormat('수정', '', 'edit', 'edit'),
            columnObjFormat('삭제', '', 'delete', 'delete'),
        ],
        [],
        false,
        true,
        '100%',
        'category_pk'),
    comment: sidebarObjFormat(
        '댓글 관리',
        'comment',
        [
            columnObjFormat('카테고리', '', 'category_type', 'category_pk'),
            columnObjFormat('제목', '', 'text', 'item_title'),
            columnObjFormat('닉네임', '', 'text', 'nickname'),
            columnObjFormat('생성일', '', 'text', 'date'),
            columnObjFormat('댓글', '', 'text', 'note'),
            columnObjFormat('삭제', '', 'delete', 'delete'),
        ],
        [],
        false,
        false),
    bag: sidebarObjFormat(
        '장바구니 관리',
        'subscribe',
        [
            columnObjFormat('유저아이디', '', 'text', 'id'),
            columnObjFormat('유저명', '', 'text', 'user_name'),
            columnObjFormat('수강상품', '', 'text', 'title'),
            columnObjFormat('강사', '', 'text', 'master_nickname'),
            columnObjFormat('날짜', '', 'text', 'date'),
            columnObjFormat('삭제', '', 'delete', 'delete'),
        ],
        ['status=0', 'master_pk=', 'academy_category_pk='],
        false,
        false),
    subscribe: sidebarObjFormat(
        '결제 내역 관리',
        'subscribe',
        [
            columnObjFormat('신청번호', '', 'number', 'pk'),
            columnObjFormat('아이디', '', 'text', 'id'),
            columnObjFormat('닉네임', '', 'text', 'nickname'),
            columnObjFormat('유저명', '', 'text', 'user_name'),
            columnObjFormat('폰번호', '', 'text', 'phone'),
            columnObjFormat('수강강의', '', 'text', 'title'),
            columnObjFormat('강사', '', 'text', 'master_nickname'),
            columnObjFormat('승인금액', '', 'text', 'approve_price'),
            columnObjFormat('취소금액', '', 'text', 'cancel_price'),
            columnObjFormat('등록일', '', 'text', 'trade_date'),
            columnObjFormat('이용기간', '', 'text', 'period'),
            columnObjFormat('예금주', '', 'text', 'account_holder'),
            columnObjFormat('은행명', '', 'text', 'bank_name'),
            columnObjFormat('계좌번호', '', 'text', 'account_number'),
            columnObjFormat('결제타입', '', 'text', 'type'),
            columnObjFormat('이용가능여부', '', 'status', 'use_status'),
            columnObjFormat('취소', '', 'pay_cancel', 'pay_cancel'),
            columnObjFormat('수정', '', 'pay_edit', 'pay_edit'),
            columnObjFormat('삭제', '', 'delete', 'delete'),
        ],
        ['status=1', 'master_pk=', 'academy_category_pk=', 'price_is_minus=', 'start_date=', 'end_date=', 'type='],
        true,
        false,
        '150%'),
    request: sidebarObjFormat(
        '문의 관리',
        'request',
        [
            columnObjFormat('문의자아이디', '', 'text', 'id'),
            columnObjFormat('문의자닉네임', '', 'text', 'nickname'),
            columnObjFormat('제목', '', 'text', 'title'),
            columnObjFormat('확인여부', '', 'request_status', 'request_status'),
            columnObjFormat('문의날짜', '', 'text', 'date'),
            columnObjFormat('수정', '', 'edit', 'edit'),
            columnObjFormat('삭제', '', 'delete', 'delete'),
        ],
        [],
        false,
        false),
    faq: sidebarObjFormat(
        'FAQ 관리',
        'faq',
        [
            columnObjFormat('제목', '', 'text', 'title'),
            columnObjFormat('등록일', '', 'text', 'date'),
            columnObjFormat('맨위로', '', 'top', 'top'),
            columnObjFormat('노출여부', '', 'status', 'status'),
            columnObjFormat('수정', '', 'edit', 'edit'),
            columnObjFormat('삭제', '', 'delete', 'delete'),
        ],
        [],
        true,
        true),
    event: sidebarObjFormat(
        '이벤트 관리',
        'event',
        [
            columnObjFormat('배너이미지', '', 'img', 'main_img'),
            columnObjFormat('제목', '', 'text', 'title'),
            columnObjFormat('시작일', '', 'text', 'start_date'),
            columnObjFormat('종료일', '', 'text', 'end_date'),
            columnObjFormat('등록일', '', 'text', 'date'),
            columnObjFormat('맨위로', '', 'top', 'top'),
            columnObjFormat('노출여부', '', 'status', 'status'),
            columnObjFormat('수정', '', 'edit', 'edit'),
            columnObjFormat('삭제', '', 'delete', 'delete'),
        ],
        [],
        true,
        true),
    notice: sidebarObjFormat(
        '공지 관리',
        'notice',
        [
            columnObjFormat('메인이미지', '', 'img', 'main_img'),
            columnObjFormat('제목', '', 'text', 'title'),
            columnObjFormat('등록일', '', 'text', 'date'),
            columnObjFormat('맨위로', '', 'top', 'top'),
            columnObjFormat('노출여부', '', 'status', 'status'),
            columnObjFormat('수정', '', 'edit', 'edit'),
            columnObjFormat('삭제', '', 'delete', 'delete'),
        ],
        [],
        true,
        true),
    review: sidebarObjFormat(
        '후기 관리',
        'review',
        [
            columnObjFormat('강의제목', '', 'text', 'item_title'),
            columnObjFormat('제목', '', 'text', 'title'),
            columnObjFormat('닉네임', '', 'text', 'nickname'),
            columnObjFormat('생성일', '', 'text', 'date'),
            columnObjFormat('BEST', '', 'status', 'is_best'),
            columnObjFormat('자세히보기', '', 'edit', 'edit'),
            columnObjFormat('삭제', '', 'delete', 'delete'),
        ],
        [ 'master_pk=', 'academy_category_pk='],
        false,
        false),
    alarm: sidebarObjFormat(
        '푸시알림 관리',
        'alarm',
        [
            columnObjFormat('제목', '', 'text', 'title'),
            columnObjFormat('타입', '', 'alarm_type', 'type'),
            columnObjFormat('생성시간', '', 'text', 'date'),
            columnObjFormat('노출여부', '', 'status', 'status'),
            columnObjFormat('수정', '', 'edit', 'edit'),
            columnObjFormat('삭제', '', 'delete', 'delete'),
        ],
        [],
        true,
        false),
    popup: sidebarObjFormat(
        '팝업 관리',
        'popup',
        [
            columnObjFormat('이미지', '', 'img', 'img_src'),
            columnObjFormat('링크', '', 'text', 'link'),
            columnObjFormat('맨위로', '', 'top', 'top'),
            columnObjFormat('노출여부', '', 'status', 'status'),
            columnObjFormat('수정', '', 'edit', 'edit'),
            columnObjFormat('삭제', '', 'delete', 'delete'),
        ],
        [],
        true,
        true),
}
export const objManagerOptionCardContent = {

}
export const objManagerEditContent = {
    academy_category: {
        schema: 'academy_category',
        breadcrumb: '강의',
        add_list: [],
        columns: [//img, select, input, 
            [
                editColumnObjFormat('메인이미지 (240x150)', 'img', { field_name: 'content' }, 'main_img'),
            ],
            [
                editColumnObjFormat('서브이미지 (90x120)', 'img', { field_name: 'content2' }, 'sub_img'),
            ],
            [
                editColumnObjFormat('제목', 'input', { placeholder: '제목을 입력해 주세요.' }, 'title'),
                editColumnObjFormat('부제목', 'input', { placeholder: '부제목을 입력해 주세요.' }, 'sub_title'),
                editColumnObjFormat('해시태그', 'input', { placeholder: '#주식' }, 'hash'),
            ],
            [
                // editColumnObjFormat('난이도', 'select', {
                //     api_url: false, option_list: [
                //         { name: '왕초보', val: 1 },
                //         { name: '검색기', val: 2 },
                //         { name: '단타', val: 3 },
                //         { name: '종목발굴', val: 4 },
                //         { name: '기억분석', val: 5 },
                //     ]
                // }, 'difficulty'),
                editColumnObjFormat('강사', 'select', {
                    api_url: '/api/items?table=user&level=30', option_list: [], use_name_column: 'nickname', use_val_column: 'pk'
                }, 'master_pk'),
            ],
            [
                editColumnObjFormat('수강대상', 'input', { placeholder: '수강대상을 입력해 주세요.' }, 'target'),
                editColumnObjFormat('강의구성', 'input', { placeholder: '강의구성을 입력해 주세요.' }, 'composition'),
            ],
            [
                editColumnObjFormat('시작일', 'input', { type: 'date' }, 'start_date'),
                editColumnObjFormat('종료일', 'input', { type: 'date' }, 'end_date'),
            ],
            [
                editColumnObjFormat('정가', 'input', { type: 'number', placeholder: '숫자를 입력해 주세요.' }, 'price'),
                editColumnObjFormat('할인율', 'input', { type: 'number', placeholder: '0 ~ 100' }, 'discount_percent'),
            ],
            [
                editColumnObjFormat('마감여부', 'select', {
                    api_url: false, option_list: [
                        { name: '마감안함', val: 0 },
                        { name: '마감', val: 1 },
                    ]
                }, 'is_deadline'),
            ],
            [
                editColumnObjFormat('소개', 'editor', {}, 'introduce_note'),
            ],
            [
                editColumnObjFormat('혜택', 'editor', {}, 'benefit_note'),
            ],
            [
                editColumnObjFormat('리더', 'editor', {}, 'leader_note'),
            ],
            [
                editColumnObjFormat('커리큘럼', 'editor', {}, 'curriculum_note'),
            ],
        ],
    },
    academy: {
        schema: 'academy',
        breadcrumb: '강의 컨텐츠',
        add_list: [],
        columns: [//img, select, input, 
            [
                editColumnObjFormat('메인이미지 (240x150)', 'img', { field_name: 'content' }, 'main_img'),
            ],
            [
                editColumnObjFormat('제목', 'input', { placeholder: '제목을 입력해 주세요.' }, 'title'),
                editColumnObjFormat('해시태그', 'input', { placeholder: '' }, 'hash'),
            ],
            [
                editColumnObjFormat('pdf 다운로드이동 이미지', 'img', { field_name: 'pdfimg' }, 'pdf_img'),
            ],
            [
                editColumnObjFormat('pdf업로드', 'pdf', { field_name: 'pdf' }, 'pdf'),
            ],
            [
                editColumnObjFormat('내용', 'editor', {}, 'note'),
            ],
        ],
    },
    main_video: {
        schema: 'main_video',
        breadcrumb: '메인비디오',
        add_list: [],
        columns: [//img, select, input, 
            [
                editColumnObjFormat('제목', 'input', { placeholder: '제목을 입력해 주세요.' }, 'title'),
                editColumnObjFormat('부제목', 'input', { placeholder: '부제목을 입력해 주세요.' }, 'sub_title'),
            ],
            [
                editColumnObjFormat('자세히보기링크', 'input', { placeholder: '' }, 'link'),
                editColumnObjFormat('유튜브링크', 'input', { placeholder: 'https://www.youtube.com/watch?v=9kaCAbIXuyg&list=RDVWbYRiF44Dc&index=2' }, 'video_link'),
                editColumnObjFormat('더많은 영상보기 링크', 'input', { placeholder: '' }, 'more_link'),
            ],
        ],
    },
    request: {
        schema: 'request',
        breadcrumb: '문의',
        add_list: [],
        update_list: [{ key: 'status', value: '1' }],
        columns: [//img, select, input, 
            [
                editColumnObjFormat('제목', 'input', { disabled: true }, 'title'),
            ],
            [
                editColumnObjFormat('내용', 'textarea', { disabled: true }, 'note'),
            ],
            [
                editColumnObjFormat('답변', 'textarea', {}, 'reply_note'),
            ],
        ],
    },
    master: {
        schema: 'user',
        breadcrumb: '전문가',
        add_list: [{ key: 'user_level', value: 30 }],
        columns: [//img, select, input, 
            [
                editColumnObjFormat('아이디', 'input', {}, 'id'),
                editColumnObjFormat('비밀번호', 'input', { placeholder: '****', type: 'password' }, 'pw'),
            ],
            [
                editColumnObjFormat('이름', 'input', {}, 'name'),
                editColumnObjFormat('닉네임(채널명)', 'input', {}, 'nickname'),
            ],
            [
                editColumnObjFormat('프로필이미지  (여백없이 200x200)', 'img', { field_name: 'master', title_width: '100%' }, 'profile_img'),
            ],
            [
                editColumnObjFormat('서브프로필이미지 (여백없이 200x200)', 'img', { field_name: 'master2', title_width: '100%' }, 'sub_profile_img'),
            ],
            [
                editColumnObjFormat('이력', 'textarea', {}, 'record_note'),
            ],
            [
                editColumnObjFormat('소개 이미지', 'img', { field_name: 'content3' }, 'introduce_img'),
            ],
            [
                editColumnObjFormat('소개', 'editor', {}, 'introduce_note'),
            ],
        ],
    },
    common_setting: {
        schema: 'setting',
        breadcrumb: '상단띠배너',
        add_list: [],
        columns: [//img, select, input, 
            [
                editColumnObjFormat('탑 띠배너 전문가명', 'input', {}, 'top_banner_manager_name'),
                editColumnObjFormat('탑 띠배너 글', 'input', {}, 'top_banner_note'),
                editColumnObjFormat('탑 띠배너 링크', 'input', { placeholder: '/home' }, 'top_banner_link'),
            ],
        ],
    },
    subscribe: {
        schema: 'subscribe',
        breadcrumb: '결제 내역',
        add_list: [],
        columns: [//img, select, input, 
            [
                editColumnObjFormat('유저아이디', 'input', {}, 'user_id'),
            ],
            [
                editColumnObjFormat('강의명', 'select', {
                    api_url: '/api/items?table=academy_category', option_list: [], use_name_column: 'title', use_val_column: 'pk'
                }, 'academy_category_pk'),
            ],
            [
                editColumnObjFormat('승인금액', 'input', {}, 'price'),

            ],
            [
                editColumnObjFormat('결제타입', 'select', {
                    api_url: false, option_list: [
                        { name: '카드결제', val: 0 },
                        { name: '무통장입금', val: 1 },
                        { name: '기타', val: 2 },
                    ]
                }, 'type'),
            ],
        ],
    },
    pay_edit: {
        schema: 'subscribe',
        breadcrumb: '결제 내역',
        add_list: [],
        columns: [//img, select, input, 
        ],
    },
    pay_cancel: {
        schema: 'subscribe',
        breadcrumb: '결제 내역 취소',
        add_list: [],
        columns: [//img, select, input, 
        ],
    },
    home_setting: {
        schema: 'setting',
        breadcrumb: '메인배너',
        add_list: [],
        columns: [//img, select, input, 
            [
                editColumnObjFormat('슬라이드 이미지 1 (500x150)', 'img', { field_name: 'content1' }, 'home_banner_img_1'),
            ],
            [
                editColumnObjFormat('링크', 'input', { placeholder: '/home' }, 'home_banner_link_1'),
            ],
            [
                editColumnObjFormat('슬라이드 이미지 2 (500x150)', 'img', { field_name: 'content2' }, 'home_banner_img_2'),
            ],
            [
                editColumnObjFormat('링크', 'input', { placeholder: '/home' }, 'home_banner_link_2'),
            ],
            [
                editColumnObjFormat('슬라이드 이미지 3 (500x150)', 'img', { field_name: 'content3' }, 'home_banner_img_3'),
            ],
            [
                editColumnObjFormat('링크', 'input', { placeholder: '/home' }, 'home_banner_link_3'),
            ],
            [
                editColumnObjFormat('슬라이드 이미지 4 (500x150)', 'img', { field_name: 'content4' }, 'home_banner_img_4'),
            ],
            [
                editColumnObjFormat('링크', 'input', { placeholder: '/home' }, 'home_banner_link_4'),
            ],
            [
                editColumnObjFormat('슬라이드 이미지 5 (500x150)', 'img', { field_name: 'content5' }, 'home_banner_img_5'),
            ],
            [
                editColumnObjFormat('링크', 'input', { placeholder: '/home' }, 'home_banner_link_5'),
            ],
        ],
    },
    enrolment_setting: {
        schema: 'setting',
        breadcrumb: '수강신청배너',
        add_list: [],
        columns: [//img, select, input, 
            [
                editColumnObjFormat('슬라이드 이미지 1 (500x125)', 'img', { field_name: 'content1' }, 'enrolment_banner_img_1')
            ],
            [
                editColumnObjFormat('링크', 'input', { placeholder: '/home' }, 'enrolment_banner_link_1'),
            ],
            [
                editColumnObjFormat('슬라이드 이미지 2 (500x125)', 'img', { field_name: 'content2' }, 'enrolment_banner_img_2')
            ],
            [
                editColumnObjFormat('링크', 'input', { placeholder: '/home' }, 'enrolment_banner_link_2'),
            ],
            [
                editColumnObjFormat('슬라이드 이미지 3 (500x125)', 'img', { field_name: 'content3' }, 'enrolment_banner_img_3')
            ],
            [
                editColumnObjFormat('링크', 'input', { placeholder: '/home' }, 'enrolment_banner_link_3'),
            ],
            [
                editColumnObjFormat('슬라이드 이미지 4 (500x125)', 'img', { field_name: 'content4' }, 'enrolment_banner_img_4')
            ],
            [
                editColumnObjFormat('링크', 'input', { placeholder: '/home' }, 'enrolment_banner_link_4'),
            ],
            [
                editColumnObjFormat('슬라이드 이미지 5 (500x125)', 'img', { field_name: 'content5' }, 'enrolment_banner_img_5')
            ],
            [
                editColumnObjFormat('링크', 'input', { placeholder: '/home' }, 'enrolment_banner_link_5'),
            ],
            [
                editColumnObjFormat('하단 배너 (600x150)', 'img', { field_name: 'content' }, 'enrolment_bottom_banner'),
            ],
            [
                editColumnObjFormat('링크', 'input', { placeholder: '/home' }, 'enrolment_bottom_banner_link'),
            ],
        ],
    },
    event: {
        schema: 'event',
        breadcrumb: '이벤트',
        add_list: [],
        columns: [//img, select, input, 
            [
                editColumnObjFormat('메인이미지 (300x200)', 'img', { field_name: 'content' }, 'main_img'),
            ],
            [
                editColumnObjFormat('제목', 'input', { placeholder: '제목을 입력해 주세요.' }, 'title'),
            ],
            [
                editColumnObjFormat('시작일', 'input', { type: 'date' }, 'start_date'),
                editColumnObjFormat('종료일', 'input', { type: 'date' }, 'end_date'),
            ],
            [
                editColumnObjFormat('내용', 'editor', {}, 'note'),
            ],
        ],
    },
    faq: {
        schema: 'faq',
        breadcrumb: 'FAQ',
        add_list: [],
        columns: [//img, select, input, 
            [
                editColumnObjFormat('제목', 'input', { placeholder: '제목을 입력해 주세요.' }, 'title'),
            ],
            [
                editColumnObjFormat('내용', 'editor', {}, 'note'),
            ],
        ],
    },
    notice: {
        schema: 'notice',
        breadcrumb: '공지사항',
        columns: [//img, select, input, 
            [
                editColumnObjFormat('메인이미지 (150x100)', 'img', { field_name: 'content' }, 'main_img'),
            ],
            [
                editColumnObjFormat('제목', 'input', { placeholder: '제목을 입력해 주세요.' }, 'title'),
            ],
            [
                editColumnObjFormat('내용', 'editor', {}, 'note'),
            ],
        ],
    },
    review: {
        schema: 'review',
        breadcrumb: '후기',
        columns: [//img, select, input, 
            [
                editColumnObjFormat('제목', 'input', { placeholder: '제목을 입력해 주세요.' }, 'title'),
            ],
            [
                editColumnObjFormat('내용', 'editor', {}, 'note'),
            ],
        ],
    },
    app: {
        schema: 'app',
        breadcrumb: '퍼스트앱',
        add_list: [],
        columns: [//img, select, input, 
            [
                editColumnObjFormat('앱이미지 (150x150)', 'img', { field_name: 'content' }, 'main_img'),
            ],
            [
                editColumnObjFormat('앱이름', 'input', { placeholder: '' }, 'name'),
                editColumnObjFormat('링크', 'input', { placeholder: '' }, 'link'),
            ],
        ],
    },
    popup: {
        schema: 'popup',
        breadcrumb: '팝업',
        add_list: [],
        columns: [//img, select, input, 
            [
                editColumnObjFormat('이미지 (자율)', 'img', { field_name: 'content' }, 'img_src'),
            ],
            [
                editColumnObjFormat('링크', 'input', { placeholder: '/home' }, 'link'),
            ],
        ],
    },
}
export const getManagerListApi = (table, num) => {
    let str = "";
    return str;
}
export const slideSetting = {
    infinite: false,
    dots: true,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 2500,
    slidesToShow: 1.15,
    slidesToScroll: 1,
    breakpoint: 480,
    beforeChange: (current, next) => { console.log(current) },
    afterChange: current => { console.log(current) },
}

export { backUrl };
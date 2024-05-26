import React from 'react';
import './index.css';

export default function Main() {
  return (
    <div className='main-container'>
      <div className='status-bar-iphone-x'>
        <div className='left-side'>
          <div className='time'>
            <div className='colon' />
          </div>
        </div>
        <div className='right-side'>
          <div className='wifi' />
          <div className='battery' />
          <div className='mobile-signal' />
        </div>
      </div>
      <div className='header'>
        <div className='icon-chevron-left'>
          <div className='chevron-left-thin' />
        </div>
        <span className='my-info'>내 정보</span>
      </div>
      <div className='flex-row-ca'>
        <div className='card'>
          <div className='flex-column-ca'>
            <span className='grade-system'>
              * 등급제도란? 내가 적립한 금액에 따라 혜택과 등급이 지정됩니다
            </span>
            <span className='user-name'>두들스 님은</span>
            <div className='line' />
            <span className='nature-protector'>자연의 수호자</span>
            <span className='tree-planting-expert'>나무심기 장인</span>
            <span className='environmental-ally'>환경은 나의 절친</span>
            <span className='environment-friendly'>환경과 친해지는 중</span>
            <span className='green-initiative'>초록의 시작</span>
            <span className='grade'>등급입니다.</span>
            <div className='action' />
            <div className='progress-bar'>
              <button className='button'>
                <span className='next-grade-progress'>
                  다음 등급까지 23 % 남았어요!
                </span>
              </button>
            </div>
          </div>
          <div className='avatar'>
            <div className='rectangle' />
          </div>
        </div>
        <div className='action-1'>
          <span className='greeting'>안녕하세요, 두들스님!</span>
        </div>
      </div>
      <div className='flex-row-bd'>
        <div className='information'>
          <div className='name'>
            <span className='name-label'>이름</span>
            <div className='info'>
              <span className='name-value'>임종민</span>
              <div className='icon-chevron-right'>
                <div className='vector' />
              </div>
            </div>
          </div>
          <div className='user-name-2' />
        </div>
        <div className='info-3'>
          <div className='name-4'>
            <span className='id-email'>ID (email)</span>
            <div className='info-5'>
              <span className='chevron-right'>201911788@kyonggi.ac.kr</span>
              <div className='vector-6'>
                <div className='user-name-7' />
              </div>
            </div>
          </div>
          <div className='info-8' />
        </div>
        <div className='name-9'>
          <div className='nickname'>
            <span className='info-a'>닉네임</span>
            <div className='doodles'>
              <span className='chevron-right-b'>두들스</span>
              <div className='vector-c'>
                <div className='user-name-d' />
              </div>
            </div>
          </div>
          <div className='info-e' />
        </div>
        <div className='name-f'>
          <div className='group-c'>
            <span className='member-number'>회원 번호</span>
            <div className='info-10'>
              <span className='user-id'>1000296554</span>
              <div className='chevron-right-11'>
                <div className='vector-12' />
              </div>
            </div>
          </div>
          <div className='username' />
        </div>
        <div className='user-info'>
          <div className='user-name-13'>
            <span className='contact'>연락처</span>
            <div className='info-14'>
              <span className='phone-number'>010-1234-5678</span>
              <div className='chevron-right-15'>
                <div className='vector-16' />
              </div>
            </div>
          </div>
          <div className='username-17' />
        </div>
        <div className='user-name-18'>
          <span className='exchange-voucher'>보유한 교환권</span>
          <div className='info-19'>
            <span className='voucher-count'>5개</span>
            <span className='voucher-count-1a'> 5개</span>
            <div className='chevron-right-1b'>
              <div className='vector-1c' />
            </div>
          </div>
          <button className='button-1d'>
            <span className='confirm-button'>확인하기</span>
          </button>
        </div>
      </div>
      <div className='flex-row-fd'>
        <div className='information-1e'>
          <div className='name-1f'>
            <span className='logout'>로그아웃</span>
            <div className='info-20'>
              <div className='icon-chevron-right-21'>
                <div className='vector-22' />
              </div>
            </div>
          </div>
          <div className='username-23' />
        </div>
        <div className='username-24' />
        <div className='information-25'>
          <div className='name-26'>
            <span className='withdrawal'>회원탈퇴</span>
            <div className='info-27'>
              <div className='icon-chevron-right-28'>
                <div className='vector-29' />
              </div>
            </div>
          </div>
          <div className='username-2a' />
        </div>
      </div>
      <div className='home-indicator' />
    </div>
  );
}

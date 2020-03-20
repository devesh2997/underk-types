module.exports = {
    ORDER_STATUS_CREATED: 'created',
    ORDER_STATUS_PLACED: 'placed',
    ORDER_STATUS_ACTIVE: 'active',
    ORDER_STATUS_CLOSED: 'closed',
    ORDER_STATUS_DORMANT: 'dormant',

    PRODUCT_STATUS_INIT: 'init',
    PRODUCT_STATUS_CANCELLED: 'cancelled',
    PRODUCT_STATUS_USER_CANCELLED: 'usercancelled',
    PRODUCT_STATUS_ACCEPTED: 'accepted',
    PRODUCT_STATUS_IN_PROGRESS: 'inprogress',
    PRODUCT_STATUS_RETURN_IN_PROGRESS: 'returninprogress',
    PRODUCT_STATUS_CANCELLED_RETURN_IN_PROGRESS: 'cancelledreturninprogress',
    PRODUCT_STATUS_FULFILLED: 'fulfilled',
    PRODUCT_STATUS_CLOSED: 'closed',
  
    PAYMENT_STATUS_COD: 'cod',
    PAYMENT_STATUS_PENDING: 'pending',
    PAYMENT_STATUS_PAID: 'paid',
  
    PAYMENT_MODE_COD: 'cod',
    PAYMENT_MODE_RAZORPAY: 'rzp',
  
    DELIVERY_STATUS_INIT: 'init',
    DELIVERY_STATUS_MANIFESTED: 'manifested',
    DELIVERY_STATUS_IN_TRANSIT: 'intransit',
    DELIVERY_STATUS_PENDING: 'pending',
    DELIVERY_STATUS_OUT_FOR_DELIVERY: 'outfordelivery',
    DELIVERY_STATUS_OUT_FOR_PICKUP: 'outforpickup',
    DELIVERY_STATUS_DELIVERED: 'delivered',
    DELIVERY_STATUS_RETURN_MANIFESTED: 'returnmanifested',
    DELIVERY_STATUS_RETURN_IN_TRANSIT: 'returnintransit',
    DELIVERY_STATUS_CANCELLED_RETURN_IN_TRANSIT: 'cancelledreturnintransit',
    DELIVERY_STATUS_RETURNED: 'returned',
    DELIVERY_STATUS_CANCELLED_RETURNED: 'cancelledreturned',

    RETURN_REFUND_STATUS_INIT : 'refundinit',
    RETURN_REFUND_STATUS_DECLINED: 'refunddeclined',
    RETURN_REFUND_STATUS_PARTIAL: 'refundpartial',
    RETURN_REFUND_STATUS_REFUNDED: 'refunded',

    RETURN_PRODUCT_CONDITION_INIT: 'init',
    RETURN_PRODUCT_CONDITION_DAMAGED: 'product-damaged',
    RETURN_PRODUCT_CONDITION_OKAY: 'product-okay',
  
    DELIVERY_PROVIDER_DELHIVERY: 'delhivery',

    ADDRESS_TYPE_HOME: 'home',
    ADDRESS_TYPE_WORK: 'work',

    ACTION_STATUS_INIT: 'init',
    ACTION_STATUS_PROCESSING: 'processing',
    ACTION_STATUS_COMPLETED: 'completed',
    ACTION_STATUS_ERROR: 'error'
  }
  
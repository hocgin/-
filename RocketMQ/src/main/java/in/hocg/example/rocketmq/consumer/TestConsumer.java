package in.hocg.example.rocketmq.consumer;

import in.hocg.example.rocketmq.constant.TopicConstant;
import in.hocg.example.rocketmq.constant.GroupConstant;
import lombok.extern.slf4j.Slf4j;
import org.apache.rocketmq.spring.annotation.RocketMQMessageListener;
import org.apache.rocketmq.spring.core.RocketMQListener;
import org.springframework.stereotype.Service;

/**
 * Created by hocgin on 2019/3/11.
 * email: hocgin@gmail.com
 *
 * @author hocgin
 */
@Slf4j
@Service
@RocketMQMessageListener(topic = TopicConstant.TEST_TOPIC, consumerGroup = GroupConstant.TEST_CONSUMER_GROUP)
public class TestConsumer implements RocketMQListener<String> {
    @Override
    public void onMessage(String s) {
        log.info("接收到消息 {}", s);
    }
}
